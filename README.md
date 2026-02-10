# The BIG POS Typescript SDK

## Installation
Using npm:

```bash
$ npm install @matech/thebigpos-sdk
```

Using yarn:

```bash
$ yarn add @matech/thebigpos-sdk
```

## Quick Start
```js
import { Api } from "@matech/thebigpos-sdk";

const securityWorker = (data: any) => {
    return { headers: data }
}

const setBearerSecurityWorker = (accessToken:string) => {
    const data = {
        Authorization: `Bearer ${accessToken}`
    };

    apiClient.setSecurityData(data);
};

const apiClient = new Api({
    baseURL:
        process.env.REACT_APP_POS_API_HOST || 'https://api.thebigpos.com',
    securityWorker,
})

apiClient.api.getSiteConfiguration().then((response) => {
    console.log(response.data);
});
```

## Generate SDK from Swagger

To regenerate the SDK from a specific API version, run:

```bash
npx swagger-typescript-api generate -p https://api.thebigpos.dev/swagger/{version}/swagger.json -o ./src -n index.ts -r true --axios --enum-names-as-values --generate-union-enums
```

Replace `{version}` with the target API version (e.g. `v2.34.0`):

```bash
npx swagger-typescript-api generate -p https://api.thebigpos.dev/swagger/v2.34.0/swagger.json -o ./src -n index.ts -r true --axios --enum-names-as-values --generate-union-enums
```

## Publishing

1. Update the `version` field in `package.json` before publishing.
2. Build the project:

```bash
yarn build
```

3. Publish to npm:

```bash
yarn publish
```

____
© 2024 Mortgage Automation Technologies. All rights reserved
