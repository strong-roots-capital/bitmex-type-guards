
bitmex-type-guards [![Build status](https://travis-ci.org/strong-roots-capital/bitmex-type-guards.svg?branch=master)](https://travis-ci.org/strong-roots-capital/bitmex-type-guards) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/bitmex-type-guards.svg)](https://npmjs.org/package/@strong-roots-capital/bitmex-type-guards) [![codecov](https://codecov.io/gh/strong-roots-capital/bitmex-type-guards/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/bitmex-type-guards)
=============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Type-guards for Bitmex API objects

Install
-------

```shell
npm install @strong-roots-capital/bitmex-type-guards
```

Use
---

```typescript
import is from '@strong-roots-capital/bitmex-type-guards'

const promise = bitmex.Order.new({
    symbol: tradepair,
    side: 'Buy',
    orderQty: 100,
    ordType: 'Limit',
    price: 10000,
    execInst: 'ParticipateDoNotInitiate'
})

promise.then(order => console.log(is.order(order)))
//=> true
```

Supported Type-Guards
---------------------

*    Order

More to come as they prove useful. Pull-requests welcome.

Acknowledgments
---------------

*   [@sindresorhus/is](https://github.com/sindresorhus/is)

## Index

### Functions

* [order](#order)

---

## Functions

<a id="order"></a>

###  order

▸ **order**(value: *`any`*): `boolean`

*Defined in [bitmex-type-guards.ts:14](https://github.com/strong-roots-capital/bitmex-type-guards/blob/fc7aef0/src/bitmex-type-guards.ts#L14)*

Type-guard for BitMEX Order interface.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  Potential BitMEX Order object |

**Returns:** `boolean`

___

