/**
 * bitmex-type-guards
 * Type-guards for Bitmex API objects
 */

import is from '@sindresorhus/is'
import { BITMEX } from 'bitmex-node'

/**
 * Type-guard for BitMEX Order interface.
 *
 * @param value Potential BitMEX Order object
 */
export function order(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
): value is BITMEX.Order {
    return !is.nullOrUndefined(value)
        && is.string(value.orderID)
        && (is.nullOrUndefined(value.clOrdID) || is.string(value.clOrdID))
        && (is.nullOrUndefined(value.clOrdLinkID) || is.string(value.clOrdLinkID))
        && (is.nullOrUndefined(value.account) || is.number(value.account))
        && (is.nullOrUndefined(value.symbol) || is.string(value.symbol))
        && (is.nullOrUndefined(value.side) || is.string(value.side))
        && (is.nullOrUndefined(value.simpleOrderQty) || is.number(value.simpleOrderQty))
        && (is.nullOrUndefined(value.orderQty) || is.number(value.orderQty))
        && (is.nullOrUndefined(value.price) || is.number(value.price))
        && (is.nullOrUndefined(value.displayQty) || is.number(value.displayQty))
        && (is.nullOrUndefined(value.stopPx) || is.number(value.stopPx))
        && (is.nullOrUndefined(value.pegOffsetValue) || is.number(value.pegOffsetValue))
        && (is.nullOrUndefined(value.pegPriceType) || is.string(value.pegPriceType))
        && (is.nullOrUndefined(value.currency) || is.string(value.currency))
        && (is.nullOrUndefined(value.settlCurrency) || is.string(value.settlCurrency))
        && (is.nullOrUndefined(value.ordType) || is.string(value.ordType))
        && (is.nullOrUndefined(value.timeInForce) || is.string(value.timeInForce))
        && (is.nullOrUndefined(value.execInst) || is.string(value.execInst))
        && (is.nullOrUndefined(value.contingencyType) || is.string(value.contingencyType))
        && (is.nullOrUndefined(value.exDestination) || is.string(value.exDestination))
        && (is.nullOrUndefined(value.ordStatus) || is.string(value.ordStatus))
        && (is.nullOrUndefined(value.triggered) || is.string(value.triggered))
        && (is.nullOrUndefined(value.workingIndicator) || is.boolean(value.workingIndicator))
        && (is.nullOrUndefined(value.ordRejReason) || is.string(value.ordRejReason))
        && (is.nullOrUndefined(value.simpleLeavesQty) || is.number(value.simpleLeavesQty))
        && (is.nullOrUndefined(value.leavesQty) || is.number(value.leavesQty))
        && (is.nullOrUndefined(value.simpleCumQty) || is.number(value.simpleCumQty))
        && (is.nullOrUndefined(value.cumQty) || is.number(value.cumQty))
        && (is.nullOrUndefined(value.avgPx) || is.number(value.avgPx))
        && (is.nullOrUndefined(value.multiLegReportingType) || is.string(value.multiLegReportingType))
        && (is.nullOrUndefined(value.text) || is.string(value.text))
        && (is.nullOrUndefined(value.transactTime) || is.string(value.transactTime))
        && (is.nullOrUndefined(value.timestamp) || is.string(value.timestamp))
}

const typeGuards = {
    order
}

export default typeGuards
