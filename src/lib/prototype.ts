import { __add, __div, __isEqual, __isGreaterThan, __isGreaterThanEquals, __isLessThan, __isLessThanEquals, __isNegative, __isZero, __max, __min, __mul, __sub, __toBigInt, __toCommaSeparated, __toCompactNumber, __toInteger, __toPercent, __trimDecimalPlaces } from "./helper";

export {};

declare global {
    interface String {
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
        /** Rounds to `decimalPlaces` fractional digits using half-up rounding. */
        trimDecimalPlaces(decimalPlaces: number | string | bigint): string;
    }
    interface Number {
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
        /** Rounds to `decimalPlaces` fractional digits using half-up rounding. */
        trimDecimalPlaces(decimalPlaces: number | string | bigint): string;
    }
    interface BigInt {
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
        /** Rounds to `decimalPlaces` fractional digits using half-up rounding. */
        trimDecimalPlaces(decimalPlaces: number | string | bigint): string;
    }
}

// STRING
String.prototype.toBigInt = function (): bigint {
    return __toBigInt(this.toString());
};

String.prototype.toCommaSeparated = function (): string {
    return __toCommaSeparated(this.toString());
};

String.prototype.toCompactNumber = function (): string {
    return __toCompactNumber(this.toString());
};

String.prototype.toPercent = function (): string {
    return __toPercent(this.toString());
};

String.prototype.toInteger = function (): number {
    return __toInteger(this.toString());
};

String.prototype.isZero = function (): boolean {
    return __isZero(this.toString());
};

String.prototype.isNegative = function (): boolean {
    return __isNegative(this.toString());
};

String.prototype.equals = function (num2: number | string | bigint): boolean {
    return __isEqual(this.toString(), num2);
};

String.prototype.gt = function (num2: number | string | bigint): boolean {
    return __isGreaterThan(this.toString(), num2);
};

String.prototype.gte = function (num2: number | string | bigint): boolean {
    return __isGreaterThanEquals(this.toString(), num2);
};

String.prototype.lt = function (num2: number | string | bigint): boolean {
    return __isLessThan(this.toString(), num2);
};

String.prototype.lte = function (num2: number | string | bigint): boolean {
    return __isLessThanEquals(this.toString(), num2);
};

String.prototype.add = function (num2: number | string | bigint): string {
    return __add(this.toString(), num2);
};

String.prototype.subtract = function (num2: number | string | bigint): string {
    return __sub(this.toString(), num2);
};

String.prototype.multiply = function (num2: number | string | bigint): string {
    return __mul(this.toString(), num2);
};

String.prototype.divide = function (num2: number | string | bigint): string {
    return __div(this.toString(), num2);
};

String.prototype.max = function (num2: number | string | bigint): string {
    return __max(this.toString(), num2);
};

String.prototype.min = function (num2: number | string | bigint): string {
    return __min(this.toString(), num2);
};

String.prototype.trimDecimalPlaces = function (decimalPlaces: number | string | bigint): string {
    return __trimDecimalPlaces(this.toString(), decimalPlaces);
};

// NUMBER
Number.prototype.toBigInt = function (): bigint {
    return __toBigInt(this.toString());
};

Number.prototype.toCommaSeparated = function (): string {
    return __toCommaSeparated(this.toString());
};

Number.prototype.toCompactNumber = function (): string {
    return __toCompactNumber(this.toString());
};

Number.prototype.toPercent = function (): string {
    return __toPercent(this.toString());
};

Number.prototype.toInteger = function (): number {
    return __toInteger(this.toString());
};

Number.prototype.isZero = function (): boolean {
    return __isZero(this.toString());
};

Number.prototype.isNegative = function (): boolean {
    return __isNegative(this.toString());
};

Number.prototype.equals = function (num2: number | string | bigint): boolean {
    return __isEqual(this.toString(), num2);
};

Number.prototype.gt = function (num2: number | string | bigint): boolean {
    return __isGreaterThan(this.toString(), num2);
};

Number.prototype.gte = function (num2: number | string | bigint): boolean {
    return __isGreaterThanEquals(this.toString(), num2);
};

Number.prototype.lt = function (num2: number | string | bigint): boolean {
    return __isLessThan(this.toString(), num2);
};

Number.prototype.lte = function (num2: number | string | bigint): boolean {
    return __isLessThanEquals(this.toString(), num2);
};

Number.prototype.add = function (num2: number | string | bigint): string {
    return __add(this.toString(), num2);
};

Number.prototype.subtract = function (num2: number | string | bigint): string {
    return __sub(this.toString(), num2);
};

Number.prototype.multiply = function (num2: number | string | bigint): string {
    return __mul(this.toString(), num2);
};

Number.prototype.divide = function (num2: number | string | bigint): string {
    return __div(this.toString(), num2);
};

Number.prototype.max = function (num2: number | string | bigint): string {
    return __max(this.toString(), num2);
};

Number.prototype.min = function (num2: number | string | bigint): string {
    return __min(this.toString(), num2);
};

Number.prototype.trimDecimalPlaces = function (decimalPlaces: number | string | bigint): string {
    return __trimDecimalPlaces(this.toString(), decimalPlaces);
};

// BIG INTEGER
BigInt.prototype.toBigInt = function (): bigint {
    return __toBigInt(this.toString());
};

BigInt.prototype.toCommaSeparated = function (): string {
    return __toCommaSeparated(this.toString());
};

BigInt.prototype.toCompactNumber = function (): string {
    return __toCompactNumber(this.toString());
};

BigInt.prototype.toPercent = function (): string {
    return __toPercent(this.toString());
};

BigInt.prototype.toInteger = function (): number {
    return __toInteger(this.toString());
};

BigInt.prototype.isZero = function (): boolean {
    return __isZero(this.toString());
};

BigInt.prototype.isNegative = function (): boolean {
    return __isNegative(this.toString());
};

BigInt.prototype.equals = function (num2: number | string | bigint): boolean {
    return __isEqual(this.toString(), num2);
};

BigInt.prototype.gt = function (num2: number | string | bigint): boolean {
    return __isGreaterThan(this.toString(), num2);
};

BigInt.prototype.gte = function (num2: number | string | bigint): boolean {
    return __isGreaterThanEquals(this.toString(), num2);
};

BigInt.prototype.lt = function (num2: number | string | bigint): boolean {
    return __isLessThan(this.toString(), num2);
};

BigInt.prototype.lte = function (num2: number | string | bigint): boolean {
    return __isLessThanEquals(this.toString(), num2);
};

BigInt.prototype.add = function (num2: number | string | bigint): string {
    return __add(this.toString(), num2);
};

BigInt.prototype.subtract = function (num2: number | string | bigint): string {
    return __sub(this.toString(), num2);
};

BigInt.prototype.multiply = function (num2: number | string | bigint): string {
    return __mul(this.toString(), num2);
};

BigInt.prototype.divide = function (num2: number | string | bigint): string {
    return __div(this.toString(), num2);
};

BigInt.prototype.max = function (num2: number | string | bigint): string {
    return __max(this.toString(), num2);
};

BigInt.prototype.min = function (num2: number | string | bigint): string {
    return __min(this.toString(), num2);
};

BigInt.prototype.trimDecimalPlaces = function (decimalPlaces: number | string | bigint): string {
    return __trimDecimalPlaces(this.toString(), decimalPlaces);
};
