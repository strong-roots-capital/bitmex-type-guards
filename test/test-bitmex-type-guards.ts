import test from 'ava'

/**
 * Library under test
 */

import is from '../src/bitmex-type-guards'

const TestObject = {
    orderID: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
    clOrdID: '',
    clOrdLinkID: '',
    account: 0,
    symbol: 'XBTUSD',
    side: 'Buy',
    simpleOrderQty: null,
    orderQty: 100,
    price: 10000,
    displayQty: null,
    stopPx: null,
    pegOffsetValue: null,
    pegPriceType: '',
    currency: 'USD',
    settlCurrency: 'XBt',
    ordType: 'Limit',
    timeInForce: 'GoodTillCancel',
    execInst: 'ParticipateDoNotInitiate',
    contingencyType: '',
    exDestination: 'XBME',
    ordStatus: 'New',
    triggered: '',
    workingIndicator: true,
    ordRejReason: '',
    simpleLeavesQty: null,
    leavesQty: 1,
    simpleCumQty: null,
    cumQty: 0,
    avgPx: null,
    multiLegReportingType: 'SingleSecurity',
    text: 'Submitted via API.',
    transactTime: '2019-10-19T22:13:27.279Z',
    timestamp: '2019-10-19T22:13:27.279Z'
}

test('should not recognize undefined', t => {
    t.false(is.order(undefined))
})

test('should not recognize null', t => {
    t.false(is.order(null))
})

test('should recognize object with string property `orderID`', t => {
    t.true(is.order({orderID: '12345'}))
})

test('should not recognize object with number property `orderID`', t => {
    t.false(is.order({orderID: 12345}))
})

test('should recognize real-world response', t => {
    t.true(is.order(TestObject))
})

test('should not recognize real-world response with mutated (numeric) ordType', t => {
    t.false(is.order(Object.assign({...TestObject}, {ordType: 12345})))
})
