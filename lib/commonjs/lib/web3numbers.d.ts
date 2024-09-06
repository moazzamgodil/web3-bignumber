import "./prototype.js";
declare const Web3BigNumber: (number: bigint | string | number) => {
    toBig: (decimals?: number) => string;
    toSmall: (decimals?: number) => string;
    toBigInt: () => bigint;
    toCommaSeparated: () => string;
    toCompactNumber: () => string;
    toPercent: () => string;
    toInteger: () => number;
    isZero: () => boolean;
    isNegative: () => boolean;
    equals: (num2: number | string | bigint) => boolean;
    gt: (num2: number | string | bigint) => boolean;
    gte: (num2: number | string | bigint) => boolean;
    lt: (num2: number | string | bigint) => boolean;
    lte: (num2: number | string | bigint) => boolean;
    add: (num2: number | string | bigint) => string;
    subtract: (num2: number | string | bigint) => string;
    multiply: (num2: number | string | bigint) => string;
    divide: (num2: number | string | bigint) => string;
    max: (num2: number | string | bigint) => string;
    min: (num2: number | string | bigint) => string;
    value: () => string;
    trimDecimalPlaces: (decimalPlaces: number | string | bigint) => string;
};
declare global {
    interface IWeb3BigNumber {
        toBig(decimals?: number): string;
        toSmall(decimals?: number): string;
        toBigInt(): bigint;
        toCommaSeparated(): string;
        toCompactNumber(): string;
        toPercent(): string;
        toInteger(): number;
        isZero(): boolean;
        isNegative(): boolean;
        equals(num2: number | string | bigint): boolean;
        gt(num2: number | string | bigint): boolean;
        gte(num2: number | string | bigint): boolean;
        lt(num2: number | string | bigint): boolean;
        lte(num2: number | string | bigint): boolean;
        add(num2: number | string | bigint): string;
        subtract(num2: number | string | bigint): string;
        multiply(num2: number | string | bigint): string;
        divide(num2: number | string | bigint): string;
        max(num2: number | string | bigint): string;
        min(num2: number | string | bigint): string;
        value(): string;
        trimDecimalPlaces(decimalPlaces: number | string | bigint): string;
    }
    interface Window {
        Web3BigNumber(number: bigint | string | number): IWeb3BigNumber;
    }
}
export { Web3BigNumber };
