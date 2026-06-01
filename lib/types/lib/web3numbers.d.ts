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
declare const Web3BigNumber: (number: bigint | string | number) => Web3BigNumberInstance;
declare global {
    interface IWeb3BigNumber extends Web3BigNumberInstance {
    }
    interface Window {
        Web3BigNumber(number: bigint | string | number): Web3BigNumberInstance;
    }
}
export { Web3BigNumber };
//# sourceMappingURL=web3numbers.d.ts.map