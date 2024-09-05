import "./prototype";
import { __add, __div, __isEqual, __isGreaterThan, __isGreaterThanEquals, __isLessThan, __isLessThanEquals, __isNegative, __isZero, __max, __min, __mul, __sub, __toBig, __toBigInt, __toCommaSeparated, __toCompactNumber, __toInteger, __toPercent, __toSmall, formatting } from "./helper";

export const Web3BigNumber = (number: bigint | string | number) => {

    const num = formatting(number);

    const toBig = (decimals: number = 18) => {
        return __toBig(num, decimals);
    }

    const toSmall = (decimals: number = 18) => {
        return __toSmall(num, decimals);
    }

    const toBigInt = () => {
        return __toBigInt(num);
    }

    const toCommaSeparated = () => {
        return __toCommaSeparated(num);
    }

    const toCompactNumber = () => {
        return __toCompactNumber(num);
    }

    const toPercent = () => {
        return __toPercent(num);
    }

    const toInteger = () => {
        return __toInteger(num);
    }

    const isZero = () => {
        return __isZero(num);
    }

    const isNegative = () => {
        return __isNegative(num);
    }

    const equals = (num2: number | string | bigint) => {
        return __isEqual(num, num2);
    }

    const gt = (num2: number | string | bigint) => {
        return __isGreaterThan(num, num2);
    }

    const gte = (num2: number | string | bigint) => {
        return __isGreaterThanEquals(num, num2);
    }

    const lt = (num2: number | string | bigint) => {
        return __isLessThan(num, num2);
    }

    const lte = (num2: number | string | bigint) => {
        return __isLessThanEquals(num, num2);
    }

    const add = (num2: number | string | bigint) => {
        return __add(num, num2);
    }

    const subtract = (num2: number | string | bigint) => {
        return __sub(num, num2);
    }

    const multiply = (num2: number | string | bigint) => {
        return __mul(num, num2);
    }

    const divide = (num2: number | string | bigint) => {
        return __div(num, num2);
    }

    const max = (num2: number | string | bigint) => {
        return __max(num, num2);
    }

    const min = (num2: number | string | bigint) => {
        return __min(num, num2);
    }

    const value = () => {
        return num;
    }

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
    }
}

declare global {
    interface IWeb3BigNumber {
        toBig(decimals?: number): string;
        toSmall(decimals?: number): string
        toBigInt(): bigint
        toCommaSeparated(): string
        toCompactNumber(): string
        toPercent(): string
        toInteger(): number
        isZero(): boolean
        isNegative(): boolean
        equals(num2: number | string | bigint): boolean
        gt(num2: number | string | bigint): boolean
        gte(num2: number | string | bigint): boolean
        lt(num2: number | string | bigint): boolean
        lte(num2: number | string | bigint): boolean
        add(num2: number | string | bigint): string
        subtract(num2: number | string | bigint): string
        multiply(num2: number | string | bigint): string
        divide(num2: number | string | bigint): string
        max(num2: number | string | bigint): string
        min(num2: number | string | bigint): string
        value(): string
    }

    function Web3BigNumber(number: bigint | string | number): IWeb3BigNumber
}

global.Web3BigNumber = Web3BigNumber;