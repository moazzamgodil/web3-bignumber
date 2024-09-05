import "./prototype.js";
import { __add, __div, __isEqual, __isGreaterThan, __isGreaterThanEquals, __isLessThan, __isLessThanEquals, __isNegative, __isZero, __max, __min, __mul, __sub, __toBig, __toBigInt, __toCommaSeparated, __toCompactNumber, __toInteger, __toPercent, __toSmall, formatting } from "./helper.js";
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
    const equals = (num2) => {
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
    const subtract = (num2) => {
        return __sub(num, num2);
    };
    const multiply = (num2) => {
        return __mul(num, num2);
    };
    const divide = (num2) => {
        return __div(num, num2);
    };
    const max = (num2) => {
        return __max(num, num2);
    };
    const min = (num2) => {
        return __min(num, num2);
    };
    const value = () => {
        return num;
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
        value
    };
};
global.Web3BigNumber = Web3BigNumber;
//# sourceMappingURL=web3numbers.js.map