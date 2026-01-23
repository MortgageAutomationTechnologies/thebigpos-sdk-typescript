# Publishing the POS Typescript SDK

## 1. Clone thebigpos-sdk-typescript project

```bash
git clone https://github.com/MortgageAutomationTechnologies/thebigpos-sdk-typescript
```

## 2. Install swagger-typescript-api

```bash
npm i -g swagger-typescript-api
```

## 3. Connect to the MAT VPN

## 4. Generate the SDK

Open the terminal, replace `{version}` with the target version and run the commands below.

> **Note:** If you are generating the SDK locally, https cannot be used due to the self-signed cert. Use `http://localhost:5212` followed by the swagger json path.

```bash
cd thebigpos-sdk-typescript
npx swagger-typescript-api generate -p https://api.thebigpos.dev/swagger/{version}/swagger.json -o ./src -n index.ts -r true --axios --enum-names-as-values --generate-union-enums
```

## 5. Update the version in package.json

When updating the version, the convention is to check the API's current release version (https://github.com/MortgageAutomationTechnologies/thebigpos-api) and to version the SDK as a RC/prerelease for the API's next patch release.

For example if the API's current version release is v2.15.2 and the newly generated SDK has changes for the next release, the SDK's new version should be something similar to v2.15.3-rc.0 - this would be a RC for the API's upcoming v.2.15.3 release.

The RC version might differ depending on how many times the SDK was generated before the next release. For example, the current SDK version might be v2.15.3-rc.2 if there were 3 changes made since the v2.15.2 release that are awaiting the release of v.2.15.3+. In this case you would increment to v2.15.3-rc.3.

To increment the version before committing and publishing, use npm's version command:

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

**Examples:**

If you are publishing a release candidate, run this command to update and increment the RC version:

```bash
npm version prerelease --preid=rc
```

To increment the minor version (e.g., 2.14.0 to 2.15.0):

```bash
npm version minor
```

## 6. Build the SDK

```bash
npm run build
```

## 7. Push to git

```bash
git commit -am "Your commit message" && git push
```

## 8. Publish to NPM

You will need to authenticate with NPM first. You need to have a NPM account and ask your manager for access to publish. Instructions will be provided if the command fails.

### Publish to the latest tag

```bash
npm publish --access public
```

### Publish to next or feature tag

Publish your package with a tag other than latest using the following syntax:

```bash
npm publish --tag <tag>
```

For example, to publish to the `next` tag (use when publishing an update for the next release):

```bash
npm publish --tag next
```

You and others can then add/update the SDK package by running:

```bash
yarn add @matech/thebigpos-sdk@next
```

Alternatively, when publishing a feature for individual testing, you can publish with a tag of the feature name:

```bash
npm publish --tag sms-updates
```

Then you can add the package to your project with:

```bash
yarn add @matech/thebigpos-sdk@sms-updates
```
