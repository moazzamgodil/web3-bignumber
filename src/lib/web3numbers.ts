import { __add, __div, __isEqual, __isGreaterThan, __isGreaterThanEquals, __isLessThan, __isLessThanEquals, __isNegative, __isZero, __max, __min, __mul, __sub, __toBig, __toBigInt, __toCommaSeparated, __toCompactNumber, __toInteger, __toPercent, __toSmall, __trimDecimalPlaces, formatting } from "./helper";

export interface Web3BigNumberInstance {
    /** Shifts decimal point to the right by `decimals` places (human value -> smallest unit). */
    toBig(decimals?: number): string;
    /** Shifts decimal point to the left by `decimals` places (smallest unit -> human value). */
    toSmall(decimals?: number): string;
    /** Converts to bigint. Throws if the value has fractional digits. */
    toBigInt(): bigint;
    /** Returns value formatted with thousands separators. */
    toCommaSeparated(): string;
    /** Returns compact notation like 1.2K / 3.4M. */
    toCompactNumber(): string;
    /** Multiplies by 100 and appends `%`. */
    toPercent(): string;
    /** Converts to Number when value is a safe integer; throws otherwise. */
    toInteger(): number;
    /** Returns true when numeric value is exactly zero. */
    isZero(): boolean;
    /** Returns true when numeric value is negative. */
    isNegative(): boolean;
    /** Returns true when values are numerically equal. */
    equals(num2: number | string | bigint): boolean;
    /** Returns true when current value is greater than `num2`. */
    gt(num2: number | string | bigint): boolean;
    /** Returns true when current value is greater than or equal to `num2`. */
    gte(num2: number | string | bigint): boolean;
    /** Returns true when current value is less than `num2`. */
    lt(num2: number | string | bigint): boolean;
    /** Returns true when current value is less than or equal to `num2`. */
    lte(num2: number | string | bigint): boolean;
    /** Adds `num2` and returns the result as a string. */
    add(num2: number | string | bigint): string;
    /** Subtracts `num2` and returns the result as a string. */
    subtract(num2: number | string | bigint): string;
    /** Multiplies by `num2` and returns the result as a string. */
    multiply(num2: number | string | bigint): string;
    /** Divides by `num2` and returns the result as a string. Throws on division by zero. */
    divide(num2: number | string | bigint): string;
    /** Returns the greater of current value and `num2`. */
    max(num2: number | string | bigint): string;
    /** Returns the smaller of current value and `num2`. */
    min(num2: number | string | bigint): string;
    /** Returns normalized internal numeric string value. */
    value(): string;
    /** Rounds to `decimalPlaces` fractional digits using half-up rounding. */
    trimDecimalPlaces(decimalPlaces: number | string | bigint): string;
}

/**
 * Creates a safe numeric wrapper around a value.
 * All operations are performed with bigint/string decimal math to avoid floating-point precision loss.
 */
const Web3BigNumber = (number: bigint | string | number): Web3BigNumberInstance => {

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

    const trimDecimalPlaces = (decimalPlaces: number | string | bigint) => {
        return __trimDecimalPlaces(num, decimalPlaces);
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
        value,
        trimDecimalPlaces
    }
}

declare global {
    interface IWeb3BigNumber extends Web3BigNumberInstance {}

    interface Window {
        Web3BigNumber(number: bigint | string | number): Web3BigNumberInstance;
    }
}

if (typeof window !== "undefined") {
    window.Web3BigNumber = Web3BigNumber;
}

export { Web3BigNumber }
