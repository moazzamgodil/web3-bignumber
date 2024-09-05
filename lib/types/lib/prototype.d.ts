export {};
declare global {
    interface String {
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
    }
    interface Number {
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
    }
    interface BigInt {
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
    }
}
//# sourceMappingURL=prototype.d.ts.map