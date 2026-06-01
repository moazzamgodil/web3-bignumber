type Decimal = {
    sign: 1 | -1;
    int: bigint;
    scale: number;
};

const DIVISION_PRECISION = 36;

const POW10_CACHE = new Map<number, bigint>([[0, 1n]]);

const pow10 = (n: number): bigint => {
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

const normalizePlainDecimal = (raw: string): string => {
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

const scientificToDecimal = (raw: string): string => {
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

    let result: string;
    if (decimalIndex <= 0) {
        result = `0.${"0".repeat(Math.abs(decimalIndex))}${digits}`;
    } else if (decimalIndex >= digits.length) {
        result = `${digits}${"0".repeat(decimalIndex - digits.length)}`;
    } else {
        result = `${digits.slice(0, decimalIndex)}.${digits.slice(decimalIndex)}`;
    }

    return normalizePlainDecimal(`${sign}${result}`);
};

const normalizeNumericInput = (value: number | string | bigint): string => {
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

const parseDecimal = (value: number | string | bigint): Decimal => {
    const normalized = normalizeNumericInput(value);
    const sign: 1 | -1 = normalized.startsWith("-") ? -1 : 1;
    const unsigned = sign === -1 ? normalized.slice(1) : normalized;
    const [integerPart, fractionPart = ""] = unsigned.split(".");
    const digits = `${integerPart}${fractionPart}`.replace(/^0+/, "") || "0";
    return {
        sign,
        int: BigInt(digits),
        scale: fractionPart.length
    };
};

const formatDecimal = (sign: 1 | -1, int: bigint, scale: number): string => {
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

const alignScales = (a: Decimal, b: Decimal): { left: bigint; right: bigint; scale: number } => {
    const scale = Math.max(a.scale, b.scale);
    const left = a.int * pow10(scale - a.scale);
    const right = b.int * pow10(scale - b.scale);
    return { left, right, scale };
};

const shiftDecimal = (value: string, places: number): string => {
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
export const formatting = (number: bigint | string | number): string => normalizeNumericInput(number);

/** Formats value as compact notation (e.g. 1.2K, 3.4M). */
export const __toCompactNumber = (number: string | number | bigint): string => {
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

/** Shifts decimal point right by `decimals` places. */
export const __toBig = (num: string, decimals: number = 18): string => shiftDecimal(num, decimals);

/** Shifts decimal point left by `decimals` places. */
export const __toSmall = (num: string, decimals: number = 18): string => {
    if (!Number.isInteger(decimals) || decimals < 0) {
        throw new Error("Decimal places must be a non-negative integer");
    }
    const decimal = parseDecimal(num);
    return formatDecimal(decimal.sign, decimal.int, decimal.scale + decimals);
};

/** Converts integer-like decimal string to bigint; throws for fractional values. */
export const __toBigInt = (num: string): bigint => {
    const decimal = parseDecimal(num);
    if (decimal.scale !== 0) {
        throw new Error("Cannot convert decimal value to bigint without explicit rounding");
    }
    return decimal.sign === -1 ? -decimal.int : decimal.int;
};

/** Converts value to Number when it is within JS safe-integer range. */
export const __toInteger = (num: string): number => {
    const normalized = normalizeNumericInput(num);
    const result = Number(normalized);
    if (!Number.isSafeInteger(result)) {
        throw new Error("Value exceeds Number safe integer range");
    }
    return result;
};

/** Converts numeric value to percent string by multiplying by 100. */
export const __toPercent = (num: string): string => __mul(num, 100).concat("%");

/** Returns true when numeric value is exactly zero. */
export const __isZero = (num: string): boolean => parseDecimal(num).int === 0n;

/** Returns true when numeric value is negative and not zero. */
export const __isNegative = (num: string): boolean => {
    const decimal = parseDecimal(num);
    return decimal.sign === -1 && decimal.int !== 0n;
};

/** Returns true when both numeric values are equal. */
export const __isEqual = (num: string, num2: number | string | bigint): boolean => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    const aligned = alignScales(left, right);
    return (left.sign === -1 ? -aligned.left : aligned.left) === (right.sign === -1 ? -aligned.right : aligned.right);
};

/** Returns true when `num` is greater than `num2`. */
export const __isGreaterThan = (num: string, num2: number | string | bigint): boolean => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    const aligned = alignScales(left, right);
    const leftSigned = left.sign === -1 ? -aligned.left : aligned.left;
    const rightSigned = right.sign === -1 ? -aligned.right : aligned.right;
    return leftSigned > rightSigned;
};

/** Returns true when `num` is greater than or equal to `num2`. */
export const __isGreaterThanEquals = (num: string, num2: number | string | bigint): boolean => __isGreaterThan(num, num2) || __isEqual(num, num2);

/** Returns true when `num` is less than `num2`. */
export const __isLessThan = (num: string, num2: number | string | bigint): boolean => !__isGreaterThanEquals(num, num2);

/** Returns true when `num` is less than or equal to `num2`. */
export const __isLessThanEquals = (num: string, num2: number | string | bigint): boolean => !__isGreaterThan(num, num2);

/** Formats numeric value with thousands separators. */
export const __toCommaSeparated = (num: string): string => {
    const normalized = normalizeNumericInput(num);
    const sign = normalized.startsWith("-") ? "-" : "";
    const unsigned = sign ? normalized.slice(1) : normalized;
    const [integer, fraction] = unsigned.split(".");
    const withCommas = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${sign}${withCommas}${fraction ? `.${fraction}` : ""}`;
};

/** Adds two numeric values and returns a normalized decimal string. */
export const __add = (num: string, num2: number | string | bigint): string => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    const aligned = alignScales(left, right);
    const leftSigned = left.sign === -1 ? -aligned.left : aligned.left;
    const rightSigned = right.sign === -1 ? -aligned.right : aligned.right;
    const result = leftSigned + rightSigned;
    const sign: 1 | -1 = result < 0n ? -1 : 1;
    return formatDecimal(sign, result < 0n ? -result : result, aligned.scale);
};

/** Subtracts `num2` from `num` and returns a normalized decimal string. */
export const __sub = (num: string, num2: number | string | bigint): string => __add(num, parseDecimal(num2).sign === -1 ? normalizeNumericInput(num2).slice(1) : `-${normalizeNumericInput(num2)}`);

/** Multiplies two numeric values and returns a normalized decimal string. */
export const __mul = (num: string, num2: number | string | bigint): string => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    const sign: 1 | -1 = left.sign === right.sign ? 1 : -1;
    return formatDecimal(sign, left.int * right.int, left.scale + right.scale);
};

/** Divides `num` by `num2` and returns a normalized decimal string. Throws on division by zero. */
export const __div = (num: string, num2: number | string | bigint): string => {
    const left = parseDecimal(num);
    const right = parseDecimal(num2);
    if (right.int === 0n) {
        throw new Error("Division by zero");
    }
    const sign: 1 | -1 = left.sign === right.sign ? 1 : -1;

    let numerator = left.int;
    let denominator = right.int;

    const scaleDelta = right.scale - left.scale;
    if (scaleDelta > 0) {
        numerator *= pow10(scaleDelta);
    } else if (scaleDelta < 0) {
        denominator *= pow10(-scaleDelta);
    }

    const scaledNumerator = numerator * pow10(DIVISION_PRECISION);
    const quotient = scaledNumerator / denominator;
    return formatDecimal(sign, quotient, DIVISION_PRECISION);
};

/** Returns the larger of two numeric values as a normalized decimal string. */
export const __max = (num: string, num2: number | string | bigint): string => __isGreaterThan(num, num2) ? formatting(num) : formatting(num2);

/** Returns the smaller of two numeric values as a normalized decimal string. */
export const __min = (num: string, num2: number | string | bigint): string => __isLessThan(num, num2) ? formatting(num) : formatting(num2);

/** Rounds to `decimalPlaces` using half-up rounding and returns normalized decimal string. */
export const __trimDecimalPlaces = (num: string, decimalPlaces: number | string | bigint): string => {
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
