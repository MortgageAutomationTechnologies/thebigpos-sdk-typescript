/* 
  This script is meant to run after the SDK has been generated.

  - It updates the generated code to ensure that all PATCH methods use ContentType.JsonPatch.
  - It also ensures that the ContentType enum includes JsonPatch and modifies the Operation interface
    to allow any value for the `value` property instead of just object or null.

  This is necessary because the SDK generation does not currently handle these cases correctly.
*/

const fs = require('fs')

const path = './src/index.ts'
let content = fs.readFileSync(path, 'utf8')

// Update PATCH methods to use ContentType.JsonPatch
content = content.replace(
	/(method:\s*"PATCH"[\s\S]+?)type:\s*ContentType\.Json/g,
	(match) => match.replace('ContentType.Json', 'ContentType.JsonPatch')
)

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
			'value?: any | null;'
		)
		return `export interface Operation {\n  ${updated.trim()}\n}`
	}
)

fs.writeFileSync(path, content)
console.log('SDK patch complete: All PATCH methods now use ContentType.JsonPatch.')
