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

function ensureJsonPatchEnum(content) {
	return content.replace(/export enum ContentType\s*{([\s\S]*?)}/, (match, enumBody) => {
		if (enumBody.includes('JsonPatch')) return match
		return `export enum ContentType {\n  JsonPatch = "application/json-patch+json",\n  ${enumBody.trim()}\n}`
	})
}

function relaxOperationValue(content) {
	return content.replace(/export interface Operation\s*{([\s\S]*?)}/, (match, body) => {
		const updated = body.replace(
			/value\?:\s*object\s*\|?\s*null?;/,
			'value?: string | number | boolean | null | object;'
		)
		return `export interface Operation {\n  ${updated.trim()}\n}`
	})
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
