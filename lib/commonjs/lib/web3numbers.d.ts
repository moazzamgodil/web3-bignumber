declare global {
    interface String {
        toBigInt(): bigint;
        toCommaSeparated(): string;
        toCompactNumber(): string;
        toPercent(): string;
        toInteger(): number;
        toInteger(): number;
        isZero(): boolean;
        isNegative(): boolean;
    }
}
export declare const Web3BigNumber: (number: bigint | string | number) => {
    toBig: (decimals?: number) => string;
    toSmall: (decimals?: number) => string;
    toBigInt: () => bigint;
    toCommaSeparated: () => string;
    toCompactNumber: () => string;
    toPercent: () => string;
    toInteger: () => number;
    isZero: () => boolean;
    isNegative: () => boolean;
    eq: (num2: number | string | bigint) => boolean;
    gt: (num2: number | string | bigint) => boolean;
    gte: (num2: number | string | bigint) => boolean;
    lt: (num2: number | string | bigint) => boolean;
    lte: (num2: number | string | bigint) => boolean;
    add: (num2: number | string | bigint) => string;
    sub: (num2: number | string | bigint) => string;
    mul: (num2: number | string | bigint) => string;
    div: (num2: number | string | bigint) => string;
    max: (num2: number | string | bigint) => string;
    min: (num2: number | string | bigint) => string;
};
