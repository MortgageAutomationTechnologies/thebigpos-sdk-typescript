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

____
© 2024 Mortgage Automation Technologies. All rights reserved
