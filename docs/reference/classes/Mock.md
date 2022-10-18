[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / Mock

# Class: Mock

## Implements

- `MockOf`<[`LedgerLivePlatformSDK`](LedgerLivePlatformSDK.md), ``"bridgeApp"`` \| ``"bridgeDashboard"`` \| ``"completeExchange"`` \| ``"startExchange"`` \| ``"listApps"`` \| ``"synchronizeAccount"`` \| ``"getLastConnectedDeviceInfo"`` \| ``"_saveToStorage"`` \| ``"_getFromStorage"``\>

## Table of contents

### Constructors

- [constructor](Mock.md#constructor)

### Properties

- [connected](Mock.md#connected)
- [storage](Mock.md#storage)

### Methods

- [broadcastSignedTransaction](Mock.md#broadcastsignedtransaction)
- [connect](Mock.md#connect)
- [disconnect](Mock.md#disconnect)
- [getAccount](Mock.md#getaccount)
- [listAccounts](Mock.md#listaccounts)
- [listCurrencies](Mock.md#listcurrencies)
- [receive](Mock.md#receive)
- [requestAccount](Mock.md#requestaccount)
- [signMessage](Mock.md#signmessage)
- [signTransaction](Mock.md#signtransaction)

## Constructors

### constructor

• **new Mock**()

## Properties

### connected

• **connected**: `boolean` = `false`

#### Defined in

[mock/index.ts:37](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L37)

___

### storage

• `Readonly` **storage**: `StorageSDK`

#### Implementation of

MockOf.storage

#### Defined in

[mock/index.ts:47](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L47)

## Methods

### broadcastSignedTransaction

▸ **broadcastSignedTransaction**(`_accountId`, `_signedTransaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_accountId` | `string` |
| `_signedTransaction` | [`RawSignedTransaction`](../modules.md#rawsignedtransaction) |

#### Returns

`Promise`<`string`\>

#### Implementation of

MockOf.broadcastSignedTransaction

#### Defined in

[mock/index.ts:125](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L125)

___

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Implementation of

MockOf.connect

#### Defined in

[mock/index.ts:39](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L39)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Implementation of

MockOf.disconnect

#### Defined in

[mock/index.ts:43](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L43)

___

### getAccount

▸ **getAccount**(`accountId`): `Promise`<[`Account`](../modules.md#account)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

`Promise`<[`Account`](../modules.md#account)\>

#### Defined in

[mock/index.ts:77](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L77)

___

### listAccounts

▸ **listAccounts**(): `Promise`<[`Account`](../modules.md#account)[]\>

#### Returns

`Promise`<[`Account`](../modules.md#account)[]\>

#### Implementation of

MockOf.listAccounts

#### Defined in

[mock/index.ts:70](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L70)

___

### listCurrencies

▸ **listCurrencies**(): `Promise`<[`Currency`](../modules.md#currency)[]\>

#### Returns

`Promise`<[`Currency`](../modules.md#currency)[]\>

#### Implementation of

MockOf.listCurrencies

#### Defined in

[mock/index.ts:62](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L62)

___

### receive

▸ **receive**(`accountId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

MockOf.receive

#### Defined in

[mock/index.ts:91](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L91)

___

### requestAccount

▸ **requestAccount**(): `Promise`<[`Account`](../modules.md#account)\>

Legder Live Methods

#### Returns

`Promise`<[`Account`](../modules.md#account)\>

#### Implementation of

MockOf.requestAccount

#### Defined in

[mock/index.ts:58](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L58)

___

### signMessage

▸ **signMessage**(`_accountId`, `_message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_accountId` | `string` |
| `_message` | `Buffer` |

#### Returns

`Promise`<`string`\>

#### Implementation of

MockOf.signMessage

#### Defined in

[mock/index.ts:121](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L121)

___

### signTransaction

▸ **signTransaction**(`_accountId`, `_transaction`): `Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_accountId` | `string` |
| `_transaction` | `unknown` |

#### Returns

`Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

#### Implementation of

MockOf.signTransaction

#### Defined in

[mock/index.ts:106](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/mock/index.ts#L106)
