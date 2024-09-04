"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__min = exports.__max = exports.__div = exports.__mul = exports.__sub = exports.__add = exports.__toCommaSeparated = exports.__isLessThanEquals = exports.__isLessThan = exports.__isGreaterThanEquals = exports.__isGreaterThan = exports.__isEqual = exports.__isNegative = exports.__isZero = exports.__toPercent = exports.__toInteger = exports.__toBigInt = exports.__toSmall = exports.__toBig = exports.__toCompactNumber = exports.formatting = void 0;
const divide_1 = require("./divide.js");
const multiply_1 = require("./multiply.js");
const formatting = (number) => {
    let num = number.toString();
    if (Number(number) === 0 || isNaN(Number(number))) {
        num = "0";
    }
    if (num.includes("+") || (num.includes("-") && num.indexOf("-") != 0)) {
        if (num.indexOf("+") != -1) {
            num = Number(num).toLocaleString().replaceAll(",", "");
        }
        else {
            const splitNum = num.split("-");
            const exponentNum = splitNum[splitNum.length - 1];
            const numLen = splitNum[0].length - 1;
            num = Number(num).toFixed(Number(exponentNum) + Number(numLen));
        }
    }
    return num;
};
exports.formatting = formatting;
const __toCompactNumber = (number) => {
    let num = Number(number);
    const units = ["", "K", "M", "B", "T"];
    let unitIndex = 0;
    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }
    return num.toFixed(1).replace(/\.0$/, '') + units[unitIndex];
};
exports.__toCompactNumber = __toCompactNumber;
const __toBig = (num, decimals = 18) => {
    return (0, multiply_1.multiply)(num, decimals);
};
exports.__toBig = __toBig;
const __toSmall = (num, decimals = 18) => {
    return (0, divide_1.divide)(num, decimals);
};
exports.__toSmall = __toSmall;
const __toBigInt = (num) => {
    if (Number(num) < 1 || isNaN(Number(this))) {
        return BigInt(0);
    }
    return BigInt(num);
};
exports.__toBigInt = __toBigInt;
const __toInteger = (num) => {
    return Number(num);
};
exports.__toInteger = __toInteger;
const __toPercent = (num) => {
    return (Number(num) * 100).toString() + "%";
};
exports.__toPercent = __toPercent;
const __isZero = (num) => {
    if (Number(num) == 0) {
        return true;
    }
    return false;
};
exports.__isZero = __isZero;
const __isNegative = (num) => {
    if (Number(num) < 0) {
        return true;
    }
    return false;
};
exports.__isNegative = __isNegative;
const __isEqual = (num, num2) => {
    if (Number(num) == Number(num2)) {
        return true;
    }
    return false;
};
exports.__isEqual = __isEqual;
const __isGreaterThan = (num, num2) => {
    if (Number(num) > Number(num2)) {
        return true;
    }
    return false;
};
exports.__isGreaterThan = __isGreaterThan;
const __isGreaterThanEquals = (num, num2) => {
    if (Number(num) >= Number(num2)) {
        return true;
    }
    return false;
};
exports.__isGreaterThanEquals = __isGreaterThanEquals;
const __isLessThan = (num, num2) => {
    if (Number(num) < Number(num2)) {
        return true;
    }
    return false;
};
exports.__isLessThan = __isLessThan;
const __isLessThanEquals = (num, num2) => {
    if (Number(num) <= Number(num2)) {
        return true;
    }
    return false;
};
exports.__isLessThanEquals = __isLessThanEquals;
const __toCommaSeparated = (num) => {
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
};
exports.__toCommaSeparated = __toCommaSeparated;
const __add = (num, num2) => {
    const num1 = Number(num);
    num2 = Number(num2);
    return (0, exports.formatting)(num1 + num2);
};
exports.__add = __add;
const __sub = (num, num2) => {
    const num1 = Number(num);
    num2 = Number(num2);
    return (0, exports.formatting)(num1 - num2);
};
exports.__sub = __sub;
const __mul = (num, num2) => {
    const num1 = Number(num);
    num2 = Number(num2);
    return (0, exports.formatting)(num1 * num2);
};
exports.__mul = __mul;
const __div = (num, num2) => {
    const num1 = Number(num);
    num2 = Number(num2);
    return (0, exports.formatting)(num1 / num2);
};
exports.__div = __div;
const __max = (num, num2) => {
    const num1 = Number(num);
    num2 = Number(num2);
    return (0, exports.formatting)(num1 > num2 ? num1 : num2);
};
exports.__max = __max;
const __min = (num, num2) => {
    const num1 = Number(num);
    num2 = Number(num2);
    return (0, exports.formatting)(num1 < num2 ? num1 : num2);
};
exports.__min = __min;
//# sourceMappingURL=helper.js.map