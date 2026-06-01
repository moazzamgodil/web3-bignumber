/** Normalizes input into canonical plain-decimal string form. */
export declare const formatting: (number: bigint | string | number) => string;
/** Formats value as compact notation (e.g. 1.2K, 3.4M). */
export declare const __toCompactNumber: (number: string | number | bigint) => string;
/** Shifts decimal point right by `decimals` places. */
export declare const __toBig: (num: string, decimals?: number) => string;
/** Shifts decimal point left by `decimals` places. */
export declare const __toSmall: (num: string, decimals?: number) => string;
/** Converts integer-like decimal string to bigint; throws for fractional values. */
export declare const __toBigInt: (num: string) => bigint;
/** Converts value to Number when it is within JS safe-integer range. */
export declare const __toInteger: (num: string) => number;
/** Converts numeric value to percent string by multiplying by 100. */
export declare const __toPercent: (num: string) => string;
/** Returns true when numeric value is exactly zero. */
export declare const __isZero: (num: string) => boolean;
/** Returns true when numeric value is negative and not zero. */
export declare const __isNegative: (num: string) => boolean;
/** Returns true when both numeric values are equal. */
export declare const __isEqual: (num: string, num2: number | string | bigint) => boolean;
/** Returns true when `num` is greater than `num2`. */
export declare const __isGreaterThan: (num: string, num2: number | string | bigint) => boolean;
/** Returns true when `num` is greater than or equal to `num2`. */
export declare const __isGreaterThanEquals: (num: string, num2: number | string | bigint) => boolean;
/** Returns true when `num` is less than `num2`. */
export declare const __isLessThan: (num: string, num2: number | string | bigint) => boolean;
/** Returns true when `num` is less than or equal to `num2`. */
export declare const __isLessThanEquals: (num: string, num2: number | string | bigint) => boolean;
/** Formats numeric value with thousands separators. */
export declare const __toCommaSeparated: (num: string) => string;
/** Adds two numeric values and returns a normalized decimal string. */
export declare const __add: (num: string, num2: number | string | bigint) => string;
/** Subtracts `num2` from `num` and returns a normalized decimal string. */
export declare const __sub: (num: string, num2: number | string | bigint) => string;
/** Multiplies two numeric values and returns a normalized decimal string. */
export declare const __mul: (num: string, num2: number | string | bigint) => string;
/** Divides `num` by `num2` and returns a normalized decimal string. Throws on division by zero. */
export declare const __div: (num: string, num2: number | string | bigint) => string;
/** Returns the larger of two numeric values as a normalized decimal string. */
export declare const __max: (num: string, num2: number | string | bigint) => string;
/** Returns the smaller of two numeric values as a normalized decimal string. */
export declare const __min: (num: string, num2: number | string | bigint) => string;
/** Rounds to `decimalPlaces` using half-up rounding and returns normalized decimal string. */
export declare const __trimDecimalPlaces: (num: string, decimalPlaces: number | string | bigint) => string;
