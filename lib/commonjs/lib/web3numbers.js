"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3BigNumber = void 0;
require("./prototype.js");
const helper_1 = require("./helper.js");
const Web3BigNumber = (number) => {
    const num = (0, helper_1.formatting)(number);
    const toBig = (decimals = 18) => {
        return (0, helper_1.__toBig)(num, decimals);
    };
    const toSmall = (decimals = 18) => {
        return (0, helper_1.__toSmall)(num, decimals);
    };
    const toBigInt = () => {
        return (0, helper_1.__toBigInt)(num);
    };
    const toCommaSeparated = () => {
        return (0, helper_1.__toCommaSeparated)(num);
    };
    const toCompactNumber = () => {
        return (0, helper_1.__toCompactNumber)(num);
    };
    const toPercent = () => {
        return (0, helper_1.__toPercent)(num);
    };
    const toInteger = () => {
        return (0, helper_1.__toInteger)(num);
    };
    const isZero = () => {
        return (0, helper_1.__isZero)(num);
    };
    const isNegative = () => {
        return (0, helper_1.__isNegative)(num);
    };
    const equals = (num2) => {
        return (0, helper_1.__isEqual)(num, num2);
    };
    const gt = (num2) => {
        return (0, helper_1.__isGreaterThan)(num, num2);
    };
    const gte = (num2) => {
        return (0, helper_1.__isGreaterThanEquals)(num, num2);
    };
    const lt = (num2) => {
        return (0, helper_1.__isLessThan)(num, num2);
    };
    const lte = (num2) => {
        return (0, helper_1.__isLessThanEquals)(num, num2);
    };
    const add = (num2) => {
        return (0, helper_1.__add)(num, num2);
    };
    const subtract = (num2) => {
        return (0, helper_1.__sub)(num, num2);
    };
    const multiply = (num2) => {
        return (0, helper_1.__mul)(num, num2);
    };
    const divide = (num2) => {
        return (0, helper_1.__div)(num, num2);
    };
    const max = (num2) => {
        return (0, helper_1.__max)(num, num2);
    };
    const min = (num2) => {
        return (0, helper_1.__min)(num, num2);
    };
    const value = () => {
        return num;
    };
    const trimDecimalPlaces = (decimalPlaces) => {
        return (0, helper_1.__trimDecimalPlaces)(num, decimalPlaces);
    };
    return {
        toBig,
        toSmall,
        toBigInt,
        toCommaSeparated,
        toCompactNumber,
        toPercent,
        toInteger,
        isZero,
        isNegative,
        equals,
        gt,
        gte,
        lt,
        lte,
        add,
        subtract,
        multiply,
        divide,
        max,
        min,
        value,
        trimDecimalPlaces
    };
};
exports.Web3BigNumber = Web3BigNumber;
if (typeof window !== "undefined") {
    window.Web3BigNumber = Web3BigNumber;
}
//# sourceMappingURL=web3numbers.js.map