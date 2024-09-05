import { divide } from "./divide";
import { multiply } from "./multiply";

export const formatting = (number: bigint | string | number): string => {

    if (Number(number) === 0 || isNaN(Number(number))) {
        return "0";
    }

    let num = number.toString();
    if (num.includes("+") || (num.includes("-") && num.indexOf("-") != 0)) {
        if (num.indexOf("+") != -1) {
            num = Number(num).toLocaleString().replaceAll(",", "");
        } else {
            const splitNum = num.split("-");
            const exponentNum = splitNum[splitNum.length - 1];
            const numLen = splitNum[0].length - 1;
            num = Number(num).toFixed(Number(exponentNum) + Number(numLen));
        }
    }

    return num;
}

export const __toCompactNumber = (number: string | number | bigint): string => {
    let num = Number(number);
    if (isNaN(num)) {
        return "0";
    }
    const units = ["", "K", "M", "B", "T"];
    let unitIndex = 0;

    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }

    return num.toFixed(1).replace(/\.0$/, '') + units[unitIndex];
}

export const __toBig = (num: string, decimals: number = 18): string => {
    if (isNaN(Number(num)) || isNaN(decimals)) {
        return "0";
    }
    return multiply(num, decimals);
}

export const __toSmall = (num: string, decimals: number = 18): string => {
    if (isNaN(Number(num)) || isNaN(decimals)) {
        return "0";
    }
    return divide(num, decimals);
}

export const __toBigInt = (num: string): bigint => {
    if (Number(num) < 1 || isNaN(Number(num))) {
        return BigInt(0);
    }
    return BigInt(num);
}

export const __toInteger = (num: string): number => {
    return Number(num);
}

export const __toPercent = (num: string): string => {
    if (isNaN(Number(num))) {
        return "0";
    }
    return (Number(num) * 100).toString() + "%";
}

export const __isZero = (num: string): boolean => {
    if (Number(num) == 0) {
        return true;
    }
    return false;
}

export const __isNegative = (num: string): boolean => {
    if (Number(num) < 0) {
        return true;
    }
    return false;
}

export const __isEqual = (num: string, num2: number | string | bigint): boolean => {
    if (Number(num) == Number(num2)) {
        return true;
    }
    return false;
}

export const __isGreaterThan = (num: string, num2: number | string | bigint): boolean => {
    if (Number(num) > Number(num2)) {
        return true;
    }
    return false;
}

export const __isGreaterThanEquals = (num: string, num2: number | string | bigint): boolean => {
    if (Number(num) >= Number(num2)) {
        return true;
    }
    return false;
}

export const __isLessThan = (num: string, num2: number | string | bigint): boolean => {
    if (Number(num) < Number(num2)) {
        return true;
    }
    return false;
}

export const __isLessThanEquals = (num: string, num2: number | string | bigint): boolean => {
    if (Number(num) <= Number(num2)) {
        return true;
    }
    return false;
}

export const __toCommaSeparated = (num: string): string => {
    if (isNaN(Number(num))) {
        return "0";
    }
    const arr = num.toString().split("").reverse();
    let index = 0;
    const formatted = arr.map((v, i) => {
        if (index > 1) {
            index = 0;
            if (i < arr.length - 1) {
                return "," + v;
            }
        }
        index++;
        return v;
    });
    return formatted.reverse().join("");
}

export const __add = (num: string, num2: number | string | bigint): string => {
    const num1 = Number(num);
    num2 = Number(num2);
    return formatting(num1 + num2);
}

export const __sub = (num: string, num2: number | string | bigint): string => {
    const num1 = Number(num);
    num2 = Number(num2);
    return formatting(num1 - num2);
}

export const __mul = (num: string, num2: number | string | bigint): string => {
    const num1 = Number(num);
    num2 = Number(num2);
    return formatting(num1 * num2);
}

export const __div = (num: string, num2: number | string | bigint): string => {
    const num1 = Number(num);
    num2 = Number(num2);
    return formatting(num1 / num2);
}

export const __max = (num: string, num2: number | string | bigint): string => {
    const num1 = Number(num);
    num2 = Number(num2);
    return formatting(num1 > num2 ? num1 : num2);
}

export const __min = (num: string, num2: number | string | bigint): string => {
    const num1 = Number(num);
    num2 = Number(num2);
    return formatting(num1 < num2 ? num1 : num2);
}
