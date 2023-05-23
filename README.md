# Telescope 🔭

<p align="center">
  <img width="280" src="https://user-images.githubusercontent.com/545047/175660665-5cbde84b-0928-4e59-ab56-be6adb2f3a7e.png"/>
</p>

<p align="center" width="100%">
  <a href="https://github.com/osmosis-labs/telescope/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/osmosis-labs/telescope/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://www.npmjs.com/package/@osmonauts/telescope"><img height="20" src="https://img.shields.io/npm/dt/@osmonauts/telescope"></a>
   <a href="https://github.com/osmosis-labs/telescope/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"/></a>
   <a href="https://github.com/osmosis-labs/telescope/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"/></a>
   <a href="https://www.npmjs.com/package/@osmonauts/telescope"><img height="20" src="https://img.shields.io/github/package-json/v/osmosis-labs/telescope?filename=packages%2Ftelescope%2Fpackage.json"/></a>
</p>


<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/178129981-5a7d18ed-d2b5-4d85-b828-ca084d38501e.png"/>
</p>

A "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs. Telescope is used to generate libraries for Cosmos blockchains. Simply point to your protobuffer files and create developer-friendly Typescript libraries for teams to build on your blockchain.

The following blockchain libraries (generated by Telescope) are available via npm

* [osmojs](https://www.npmjs.com/package/osmojs)
* [stargazejs](https://www.npmjs.com/package/stargazejs)
* [juno-network](https://www.npmjs.com/package/juno-network)
* [stridejs](https://www.npmjs.com/package/stridejs)
* [injectivejs](https://www.npmjs.com/package/injectivejs)
* [quicksilverjs](https://www.npmjs.com/package/quicksilverjs)

🎥 [Checkout our video playlist](https://www.youtube.com/watch?v=n82MsLe82mk&list=PL-lMkVv7GZwyQaK6bp6kMdOS5mzosxytC) to learn how to use `telescope`!

## Table of contents

- [Telescope 🔭](#telescope-)
  - [Table of contents](#table-of-contents)
  - [Quickstart](#quickstart)
    - [Generate](#generate)
    - [Add Protobufs](#add-protobufs)
    - [Transpile](#transpile)
    - [Build](#build)
- [Usage](#usage)
  - [Programatic Usage](#programatic-usage)
  - [Options](#options)
    - [Amino Encoding](#amino-encoding)
    - [Prototypes Options](#prototypes-options)
    - [Prototypes Methods](#prototypes-methods)
    - [LCD Client Options](#lcd-client-options)
    - [RPC Client Options](#rpc-client-options)
    - [Stargate Client Options](#stargate-client-options)
    - [State Management](#state-management)
      - [React Query](#react-query)
      - [Mobx](#mobx)
      - [Pinia](#pinia)
    - [Typings and Formating](#typings-and-formating)
    - [Protobuf parser](#protobuf-parser)
    - [Typescript Disabling](#typescript-disabling)
    - [ESLint Disabling](#eslint-disabling)
    - [Bundle](#bundle)
    - [Output](#output)
  - [Types](#types)
    - [Timestamp](#timestamp)
    - [Duration](#duration)
  - [Composing Messages](#composing-messages)
  - [Calculating Fees](#calculating-fees)
  - [Stargate Clients](#stargate-clients)
  - [Creating Signers](#creating-signers)
    - [Amino Signer](#amino-signer)
    - [Proto Signer](#proto-signer)
  - [Broadcasting messages](#broadcasting-messages)
  - [LCD Clients](#lcd-clients)
  - [LCD Clients Classes](#lcd-clients-classes)
  - [RPC Clients](#rpc-clients)
  - [RPC Client Classes](#rpc-client-classes)
  - [Manually registering types](#manually-registering-types)
  - [CosmWasm](#cosmwasm)
  - [Dependencies](#dependencies)
  - [Troubleshooting](#troubleshooting)
    - [Create React App](#create-react-app)
    - [Babel](#babel)
  - [Developing](#developing)
  - [Sponsors](#sponsors)
  - [Related](#related)
  - [Credits](#credits)
  - [Disclaimer](#disclaimer)

## Quickstart

Follow the instructions below to generate a new Typescript package that you can publish to npm.

First, install `telescope`:

```sh
npm install -g @osmonauts/telescope
```

### Generate

Use the `generate` command to create a new package.

```sh
telescope generate
cd ./your-new-project
yarn
```
### Add Protobufs

If you have `.proto` files, simply add them to a `./proto` folder.

However, if you want to get started quickly using existing protos from our registry, simply use the `install` command.

```sh
telescope install
```

It's not necessary, but you may also specify specific packages, e.g.

```sh
telescope install @protobufs/osmosis
```

### Transpile

To create the Typescript files, run the `transpile` command.

```sh
telescope transpile
```

You should now seem some `.ts` files generated in `./src`. These are the real source files used in your application.

### Build

Finally, run `install` and `buidl` to generate the JS and types for publishing your module to npm.

```sh
yarn install
yarn buidl
```

Now you should have code inside of your `./src` folder, ready for publshing via `npm publish`. Or, if you used the defaults, you can start developing and your code can be imported from `./src/codegen`;

# Usage
## Programatic Usage

First add telescope to your `devDependencies`:

```sh
yarn add --dev @osmonauts/telescope
```

Install helpers and cosmjs [dependencies listed here](#dependencies)

```js
import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,

  // all options are totally optional ;)
  options: {
    aminoEncoding: {
        enabled: true
    },
    lcdClients: {
        enabled: false
    },
    rpcClients: {
        enabled: false,
        camelCase: true
    },

    // you can scope options to certain packages:
    packages: {
      nebula: {
        prototypes: {
          typingsFormat: {
            useExact: false
          }
        }
      },
      akash: {
        stargateClients: {
            enabled: true;
            includeCosmosDefaultTypes: false;
        },
        prototypes: {
          typingsFormat: {
              useExact: false
          }
        }
      }
    }
  }
}).then(()=>{
  console.log('✨ all done!');
}).catch(e=>{
  console.error(e);
  process.exit(1);
})
```

## Options

### Amino Encoding

| option                         | description                                                     | defaults   |
| ------------------------------ | --------------------------------------------------------------  | ---------- |
| `aminoEncoding.enabled`        | generate amino types and amino converters                       | `true`     |
| `aminoEncoding.casingFn`       | set the amino-casing function for a project                     | `snake()`  |
| `aminoEncoding.exceptions`     | set specific aminoType name exceptions                          | see code   |
| `aminoEncoding.typeUrlToAmino` | create functions for aminoType name exceptions                  | `undefined`|

### Prototypes Options

| option                                    | description                                                     | defaults   |
| ----------------------------------------- | --------------------------------------------------------------  | ---------- |
| `prototypes.enabled`                      | enables the generation of proto encoding methods                | `true`     |
| `prototypes.includePackageVar`            | export a `protoPackage` variable to indicate package name       | `false`    |
| `prototypes.excluded.packages`            | exclude a set of packages from transpilation                    | `undefined`|
| `prototypes.excluded.protos`              | exclude a set of proto files from transpilation                 | `undefined`|
| `prototypes.fieldDefaultIsOptional`       | boolean value representing default optionality of field         | `false`    |
| `prototypes.useOptionalNullable`          | use `(gogoproto.nullable)` values in determining optionality    | `true`     |
| `prototypes.allowUndefinedTypes`          | boolean value allowing `Type`s to be `undefined`                | `false`    |
| `prototypes.optionalQueryParams`          | boolean value setting queryParams to be optional                | `false`    |
| `prototypes.optionalPageRequests`         | boolean value setting `PageRequest` fields to optional          | `false`    |

### Prototypes Methods

| option                             | description                                                        | defaults|
| ---------------------------------- | -----------------------------------------------------------------  | ------- |
| `prototypes.methods.encode`        | boolean to enable `encode` method on proto objects                 | `true`  |
| `prototypes.methods.decode`        | boolean to enable `decode` method on proto objects                 | `true`  |
| `prototypes.methods.fromJSON`      | boolean to enable `fromJSON` method on proto objects               | `true`  |
| `prototypes.methods.toJSON`        | boolean to enable `toJSON` method on proto objects                 | `true`  |
| `prototypes.methods.fromPartial`   | boolean to enable `fromPartial` method on proto objects            | `true`  |
| `prototypes.methods.fromSDK`       | boolean to enable `fromSDK` method on proto objects                | `false` |
| `prototypes.methods.toSDK`         | boolean to enable `toSDK` method on proto objects                  | `false` |

### LCD Client Options

| option                         | description                                                     | defaults   |
| ------------------------------ | --------------------------------------------------------------  | ---------- |
| `lcdClients.enabled`           | generate LCD clients that can query proto `Query` messages      | `true`     |
| `lcdClients.bundle`            | will generate factory bundle aggregate of all LCD Clients       | `true`     |
| `lcdClients.scoped`            | will generate factory of scoped LCD Clients                     | `undefined`|
| `lcdClients.scopedIsExclusive` | will allow both scoped bundles and all RPC Clients              | `true`     |

See [LCD Clients](#lcd-clients) for more info.

### RPC Client Options

| option                         | description                                                             | defaults                      |
| ------------------------------ | ----------------------------------------------------------------------  | ----------------------------- |
| `rpcClients.type`              | will generate this type of RPC client (tendermint, gRPC-web, gRPC)      | `tendermint`                  |
| `rpcClients.enabled`           | generate RPC clients that can interact with proto messages              | `true`                        |
| `rpcClients.bundle`            | will generate factory bundle aggregate of all RPC Clients               | `true`                        |
| `rpcClients.camelCase`         | use camel-case for RPC methods when generating RPC clients              | `true`                        |
| `rpcClients.scoped`            | will generate factory of scoped RPC Clients                             | `undefined`                   |
| `rpcClients.scopedIsExclusive` | will allow both scoped bundles and all RPC Clients                      | `true`                        |
| `rpcClients.enabledServices`   | which services to enable                                                | [`Msg`,`Query`,`Service`]     |

See [RPC Clients](#rpc-clients) for more info.

### Stargate Client Options

| option                                       | description                                                     | defaults |
| -------------------------------------------- | --------------------------------------------------------------  | ---------|
| `stargateClients.includeCosmosDefaultTypes`  | if true, will include the cosmjs defaults with stargate clients | `true` (except cosmos package) |

### State Management
#### React Query

| option                           | description                                                             | defaults |
| -------------------------------- | ----------------------------------------------------------------------  | ---------|
| `reactQuery.enabled`             | if true, will create react hooks that use `@tanstack/react-query` hooks | `false`  |
| `reactQuery.include.protos`                            | if set, will create the hooks on matched proto filenames or patterns using minimatch           | `[]`     |
| `reactQuery.include.packages`                            | if set, will create the hooks on matched packages files using minimatch           | `[]`     |
| `reactQuery.include.patterns`                            | if set, will create the hooks on matched patterns of files using minimatch(deprecated in favor of packages and protos have been supported minimatch)           | `[]`     |

#### Mobx

| option                           | description                                                             | defaults |
| -------------------------------- | ----------------------------------------------------------------------  | ---------|
| `mobx.enabled`                   | if true, will create mobx stores that use `mobx`                        | `false`  |
| `mobx.include.protos`                            | if set, will create the mobx stores on matched proto filenames or patterns using minimatch           | `[]`     |
| `mobx.include.packages`                            | if set, will create the mobx stores on matched packages files using minimatch           | `[]`     |
| `mobx.include.patterns`                            | if set, will create the mobx stores on matched patterns of proto files using minimatch(deprecated in favor of packages and protos have been supported minimatch)           | `[]`     |


#### Pinia

| option                           | description                                                             | defaults |
| -------------------------------- | ----------------------------------------------------------------------  | ---------|
| `pinia.enabled`                  | if true, will create pinia stores that use `pinia`                      | `false`  |
| `mobx.include.protos`                            | if set, will create the pinia stores on matched proto filenames or patterns using minimatch           | `[]`     |
| `mobx.include.packages`                            | if set, will create the pinia stores on matched packages files using minimatch           | `[]`     |
| `mobx.include.patterns`                            | if set, will create the pinia stores on matched patterns of proto files using minimatch(deprecated in favor of packages and protos have been supported minimatch)           | `[]`     |


### Typings and Formating

| option                                    | description                                                     | defaults  |
| ----------------------------------------- | --------------------------------------------------------------  | --------- |
| `prototypes.typingsFormat.customTypes.useCosmosSDKDec` | enable handling "prototypes.typingsFormat.customTypes.useCosmosSDKDec" proto custom type. Used to show decimal fields with the custom type correctly. Highly recommend set to true.    | `false`    |
| `prototypes.typingsFormat.num64` | 'long' or 'bigint', the way of generating int64 proto types, set to 'bigint' to enable using more stable built-in type   | `long`    |
| `prototypes.typingsFormat.useDeepPartial` | defaults to true, but if disabled uses the `Partial` TS type    | `true`    |
| `prototypes.typingsFormat.useExact`       | defaults to false, but if enabled uses the `Exact` TS type      | `false`   |
| `prototypes.typingsFormat.timestamp`      | use either `date` or `timestamp` for `Timestamp` proto type     | "date"    |
| `prototypes.typingsFormat.duration`       | use either `duration` or `string` for `Duration` proto type     | "duration"|

### Protobuf parser

| option                                    | description                                                     | defaults  |
| ----------------------------------------- | --------------------------------------------------------------  | --------- |
| `prototypes.parser.keepCase`              | passes `keepCase` to protobuf `parse()` to keep original casing | `true`   |
| `prototypes.parser.alternateCommentMode`  | passes `alternateCommentMode` to protobuf `parse()` method      | `true`    |
| `prototypes.parser.preferTrailingComment` | passes `preferTrailingComment` to protobuf `parse()` method     | `false`   |

### Typescript Disabling

| option                                       | description                                                     | defaults |
| -------------------------------------------- | --------------------------------------------------------------  | ---------|
| `tsDisable.disableAll`                       | if true, will include `//@ts-nocheck` on every output file      | `false`  |
| `tsDisable.patterns`                         | if set, will include `//@ts-nocheck` on matched patterns        | `[]`     |
| `tsDisable.files`                            | if set, will include `//@ts-nocheck` on matched files           | `[]`     |

### ESLint Disabling

| option                                       | description                                                       | defaults |
| -------------------------------------------- | ----------------------------------------------------------------  | ---------|
| `eslintDisable.disableAll`                   | if true, will include `/* eslint-disable */` on every output file | `false`  |
| `eslintDisable.patterns`                     | if set, will include `/* eslint-disable */` on matched patterns   | `[]`     |
| `eslintDisable.files`                        | if set, will include `/* eslint-disable */` on matched files      | `[]`     |

### Bundle

| option                         | description                                                     | defaults   |
| ------------------------------ | --------------------------------------------------------------  | ---------- |
| `bundle.enabled`               | bundle all files into a scoped index file                       | `true`     |

### Output

| option                         | description                                                        | defaults   |
| ------------------------------ | -----------------------------------------------------------------  | ---------- |
| `env`          | 'default' or 'v-next', set to 'v-next' to enable yet to release features                                             | `default`     |
| `removeUnusedImports`          | removes unused imports                                             | `true`     |
| `classesUseArrowFunctions`     | classes use arrow functions instead of `bind()`ing in constructors | `false`    |
| `includeExternalHelpers`       | exports a few helpers functions in `extern.ts`                     | `false`    |

## Types

### Timestamp

The representation of `google.protobuf.Timestamp` is configurable by the `prototypes.typingsFormat.timestamp` option.

| Protobuf type    | Default/`date='date'` | `date='timestamp'`                      |
| --------------------------- | ---------------------- | ----------------------------------|
| `google.protobuf.Timestamp` | `Date`                 | `{ seconds: Long, nanos: number }`|

TODO
- [ ] add `date='string'` option

### Duration

The representation of `google.protobuf.Duration` is configurable by the `prototypes.typingsFormat.duration` option.

| Protobuf type    | Default/`duration='duration'` | `duration='string'`                      |  |
| --------------------------- | ---------------------- | ------------------------------------ | ---------------- |
| `google.protobuf.Duration` | `{ seconds: Long, nanos: number }`                 | `string` |  |

## Composing Messages

This example shows messages from the `osmojs`, which was built with Telescope.

Import the `osmosis` object from `osmojs`. In this case, we're show the messages available from the `osmosis.gamm.v1beta1` module:

```js
import { osmosis } from 'osmojs';

const {
    joinPool,
    exitPool,
    exitSwapExternAmountOut,
    exitSwapShareAmountIn,
    joinSwapExternAmountIn,
    joinSwapShareAmountOut,
    swapExactAmountIn,
    swapExactAmountOut
} = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
```

Now you can construct messages. If you use vscode or another typescript-enabled IDE, you should also be able to use `ctrl+space` to see auto-completion of the fields required for the message.

```js
import { coin } from '@cosmjs/amino';

const msg = swapExactAmountIn({
  sender,
  routes,
  tokenIn: coin(amount, denom),
  tokenOutMinAmount
});
```
## Calculating Fees

Make sure to create a `fee` object in addition to your message.

```js
import { coins } from '@cosmjs/amino';

const fee = {
    amount: coins(0, 'uosmo'),
    gas: '250000'
}
```

if you are broadcasting multiple messages in a batch, you should `simulate` your tx and estimate the fee

```js
import { Dec, IntPretty } from '@keplr-wallet/unit';

const gasEstimated = await stargateClient.simulate(address, msgs, memo);
const fee = {
  amount: coins(0, 'uosmo'),
  gas: new IntPretty(new Dec(gasEstimated).mul(new Dec(1.3)))
    .maxDecimals(0)
    .locale(false)
    .toString()
};
```
## Stargate Clients

Every module gets their own signing client. This example demonstrates for the `osmosis` module.

Use `getSigningOsmosisClient` to get your `SigningStargateClient`, with the Osmosis proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningOsmosisClient } from 'osmojs';

const client = await getSigningOsmosisClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```

## Creating Signers

To broadcast messages, you'll want to use either [keplr](https://docs.keplr.app/api/cosmjs.html) or an `OfflineSigner` from `cosmjs` using mnemonics.
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSigner as getOfflineSignerAmino } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSigner as getOfflineSignerProto } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```

## Broadcasting messages

Now that you have your `client`, you can broadcast messages:

```js
import { signAndBroadcast } from '@osmosnauts/helpers';

const res = await signAndBroadcast({
  client, // SigningStargateClient
  chainId: 'osmosis-1', // use 'osmo-test-4' for testnet
  address,
  msgs: [msg],
  fee,
  memo: ''
});
```

## LCD Clients

For querying data via REST endpoints, you can use LCD Clients. For a better developer experience, you can generate a factory of scoped bundles of all LCD Clients with the `lcdClients` option.

```ts
const options: TelescopeOptions = {
    lcdClients: {
        enabled: true;
    }
};
```

If you use the `lcdClients.scoped` array, you can scope to only the modules of your interest.

```ts
const options: TelescopeOptions = {
  lcdClients: {
    enabled: true,
    scoped: [
      {
        dir: 'osmosis',
        filename: 'custom-lcd-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'osmosis.gamm.v1beta1'
        ],
        addToBundle: true,
        methodName: 'createCustomLCDClient'
      },
      {
        dir: 'evmos',
        filename: 'custom-lcd-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'evmos.erc20.v1'
        ],
        addToBundle: true,
        methodName: 'createEvmosLCDClient'
      }
    ]
  }
};
```

This will generate a nice helper in the `ClientFactory`, which you can then use to query multiple modules from a single object:

```js
import { osmosis } from './codegen';

const main = async () => {
   const client = await osmosis.ClientFactory.createLCDClient({ restEndpoint: REST_ENDPOINT });

   // now you can query the modules
   const pool = await client.osmosis.gamm.v1beta1.pool({ poolId: "1" });
   const balance = await client.cosmos.bank.v1beta1.allBalances({ address: 'osmo1addresshere' });
};
```

## LCD Clients Classes

If you want to instantiate a single client, for any module that has a `Query` type, there will be a `LCDQueryClient` object:

```js
import { osmosis } from "osmojs";

export const main = async () => {
    const requestClient = new LCDClient({ restEndpoint: REST_ENDPOINT });
    const client = new osmosis.gamm.v1beta1.LCDQueryClient({ requestClient });
    const pools = await client.pools();
    console.log(pools);
};

main().then(() => {
    console.log('all done')
})
```
## RPC Clients

For querying data via RPC endpoints, you can use RPC Clients. For a better developer experience, you can generate a factory of scoped bundles of all RPC Clients with the `rpcClients` option.

```ts
const options: TelescopeOptions = {
  rpcClients: {
    enabled: true
  }
};
```

If you use the `rpcClients.scoped` array, you can scope to only the modules of your interest.

```ts
const options: TelescopeOptions = {
  rpcClients: {
    enabled: true,
    camelCase: true,
    scoped: [
      {
        dir: 'osmosis',
        filename: 'osmosis-rpc-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'osmosis.gamm.v1beta1'
        ],
        addToBundle: true,
        methodNameQuery: 'createRPCQueryClient',
        methodNameTx: 'createRPCTxClient'
      }
    ]
  }
};
```

This will generate helpers `createRPCQueryClient` and `createRPCTxClient` in the `ClientFactory`, which you can then use to query multiple modules from a single object:

```js
import { osmosis } from './codegen';

const main = async () => {
  const client = await osmosis.ClientFactory.createRPCQueryClient({ rpcEndpoint });

  // now you can query the modules
  const pool = await client.osmosis.gamm.v1beta1.pool({ poolId: "1" });
  const balance = await client.cosmos.bank.v1beta1.allBalances({ address: 'osmo1addresshere' });
};
```

## RPC Client Classes

If you want to instantiate a single client, you can generate RPC classes with the `rpcClients` option;

For any module that has a `Msg`, `Query` or `Service` type, a

```js
import { osmosis, cosmos } from 'osmojs';

const MsgClient = osmosis.gamm.v1beta1.MsgClientImpl;
const QueryClient = osmosis.gamm.v1beta1.QueryClientImpl;
const ServiceClient = cosmos.base.tendermint.v1beta1.ServiceClientImpl;
```

Here is an example of making a query if you want to use the RPC client classes manually:

```js
import { osmosis } from "osmojs";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

export const main = async () => {
    const tmClient = await Tendermint34Client.connect(RPC_ENDPOINT);
    const QueryClientImpl = osmosis.gamm.v1beta1.QueryClientImpl;
    const client = new QueryClient(tmClient);
    const rpc = createProtobufRpcClient(client);
    const queryService = new QueryClientImpl(rpc);
    const pools = await queryService.pools({})
    console.log(pools);
};

main().then(() => {
    console.log('all done')
})
```
## Manually registering types

This example is with `osmosis` module in `osmojs`, but it is the same pattern for any module.

NOTE: this is using `@cosmjs/stargate@0.28.4`

```js
import {
    AminoTypes,
    SigningStargateClient
} from '@cosmjs/stargate';
import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing'
import { osmosis } from 'osmojs';

export const getCustomSigningClient = async ({ rpcEndpoint, signer }: { rpcEndpoint: string, signer: OfflineSigner }) => {
  // registry
  const registry = new Registry(defaultRegistryTypes);

  // aminotypes
  const aminoTypes = new AminoTypes({
    ...osmosis.gamm.v1beta1.AminoConverter,
    ...osmosis.lockup.AminoConverter,
    ...osmosis.superfluid.AminoConverter
  });

  // load the
  osmosis.gamm.v1beta1.load(registry);
  osmosis.lockup.load(registry);
  osmosis.superfluid.load(registry);

  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    { registry, aminoTypes }
  );

  return client;
};
```

## CosmWasm

Generate TypeScript SDKs for your CosmWasm smart contracts by using the `cosmwasm` option on `TelescopeOptions`. The `cosmwasm` option is actually a direct reference to the `TSBuilderInput` object, for the most up-to-date documentation, visit [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen).

```ts
import { TSBuilderInput } from '@cosmwasm/ts-codegen';
const options: TelescopeOptions = {
  cosmwasm: {
    contracts: [
      {
        name: 'SG721',
        dir: './path/to/sg721/schema'
      },
      {
        name: 'Minter',
        dir: './path/to/Minter/schema'
      }
    ],
    outPath: './path/to/code/src/'
  }
};
```

## Dependencies

If you don't use the boilerplate, you will need to manually install

- `@cosmjs/amino`
- `@cosmjs/proto-signing`
- `@cosmjs/stargate`
- `@cosmjs/tendermint-rpc`

```sh
yarn add @cosmjs/amino @cosmjs/proto-signing @cosmjs/stargate @cosmjs/tendermint-rpc
```

If you use the LCD Client generation, you'll need to add

- `@osmonauts/lcd`

```sh
yarn add @osmonauts/lcd
```

## Troubleshooting

### Create React App

CRA requires that you update Webpack configurations:

https://github.com/cosmos/cosmjs/blob/656e02374898afe755e980e93390591b4b65fd86/README.md#webpack-configs

Here is an example of a `config-overrides.js`:

https://github.com/pyramation/osmosis-ui/blob/main/config-overrides.js

### Babel

This should not be an issue, but if you experience problems with syntax or are not using `preset-env`, you may need these babel plugins:

* [babel-plugin-proposal-numeric-separator](https://babeljs.io/docs/en/babel-plugin-proposal-numeric-separator)
* [babel-plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)
* [babel-plugin-proposal-nullish-coalescing-operator](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator)

## Developing

See our [documentation](https://github.com/osmosis-labs/telescope/blob/main/docs/README.md) for how to contribute and develop Telescope.
## Sponsors

Kudos to our sponsors:

* [Osmosis](https://osmosis.zone) funded the creation of Telescope.

## Related

Checkout these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Thanks to these engineers, teams and projects for inspiring Telescope:

* [@webmaster128](https://github.com/webmaster128)
* [@assafmo](https://github.com/assafmo)
* [osmosis-frontend](https://github.com/osmosis-labs/osmosis-frontend)
* [cosmjs](https://github.com/cosmos/cosmjs)
* [ts-proto](https://github.com/stephenh/ts-proto)
* [keplr-wallet](https://github.com/chainapsis/keplr-wallet)

## Disclaimer

AS DESCRIBED IN THE TELESCOPE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating Telescope will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Telescope code or Telescope CLI, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
