/*
  Post-generation fixup for the generated TypeScript SDK.

  swagger-typescript-api does not propagate the `application/json-patch+json`
  request content type into the generated code, so PATCH methods that use JSON
  Patch would otherwise go out with the wrong Content-Type. This script restores
  it by reading the OpenAPI spec the SDK was generated from and, for every
  generated PATCH method, setting:

    - ContentType.JsonPatch  -> when the spec's requestBody for that path
                                advertises application/json-patch+json
    - ContentType.Json       -> for every other PATCH method
                                (e.g. updateLoan, which the backend declares as
                                [Consumes("application/json")])

  The decision is taken entirely from the spec — there is no hard-coded list of
  endpoints to keep in sync. It also ensures the ContentType enum includes
  JsonPatch and relaxes the Operation interface `value` to accept any value.

  It additionally teaches `createFormData` to recognise React Native files. The
  generator assumes a browser and detects file parts with `instanceof Blob ||
  instanceof File`; in React Native a file is a plain `{ uri, name, type }`
  object, so without the extra branch every mobile upload is serialised as the
  string "[object Object]". This used to live as a patch-package patch in
  pos-mobile-v2, which had to be re-created on every SDK bump.

  Usage (pass the SAME spec given to `swagger-typescript-api -p`):
    node scripts/apply-json-patch-content-type.js https://api.thebigpos.dev/swagger/<version>/swagger.json
    node scripts/apply-json-patch-content-type.js ./swagger.json
    SWAGGER_SPEC=<url-or-file> node scripts/apply-json-patch-content-type.js

  Design notes:
    - The rewrite is scoped to a single generated method block at a time
      (anchored on that method's own `...params,`), so it can never bleed across
      method boundaries.
    - It sets each method's content type to its target value rather than doing a
      conditional replace, so it is idempotent and self-healing (it also repairs
      a previously-seen ContentType.JsonPatchPatch double-application).
    - If no spec is provided (e.g. a plain commit-hook run), the content-type
      rewrite is skipped instead of guessing, so it can never silently corrupt
      the generated output.
*/

const fs = require('fs')
const nodePath = require('path')

const SRC = nodePath.resolve(__dirname, '../src/index.ts')

async function loadSpec(source) {
	if (!source) return null
	if (/^https?:\/\//i.test(source)) {
		const res = await fetch(source)
		if (!res.ok) throw new Error(`Failed to fetch spec from "${source}": HTTP ${res.status}`)
		return res.json()
	}
	return JSON.parse(fs.readFileSync(nodePath.resolve(source), 'utf8'))
}

// Collapse spec ("{id}") and generated ("${id}") path params to a common token
// so generated paths can be matched against spec paths regardless of param names.
function normalizePath(p) {
	return p.replace(/\$\{[^}]+\}/g, '{}').replace(/\{[^}]+\}/g, '{}')
}

function jsonPatchPaths(spec) {
	const set = new Set()
	for (const [route, ops] of Object.entries(spec.paths || {})) {
		const content = ops && ops.patch && ops.patch.requestBody && ops.patch.requestBody.content
		if (content && Object.prototype.hasOwnProperty.call(content, 'application/json-patch+json')) {
			set.add(normalizePath(route))
		}
	}
	return set
}

function setContentType(block, member) {
	const target = `type: ContentType.${member}`
	if (/type:\s*ContentType\.\w+/.test(block)) return block.replace(/type:\s*ContentType\.\w+/, target)
	if (/type:\s*"[^"]*"/.test(block)) return block.replace(/type:\s*"[^"]*"/, target)
	if (/\n(\s*)format:/.test(block)) return block.replace(/\n(\s*)format:/, `\n$1${target},\n$1format:`)
	return block.replace(/\n(\s*)\.\.\.params,/, `\n$1${target},\n$1...params,`)
}

const CONTENT_TYPE_ENUM = /export enum ContentType\s*{([\s\S]*?)}/

function ensureJsonPatchEnum(content) {
	const found = content.match(CONTENT_TYPE_ENUM)
	if (!found) {
		throw new Error(
			'ensureJsonPatchEnum: no `export enum ContentType` in the generated SDK.\n' +
				'Either the generator stopped emitting it or its shape changed. Without the enum ' +
				'the PATCH content-type rewrite below has nothing to reference, so JSON Patch ' +
				'requests go out with the wrong Content-Type.'
		)
	}

	if (found[1].includes('JsonPatch')) return content

	return content.replace(
		CONTENT_TYPE_ENUM,
		(match, enumBody) =>
			`export enum ContentType {\n  JsonPatch = "application/json-patch+json",\n  ${enumBody.trim()}\n}`
	)
}

const OPERATION_INTERFACE = /export interface Operation\s*{([\s\S]*?)}/
const OPERATION_VALUE_MEMBER = /value\?:[^;]*;/
const RELAXED_OPERATION_VALUE = 'value?: string | number | boolean | null | object;'

