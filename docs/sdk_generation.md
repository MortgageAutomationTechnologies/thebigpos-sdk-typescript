# Publishing the POS Typescript SDK

## Prerequisites

1. Clone the repository (if you haven't already):

```bash
git clone https://github.com/MortgageAutomationTechnologies/thebigpos-sdk-typescript
cd thebigpos-sdk-typescript
```

2. Install swagger-typescript-api globally:

```bash
npm i -g swagger-typescript-api
```

3. Connect to the MAT VPN

## Step 1: Create a release branch

Create a new branch for the version you're releasing:

```bash
git checkout develop
git pull origin develop
git checkout -b release/X.Y.Z
```

## Step 2: Generate the SDK

Replace `{version}` with the target API version (e.g., `v2.31.0`):

```bash
npx swagger-typescript-api generate -p https://api.thebigpos.dev/swagger/{version}/swagger.json -o ./src -n index.ts -r true --axios --enum-names-as-values --generate-union-enums
```

> **Note:** If generating locally, use `http://localhost:5212/swagger/{version}/swagger.json` due to self-signed cert issues with https.

## Step 3: Apply post-generation fixes

Run the script to fix PATCH methods content type and Operation interface:

```bash
node scripts/apply-json-patch-content-type.js
```

This script:
- Sets all PATCH methods to use `ContentType.JsonPatch`
- Adds `JsonPatch` to the `ContentType` enum
- Fixes the `Operation` interface to allow any value type

## Step 4: Update the version

Use npm's version command to update the version in `package.json`:

```bash
npm version X.Y.Z
```

**Version conventions:**

- Match the SDK version to the API version being released
- For release candidates (pre-release), use: `npm version X.Y.Z-rc.N --preid=rc`
- For patch increments: `npm version patch`
- For minor increments: `npm version minor`

## Step 5: Build the SDK

```bash
npm run build
```

Ensure there are no TypeScript compilation errors.

## Step 6: Merge develop (if needed)

If there are changes in develop that need to be included:

```bash
git fetch origin develop
git merge origin/develop
```

If there are conflicts in `src/index.ts` or `dist/*`, regenerate the SDK (Step 2), apply fixes (Step 3), and rebuild (Step 5) to resolve them.

## Step 7: Commit and push

```bash
git add .
git commit -m "X.Y.Z"
git push -u origin release/X.Y.Z
```

## Step 8: Publish to NPM

### Authentication

NPM requires a granular access token with publish permissions and 2FA bypass enabled.

1. Go to [npmjs.com](https://www.npmjs.com) > Access Tokens > Generate New Token
2. Select "Granular Access Token"
3. Enable "Bypass 2FA for automation"
4. Set permissions to publish to `@matech/thebigpos-sdk`

Configure the token:

```bash
npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN
```

### Publish

**To latest (stable release):**

```bash
npm publish --access public
```

**To next (pre-release):**

```bash
npm publish --tag next
```

**To a feature tag (for testing):**

```bash
npm publish --tag feature-name
```

### Installing the SDK

```bash
# Latest stable
yarn add @matech/thebigpos-sdk

# Next pre-release
yarn add @matech/thebigpos-sdk@next

# Specific version
yarn add @matech/thebigpos-sdk@X.Y.Z
```

## Step 9: Clean up

1. **Revoke the NPM token** after publishing for security
2. **Create a Pull Request** from `release/X.Y.Z` to `develop` and `main`
3. **Create a GitHub Release** with release notes
