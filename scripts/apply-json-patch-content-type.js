/*
  This script is meant to run after the SDK has been generated.

  The OpenAPI generator does not reliably carry the `application/json-patch+json`
  content type into the generated request options, so this script fixes the
  `type` field of each generated PATCH method:

    - PATCH endpoints that use JSON Patch are forced to ContentType.JsonPatch.
    - PATCH endpoints that intentionally use plain application/json (see
      PATCH_ENDPOINTS_USING_PLAIN_JSON) are forced to ContentType.Json. These
      mirror backend [Consumes("application/json")] attributes.

  It also ensures the ContentType enum includes JsonPatch and relaxes the
  Operation interface `value` property to accept any value.

  Design notes (why this is shaped the way it is):
    - The husky pre-commit hook runs this script on every commit, so it MUST be
      idempotent. It sets each method's content type to its target value rather
      than conditionally replacing, so re-running is a no-op.
    - The rewrite is scoped to a single generated method block at a time. A prior
      version used a file-wide regex whose lazy quantifier backtracked across
      method boundaries, which corrupted unrelated POST methods and produced an
      invalid `ContentType.JsonPatchPatch` token. Per-method scoping prevents both.
    - Non-PATCH methods are never left as JSON Patch (repairs the corruption above).
*/

const fs = require('fs')

const path = require('path').resolve(__dirname, '../src/index.ts')

if (!fs.existsSync(path)) {
	console.error(`Error: File not found at path "${path}". Please ensure the SDK has been generated.`)
	process.exit(1)
}
let content
try {
	content = fs.readFileSync(path, 'utf8')
} catch (err) {
	console.error(`Error: Unable to read file at path "${path}". Details: ${err.message}`)
	process.exit(1)
}

// Endpoints that intentionally use application/json (not application/json-patch+json).
// Keep this list in sync with backend [Consumes("application/json")] attributes on PATCH endpoints.
const PATCH_ENDPOINTS_USING_PLAIN_JSON = new Set([
	'updateLoan', // PATCH /api/loans/{loanId}
])

// Heal a previous double-application bug (ContentType.JsonPatchPatch, JsonPatchPatchPatch, ...).
content = content.replace(/ContentType\.JsonPatch(?:Patch)+\b/g, 'ContentType.JsonPatch')

// Match each generated endpoint method block, from its name up to its own `...params,`.
// Anchoring the end on `...params` (every generated method ends with it) keeps the
// match within a single method, so the type rewrite never bleeds into other methods.
const METHOD_BLOCK = /([a-zA-Z0-9_]+):\s*\([\s\S]*?\)\s*=>\s*this\.request<[^>]*>\(\{[\s\S]*?\.\.\.params,/g

function setContentType(block, contentTypeMember) {
	const target = `type: ContentType.${contentTypeMember}`
	if (/type:\s*ContentType\.\w+/.test(block)) {
		return block.replace(/type:\s*ContentType\.\w+/, target)
	}
	if (/type:\s*"[^"]*"/.test(block)) {
		return block.replace(/type:\s*"[^"]*"/, target)
	}
	// No explicit content type emitted by the generator. Add one right before the
	// `format:` line (or `...params` if there is no format line) so the intent is explicit.
	if (/\n(\s*)format:/.test(block)) {
		return block.replace(/\n(\s*)format:/, `\n$1${target},\n$1format:`)
	}
	return block.replace(/\n(\s*)\.\.\.params,/, `\n$1${target},\n$1...params,`)
}

content = content.replace(METHOD_BLOCK, (block, methodName) => {
	const isPatch = /method:\s*"PATCH"/.test(block)

	if (isPatch) {
		const member = PATCH_ENDPOINTS_USING_PLAIN_JSON.has(methodName) ? 'Json' : 'JsonPatch'
		return setContentType(block, member)
	}

	// Non-PATCH methods must never be JSON Patch. Revert any leftover corruption.
	if (/type:\s*ContentType\.JsonPatch\b/.test(block)) {
		return block.replace(/type:\s*ContentType\.JsonPatch\b/, 'type: ContentType.Json')
	}
	return block
})

// Ensure JsonPatch is included in the ContentType enum
content = content.replace(
	/export enum ContentType\s*{([\s\S]*?)}/,
	(match, enumBody) => {
		if (enumBody.includes('JsonPatch')) return match
		const insertion = `  JsonPatch = "application/json-patch+json",\n  `
		return `export enum ContentType {\n${insertion}${enumBody.trim()}\n}`
	}
)

// Fix the Operation interface to allow any value
content = content.replace(
	/export interface Operation\s*{([\s\S]*?)}/,
	(match, body) => {
		const updated = body.replace(
			/value\?:\s*object\s*\|?\s*null?;/,
			'value?: string | number | boolean | null | object;'
		)
		return `export interface Operation {\n  ${updated.trim()}\n}`
	}
)

fs.writeFileSync(path, content)
console.log('SDK patch complete: PATCH content types normalized (JSON Patch vs plain JSON).')