function relaxOperationValue(content) {
	const found = content.match(OPERATION_INTERFACE)
	if (!found) {
		throw new Error(
			'relaxOperationValue: no `export interface Operation` in the generated SDK.\n' +
				'JSON Patch operations would then be typed by whatever the generator emitted, ' +
				'rejecting primitive `value`s at compile time in consumers.'
		)
	}

	const body = found[1]
	if (body.includes(RELAXED_OPERATION_VALUE)) return content

	// The previous version rewrote (and reformatted) the interface even when the
	// inner replace matched nothing, so a renamed or restructured member looked
	// like a successful run while `value` stayed narrow.
	if (!OPERATION_VALUE_MEMBER.test(body)) {
		throw new Error(
			'relaxOperationValue: found `export interface Operation` but no `value?:` member.\n' +
				`Body was:\n${body.trim()}\n` +
				'Update OPERATION_VALUE_MEMBER in this script.'
		)
	}

	const updated = body.replace(OPERATION_VALUE_MEMBER, RELAXED_OPERATION_VALUE)
	return content.replace(
		OPERATION_INTERFACE,
		() => `export interface Operation {\n  ${updated.trim()}\n}`
	)
}

const RN_FILE_MARKER = 'isReactNativeFile'

// swagger-typescript-api assumes a browser: it detects multipart file parts with
// `instanceof Blob || instanceof File`. React Native has neither in a usable form —
// a file there is a plain `{ uri, name, type }` object. Without this branch those
// objects fall through to `stringifyFormItem` and every upload from the mobile app
// goes out as the string "[object Object]".
//
// The React Native check runs first so the `instanceof` operands are never even
// evaluated on that path.
//
// The pattern is deliberately whitespace-tolerant instead of matching one exact
// line. As generated today that statement is exactly 80 characters wide, which is
// Prettier's default printWidth — so the moment the generator nests it one level
// deeper, or renames `formItem`, Prettier reflows it across two lines. Anchoring
// on the single-line form would then quietly stop matching.
const GENERATED_FILE_CHECK =
	/^([ \t]*)const isFileType\s*=\s*formItem instanceof Blob\s*\|\|\s*formItem instanceof File;/m

function applyReactNativeFileSupport(content) {
	if (content.includes(RN_FILE_MARKER)) return content

	// Never fail open. A silent no-op here ships an SDK where every React Native
	// upload is serialised as "[object Object]", with nothing in the build to
	// suggest anything went wrong.
	if (!GENERATED_FILE_CHECK.test(content)) {
		throw new Error(
			'applyReactNativeFileSupport: could not find the generated `isFileType` check in ' +
				'createFormData.\n' +
				'swagger-typescript-api has most likely changed its output. Update ' +
				'GENERATED_FILE_CHECK in this script — do not skip this step, or React Native ' +
				'file uploads will break with no visible error.'
		)
	}

	return content.replace(
		GENERATED_FILE_CHECK,
		(match, indent) =>
			[
				`${indent}// React Native files are plain { uri, name, type } objects, not Blob/File.`,
				`${indent}const ${RN_FILE_MARKER} =`,
				`${indent}  !!formItem &&`,
				`${indent}  typeof formItem === "object" &&`,
				`${indent}  "uri" in formItem &&`,
				`${indent}  "name" in formItem &&`,
				`${indent}  "type" in formItem;`,
				`${indent}const isFileType =`,
				`${indent}  ${RN_FILE_MARKER} || formItem instanceof Blob || formItem instanceof File;`,
			].join('\n')
	)
}

function applyContentTypes(content, patchPaths) {
	// Heal any earlier double-application (ContentType.JsonPatchPatch...).
	content = content.replace(/ContentType\.JsonPatch(?:Patch)+\b/g, 'ContentType.JsonPatch')

	const METHOD_BLOCK = /[a-zA-Z0-9_]+:\s*\([\s\S]*?\)\s*=>\s*this\.request<[^>]*>\(\{[\s\S]*?\.\.\.params,/g
	return content.replace(METHOD_BLOCK, (block) => {
		if (!/method:\s*"PATCH"/.test(block)) {
			// Non-PATCH methods must never be JSON Patch.
			return /type:\s*ContentType\.JsonPatch\b/.test(block)
				? block.replace(/type:\s*ContentType\.JsonPatch\b/, 'type: ContentType.Json')
				: block
		}
		const routeMatch = block.match(/path:\s*`([^`]*)`/)
		const route = routeMatch ? normalizePath(routeMatch[1]) : ''
		return setContentType(block, patchPaths.has(route) ? 'JsonPatch' : 'Json')
	})
}

;(async () => {
	if (!fs.existsSync(SRC)) {
		console.error(`Error: File not found at "${SRC}". Generate the SDK first.`)
		process.exit(1)
	}

	const source = process.argv[2] || process.env.SWAGGER_SPEC || process.env.SWAGGER_URL
	let spec
	try {
		spec = await loadSpec(source)
	} catch (err) {
		console.error(`Error loading OpenAPI spec: ${err.message}`)
		process.exit(1)
	}

	let content = fs.readFileSync(SRC, 'utf8')
	content = ensureJsonPatchEnum(content)
	content = relaxOperationValue(content)
	content = applyReactNativeFileSupport(content)

	if (!spec) {
		console.warn(
			'No OpenAPI spec provided (argument / SWAGGER_SPEC / SWAGGER_URL) — skipping PATCH content-type rewrite.\n' +
				'Re-run with the spec used for generation to apply it, e.g.:\n' +
				'  node scripts/apply-json-patch-content-type.js https://api.thebigpos.dev/swagger/<version>/swagger.json'
		)
		fs.writeFileSync(SRC, content)
		return
	}

	const patchPaths = jsonPatchPaths(spec)
	content = applyContentTypes(content, patchPaths)

	fs.writeFileSync(SRC, content)
	console.log(`SDK patch complete: PATCH content types set from the OpenAPI spec (${patchPaths.size} json-patch endpoint(s)).`)
})().catch((err) => {
	console.error(err)
	process.exit(1)
})
