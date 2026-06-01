"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__trimDecimalPlaces = exports.__min = exports.__max = exports.__div = exports.__mul = exports.__sub = exports.__add = exports.__toCommaSeparated = exports.__isLessThanEquals = exports.__isLessThan = exports.__isGreaterThanEquals = exports.__isGreaterThan = exports.__isEqual = exports.__isNegative = exports.__isZero = exports.__toPercent = exports.__toInteger = exports.__toBigInt = exports.__toSmall = exports.__toBig = exports.__toCompactNumber = exports.formatting = void 0;
const DIVISION_PRECISION = 36;
const POW10_CACHE = new Map([[0, 1n]]);
const pow10 = (n) => {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Decimal places must be a non-negative integer");
    }
    const cached = POW10_CACHE.get(n);
    if (cached !== undefined) {
        return cached;
    }
    const value = 10n ** BigInt(n);
    POW10_CACHE.set(n, value);
    return value;
};
const normalizePlainDecimal = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) {
        throw new Error("Invalid number: empty input");
    }
    const match = trimmed.match(/^([+-]?)(\d+)(?:\.(\d+))?$/);
    if (!match) {
        throw new Error(`Invalid number: ${raw}`);
    }
    const sign = match[1] === "-" ? "-" : "";
    const integerRaw = match[2];
    const fractionRaw = match[3] ?? "";
    const integer = integerRaw.replace(/^0+/, "") || "0";
    const fraction = fractionRaw.replace(/0+$/, "");
    if (integer === "0" && fraction === "") {
        return "0";
    }
    return `${sign}${integer}${fraction ? `.${fraction}` : ""}`;
};
const scientificToDecimal = (raw) => {
    const trimmed = raw.trim();
    const match = trimmed.match(/^([+-]?)(\d+)(?:\.(\d+))?[eE]([+-]?\d+)$/);
    if (!match) {
        throw new Error(`Invalid number: ${raw}`);
    }
    const sign = match[1] === "-" ? "-" : "";
    const intPart = match[2];
    const fracPart = match[3] ?? "";
    const exponent = Number(match[4]);
    if (!Number.isInteger(exponent)) {
        throw new Error(`Invalid number: ${raw}`);
    }
    const digits = `${intPart}${fracPart}`;
    const decimalIndex = intPart.length + exponent;
    let result;
    if (decimalIndex <= 0) {
        result = `0.${"0".repeat(Math.abs(decimalIndex))}${digits}`;
    }
    else if (decimalIndex >= digits.length) {
        result = `${digits}${"0".repeat(decimalIndex - digits.length)}`;
    }
    else {
        result = `${digits.slice(0, decimalIndex)}.${digits.slice(decimalIndex)}`;
    }
    return normalizePlainDecimal(`${sign}${result}`);
};
const normalizeNumericInput = (value) => {
    if (typeof value === "bigint") {
        return value.toString();
    }
    if (typeof value === "number") {
        if (!Number.isFinite(value)) {
            throw new Error(`Invalid number: ${value}`);
        }
        return normalizeNumericInput(value.toString());
    }
    const cleaned = value.replace(/,/g, "").trim();
    if (!cleaned) {
        throw new Error("Invalid number: empty input");
    }
    if (cleaned.includes("e") || cleaned.includes("E")) {
        return scientificToDecimal(cleaned);
    }
    return normalizePlainDecimal(cleaned);
};
const parseDecimal = (value) => {
    const normalized = normalizeNumericInput(value);
    const sign = normalized.startsWith("-") ? -1 : 1;
    const unsigned = sign === -1 ? normalized.slice(1) : normalized;
    const [integerPart, fractionPart = ""] = unsigned.split(".");
    const digits = `${integerPart}${fractionPart}`.replace(/^0+/, "") || "0";
    return {
        sign,
        int: BigInt(digits),
        scale: fractionPart.length
    };
};
const formatDecimal = (sign, int, scale) => {
    if (int === 0n) {
        return "0";
    }
    const digits = int.toString();
    const signedPrefix = sign === -1 ? "-" : "";
    if (scale === 0) {
        return `${signedPrefix}${digits}`;
    }
    if (digits.length <= scale) {
        const fraction = `${"0".repeat(scale - digits.length)}${digits}`.replace(/0+$/, "");
        if (!fraction) {
            return "0";
        }
        return `${signedPrefix}0.${fraction}`;
    }
    const integer = digits.slice(0, digits.length - scale);
    const fraction = digits.slice(digits.length - scale).replace(/0+$/, "");
    if (!fraction) {
        return `${signedPrefix}${integer}`;
    }
    return `${signedPrefix}${integer}.${fraction}`;
};
const alignScales = (a, b) => {
    const scale = Math.max(a.scale, b.scale);
    const left = a.int * pow10(scale - a.scale);
    const right = b.int * pow10(scale - b.scale);
    return { left, right, scale };
};
const shiftDecimal = (value, places) => {
    if (!Number.isInteger(places) || places < 0) {
        throw new Error("Decimal places must be a non-negative integer");
    }
    const decimal = parseDecimal(value);
    const nextScale = decimal.scale - places;
    if (nextScale >= 0) {
        return formatDecimal(decimal.sign, decimal.int, nextScale);
    }
    return formatDecimal(decimal.sign, decimal.int * pow10(-nextScale), 0);
};
/** Normalizes input into canonical plain-decimal string form. */
const formatting = (number) => normalizeNumericInput(number);
exports.formatting = formatting;
/** Formats value as compact notation (e.g. 1.2K, 3.4M). */
const __toCompactNumber = (number) => {
    const normalized = normalizeNumericInput(number);
    const asNumber = Number(normalized);
    if (!Number.isFinite(asNumber)) {
        throw new Error("Number is out of supported range for compact formatting");
    }
    const units = ["", "K", "M", "B", "T"];
    let num = Math.abs(asNumber);
    let unitIndex = 0;
    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }
    const signed = asNumber < 0 ? "-" : "";
    return `${signed}${num.toFixed(1).replace(/\.0$/, "")}${units[unitIndex]}`;
};
exports.__toCompactNumber = __toCompactNumber;
/** Shifts decimal point right by `decimals` places. */
const __toBig = (num, decimals = 18) => shiftDecimal(num, decimals);
exports.__toBig = __toBig;
/** Shifts decimal point left by `decimals` places. */
const __toSmall = (num, decimals = 18) => {
    if (!Number.isInteger(decimals) || decimals < 0) {
        throw new Error("Decimal places must be a non-negative integer");
    }
    const decimal = parseDecimal(num);
    return formatDecimal(decimal.sign, decimal.int, decimal.scale + decimals);
};
exports.__toSmall = __toSmall;
/** Converts integer-like decimal string to bigint; throws for fractional values. */
const __toBigInt = (num) => {
    const decimal = parseDecimal(num);
    if (decimal.scale !== 0) {
        throw new Error("Cannot convert decimal value to bigint without explicit rounding");
    }
    return decimal.sign === -1 ? -decimal.int : decimal.int;
};
exports.__toBigInt = __toBigInt;
/** Converts value to Number when it is within JS safe-integer range. */
const __toInteger = (num) => {
    const normalized = normalizeNumericInput(num);
    const result = Number(normalized);
    if (!Number.isSafeInteger(result)) {
        throw new Error("Value exceeds Number safe integer range");
    }
    return result;
};
exports.__toInteger = __toInteger;
/** Converts numeric value to percent string by multiplying by 100. */
const __toPercent = (num) => (0, exports.__mul)(num, 100).concat("%");
exports.__toPercent = __toPercent;
/** Returns true when numeric value is exactly zero. */
const __isZero = (num) => parseDecimal(num).int === 0n;
exports.__isZero = __isZero;
/** Returns true when numeric value is negative and not zero. */
const __isNegative = (num) => {
    const decimal = parseDecimal(num);
    return decimal.sign === -1 && decimal.int !== 0n;
};
exports.__isNegative = __isNegative;
/** Returns true when both numeric values are equal. */
const __isEqual = (num, num2) => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    const aligned = alignScales(left, right);
    return (left.sign === -1 ? -aligned.left : aligned.left) === (right.sign === -1 ? -aligned.right : aligned.right);
};
exports.__isEqual = __isEqual;
/** Returns true when `num` is greater than `num2`. */
const __isGreaterThan = (num, num2) => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    const aligned = alignScales(left, right);
    const leftSigned = left.sign === -1 ? -aligned.left : aligned.left;
    const rightSigned = right.sign === -1 ? -aligned.right : aligned.right;
    return leftSigned > rightSigned;
};
exports.__isGreaterThan = __isGreaterThan;
/** Returns true when `num` is greater than or equal to `num2`. */
const __isGreaterThanEquals = (num, num2) => (0, exports.__isGreaterThan)(num, num2) || (0, exports.__isEqual)(num, num2);
exports.__isGreaterThanEquals = __isGreaterThanEquals;
/** Returns true when `num` is less than `num2`. */
const __isLessThan = (num, num2) => !(0, exports.__isGreaterThanEquals)(num, num2);
exports.__isLessThan = __isLessThan;
/** Returns true when `num` is less than or equal to `num2`. */
const __isLessThanEquals = (num, num2) => !(0, exports.__isGreaterThan)(num, num2);
exports.__isLessThanEquals = __isLessThanEquals;
/** Formats numeric value with thousands separators. */
const __toCommaSeparated = (num) => {
    const normalized = normalizeNumericInput(num);
    const sign = normalized.startsWith("-") ? "-" : "";
    const unsigned = sign ? normalized.slice(1) : normalized;
    const [integer, fraction] = unsigned.split(".");
    const withCommas = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${sign}${withCommas}${fraction ? `.${fraction}` : ""}`;
};
exports.__toCommaSeparated = __toCommaSeparated;
/** Adds two numeric values and returns a normalized decimal string. */
const __add = (num, num2) => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    const aligned = alignScales(left, right);
    const leftSigned = left.sign === -1 ? -aligned.left : aligned.left;
    const rightSigned = right.sign === -1 ? -aligned.right : aligned.right;
    const result = leftSigned + rightSigned;
    const sign = result < 0n ? -1 : 1;
    return formatDecimal(sign, result < 0n ? -result : result, aligned.scale);
};
exports.__add = __add;
/** Subtracts `num2` from `num` and returns a normalized decimal string. */
const __sub = (num, num2) => (0, exports.__add)(num, parseDecimal(num2).sign === -1 ? normalizeNumericInput(num2).slice(1) : `-${normalizeNumericInput(num2)}`);
exports.__sub = __sub;
/** Multiplies two numeric values and returns a normalized decimal string. */
const __mul = (num, num2) => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    const sign = left.sign === right.sign ? 1 : -1;
    return formatDecimal(sign, left.int * right.int, left.scale + right.scale);
};
exports.__mul = __mul;
/** Divides `num` by `num2` and returns a normalized decimal string. Throws on division by zero. */
const __div = (num, num2) => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    if (right.int === 0n) {
        throw new Error("Division by zero");
    }
    const sign = left.sign === right.sign ? 1 : -1;
    let numerator = left.int;
    let denominator = right.int;
    const scaleDelta = right.scale - left.scale;
    if (scaleDelta > 0) {
        numerator *= pow10(scaleDelta);
    }
    else if (scaleDelta < 0) {
        denominator *= pow10(-scaleDelta);
    }
    const scaledNumerator = numerator * pow10(DIVISION_PRECISION);
    const quotient = scaledNumerator / denominator;
    return formatDecimal(sign, quotient, DIVISION_PRECISION);
};
exports.__div = __div;
/** Returns the larger of two numeric values as a normalized decimal string. */
const __max = (num, num2) => (0, exports.__isGreaterThan)(num, num2) ? (0, exports.formatting)(num) : (0, exports.formatting)(num2);
exports.__max = __max;
/** Returns the smaller of two numeric values as a normalized decimal string. */
const __min = (num, num2) => (0, exports.__isLessThan)(num, num2) ? (0, exports.formatting)(num) : (0, exports.formatting)(num2);
exports.__min = __min;
/** Rounds to `decimalPlaces` using half-up rounding and returns normalized decimal string. */
const __trimDecimalPlaces = (num, decimalPlaces) => {
    const places = Number(decimalPlaces);
    if (!Number.isInteger(places) || places < 0) {
        throw new Error("Decimal places must be a non-negative integer");
    }
    const value = parseDecimal(num);
    if (places >= value.scale) {
        return formatDecimal(value.sign, value.int * pow10(places - value.scale), places);
    }
    const drop = value.scale - places;
    const divisor = pow10(drop);
    const quotient = value.int / divisor;
    const remainder = value.int % divisor;
    const half = divisor / 2n;
    const rounded = remainder >= half ? quotient + 1n : quotient;
    return formatDecimal(value.sign, rounded, places);
};
exports.__trimDecimalPlaces = __trimDecimalPlaces;
//# sourceMappingURL=helper.js.map