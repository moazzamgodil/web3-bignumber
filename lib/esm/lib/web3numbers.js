import { __add, __div, __isEqual, __isGreaterThan, __isGreaterThanEquals, __isLessThan, __isLessThanEquals, __isNegative, __isZero, __max, __min, __mul, __sub, __toBig, __toBigInt, __toCommaSeparated, __toCompactNumber, __toInteger, __toPercent, __toSmall, formatting } from "./helper.js";
String.prototype.toBigInt = function () {
    return __toBigInt(this.toString());
};
String.prototype.toCommaSeparated = function () {
    return __toCommaSeparated(this.toString());
};
String.prototype.toCompactNumber = function () {
    return __toCompactNumber(this.toString());
};
String.prototype.toPercent = function () {
    return __toPercent(this.toString());
};
String.prototype.toInteger = function () {
    return __toInteger(this.toString());
};
String.prototype.isZero = function () {
    return __isZero(this.toString());
};
String.prototype.isNegative = function () {
    return __isNegative(this.toString());
};
export const Web3BigNumber = (number) => {
    const num = formatting(number);
    const toBig = (decimals = 18) => {
        return __toBig(num, decimals);
    };
    const toSmall = (decimals = 18) => {
        return __toSmall(num, decimals);
    };
    const toBigInt = () => {
        return __toBigInt(num);
    };
    const toCommaSeparated = () => {
        return __toCommaSeparated(num);
    };
    const toCompactNumber = () => {
        return __toCompactNumber(num);
    };
    const toPercent = () => {
        return __toPercent(num);
    };
    const toInteger = () => {
        return __toInteger(num);
    };
    const isZero = () => {
        return __isZero(num);
    };
    const isNegative = () => {
        return __isNegative(num);
    };
    const eq = (num2) => {
        return __isEqual(num, num2);
    };
    const gt = (num2) => {
        return __isGreaterThan(num, num2);
    };
    const gte = (num2) => {
        return __isGreaterThanEquals(num, num2);
    };
    const lt = (num2) => {
        return __isLessThan(num, num2);
    };
    const lte = (num2) => {
        return __isLessThanEquals(num, num2);
    };
    const add = (num2) => {
        return __add(num, num2);
    };
    const sub = (num2) => {
        return __sub(num, num2);
    };
    const mul = (num2) => {
        return __mul(num, num2);
    };
    const div = (num2) => {
        return __div(num, num2);
    };
    const max = (num2) => {
        return __max(num, num2);
    };
    const min = (num2) => {
        return __min(num, num2);
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
        eq,
        gt,
        gte,
        lt,
        lte,
        add,
        sub,
        mul,
        div,
        max,
        min
    };
};
//# sourceMappingURL=web3numbers.js.map