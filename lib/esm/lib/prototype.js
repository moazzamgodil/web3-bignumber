import { __add, __div, __isEqual, __isGreaterThan, __isGreaterThanEquals, __isLessThan, __isLessThanEquals, __isNegative, __isZero, __max, __min, __mul, __sub, __toBigInt, __toCommaSeparated, __toCompactNumber, __toInteger, __toPercent } from "./helper.js";
// STRING
String.prototype.toBigInt = function () {
    return __toBigInt(this.toString());
};
String.prototype.toCommaSeparated = function () {
    return __toCommaSeparated(this.toString());
};
String.prototype.toCompactNumber = function () {
    return __toCompactNumber(this.toString());
};
String.prototype.toPercent = function () {
    return __toPercent(this.toString());
};
String.prototype.toInteger = function () {
    return __toInteger(this.toString());
};
String.prototype.isZero = function () {
    return __isZero(this.toString());
};
String.prototype.isNegative = function () {
    return __isNegative(this.toString());
};
String.prototype.equals = function (num2) {
    return __isEqual(this.toString(), num2);
};
String.prototype.gt = function (num2) {
    return __isGreaterThan(this.toString(), num2);
};
String.prototype.gte = function (num2) {
    return __isGreaterThanEquals(this.toString(), num2);
};
String.prototype.lt = function (num2) {
    return __isLessThan(this.toString(), num2);
};
String.prototype.lte = function (num2) {
    return __isLessThanEquals(this.toString(), num2);
};
String.prototype.add = function (num2) {
    return __add(this.toString(), num2);
};
String.prototype.subtract = function (num2) {
    return __sub(this.toString(), num2);
};
String.prototype.multiply = function (num2) {
    return __mul(this.toString(), num2);
};
String.prototype.divide = function (num2) {
    return __div(this.toString(), num2);
};
String.prototype.max = function (num2) {
    return __max(this.toString(), num2);
};
String.prototype.min = function (num2) {
    return __min(this.toString(), num2);
};
// NUMBER
Number.prototype.toBigInt = function () {
    return __toBigInt(this.toString());
};
Number.prototype.toCommaSeparated = function () {
    return __toCommaSeparated(this.toString());
};
Number.prototype.toCompactNumber = function () {
    return __toCompactNumber(this.toString());
};
Number.prototype.toPercent = function () {
    return __toPercent(this.toString());
};
Number.prototype.toInteger = function () {
    return __toInteger(this.toString());
};
Number.prototype.isZero = function () {
    return __isZero(this.toString());
};
Number.prototype.isNegative = function () {
    return __isNegative(this.toString());
};
Number.prototype.equals = function (num2) {
    return __isEqual(this.toString(), num2);
};
Number.prototype.gt = function (num2) {
    return __isGreaterThan(this.toString(), num2);
};
Number.prototype.gte = function (num2) {
    return __isGreaterThanEquals(this.toString(), num2);
};
Number.prototype.lt = function (num2) {
    return __isLessThan(this.toString(), num2);
};
Number.prototype.lte = function (num2) {
    return __isLessThanEquals(this.toString(), num2);
};
Number.prototype.add = function (num2) {
    return __add(this.toString(), num2);
};
Number.prototype.subtract = function (num2) {
    return __sub(this.toString(), num2);
};
Number.prototype.multiply = function (num2) {
    return __mul(this.toString(), num2);
};
Number.prototype.divide = function (num2) {
    return __div(this.toString(), num2);
};
Number.prototype.max = function (num2) {
    return __max(this.toString(), num2);
};
Number.prototype.min = function (num2) {
    return __min(this.toString(), num2);
};
// BIG INTEGER
BigInt.prototype.toBigInt = function () {
    return __toBigInt(this.toString());
};
BigInt.prototype.toCommaSeparated = function () {
    return __toCommaSeparated(this.toString());
};
BigInt.prototype.toCompactNumber = function () {
    return __toCompactNumber(this.toString());
};
BigInt.prototype.toPercent = function () {
    return __toPercent(this.toString());
};
BigInt.prototype.toInteger = function () {
    return __toInteger(this.toString());
};
BigInt.prototype.isZero = function () {
    return __isZero(this.toString());
};
BigInt.prototype.isNegative = function () {
    return __isNegative(this.toString());
};
BigInt.prototype.equals = function (num2) {
    return __isEqual(this.toString(), num2);
};
BigInt.prototype.gt = function (num2) {
    return __isGreaterThan(this.toString(), num2);
};
BigInt.prototype.gte = function (num2) {
    return __isGreaterThanEquals(this.toString(), num2);
};
BigInt.prototype.lt = function (num2) {
    return __isLessThan(this.toString(), num2);
};
BigInt.prototype.lte = function (num2) {
    return __isLessThanEquals(this.toString(), num2);
};
BigInt.prototype.add = function (num2) {
    return __add(this.toString(), num2);
};
BigInt.prototype.subtract = function (num2) {
    return __sub(this.toString(), num2);
};
BigInt.prototype.multiply = function (num2) {
    return __mul(this.toString(), num2);
};
BigInt.prototype.divide = function (num2) {
    return __div(this.toString(), num2);
};
BigInt.prototype.max = function (num2) {
    return __max(this.toString(), num2);
};
BigInt.prototype.min = function (num2) {
    return __min(this.toString(), num2);
};
//# sourceMappingURL=prototype.js.map