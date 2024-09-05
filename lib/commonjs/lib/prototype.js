"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper.js");
// STRING
String.prototype.toBigInt = function () {
    return (0, helper_1.__toBigInt)(this.toString());
};
String.prototype.toCommaSeparated = function () {
    return (0, helper_1.__toCommaSeparated)(this.toString());
};
String.prototype.toCompactNumber = function () {
    return (0, helper_1.__toCompactNumber)(this.toString());
};
String.prototype.toPercent = function () {
    return (0, helper_1.__toPercent)(this.toString());
};
String.prototype.toInteger = function () {
    return (0, helper_1.__toInteger)(this.toString());
};
String.prototype.isZero = function () {
    return (0, helper_1.__isZero)(this.toString());
};
String.prototype.isNegative = function () {
    return (0, helper_1.__isNegative)(this.toString());
};
String.prototype.equals = function (num2) {
    return (0, helper_1.__isEqual)(this.toString(), num2);
};
String.prototype.gt = function (num2) {
    return (0, helper_1.__isGreaterThan)(this.toString(), num2);
};
String.prototype.gte = function (num2) {
    return (0, helper_1.__isGreaterThanEquals)(this.toString(), num2);
};
String.prototype.lt = function (num2) {
    return (0, helper_1.__isLessThan)(this.toString(), num2);
};
String.prototype.lte = function (num2) {
    return (0, helper_1.__isLessThanEquals)(this.toString(), num2);
};
String.prototype.add = function (num2) {
    return (0, helper_1.__add)(this.toString(), num2);
};
String.prototype.subtract = function (num2) {
    return (0, helper_1.__sub)(this.toString(), num2);
};
String.prototype.multiply = function (num2) {
    return (0, helper_1.__mul)(this.toString(), num2);
};
String.prototype.divide = function (num2) {
    return (0, helper_1.__div)(this.toString(), num2);
};
String.prototype.max = function (num2) {
    return (0, helper_1.__max)(this.toString(), num2);
};
String.prototype.min = function (num2) {
    return (0, helper_1.__min)(this.toString(), num2);
};
// NUMBER
Number.prototype.toBigInt = function () {
    return (0, helper_1.__toBigInt)(this.toString());
};
Number.prototype.toCommaSeparated = function () {
    return (0, helper_1.__toCommaSeparated)(this.toString());
};
Number.prototype.toCompactNumber = function () {
    return (0, helper_1.__toCompactNumber)(this.toString());
};
Number.prototype.toPercent = function () {
    return (0, helper_1.__toPercent)(this.toString());
};
Number.prototype.toInteger = function () {
    return (0, helper_1.__toInteger)(this.toString());
};
Number.prototype.isZero = function () {
    return (0, helper_1.__isZero)(this.toString());
};
Number.prototype.isNegative = function () {
    return (0, helper_1.__isNegative)(this.toString());
};
Number.prototype.equals = function (num2) {
    return (0, helper_1.__isEqual)(this.toString(), num2);
};
Number.prototype.gt = function (num2) {
    return (0, helper_1.__isGreaterThan)(this.toString(), num2);
};
Number.prototype.gte = function (num2) {
    return (0, helper_1.__isGreaterThanEquals)(this.toString(), num2);
};
Number.prototype.lt = function (num2) {
    return (0, helper_1.__isLessThan)(this.toString(), num2);
};
Number.prototype.lte = function (num2) {
    return (0, helper_1.__isLessThanEquals)(this.toString(), num2);
};
Number.prototype.add = function (num2) {
    return (0, helper_1.__add)(this.toString(), num2);
};
Number.prototype.subtract = function (num2) {
    return (0, helper_1.__sub)(this.toString(), num2);
};
Number.prototype.multiply = function (num2) {
    return (0, helper_1.__mul)(this.toString(), num2);
};
Number.prototype.divide = function (num2) {
    return (0, helper_1.__div)(this.toString(), num2);
};
Number.prototype.max = function (num2) {
    return (0, helper_1.__max)(this.toString(), num2);
};
Number.prototype.min = function (num2) {
    return (0, helper_1.__min)(this.toString(), num2);
};
// BIG INTEGER
BigInt.prototype.toBigInt = function () {
    return (0, helper_1.__toBigInt)(this.toString());
};
BigInt.prototype.toCommaSeparated = function () {
    return (0, helper_1.__toCommaSeparated)(this.toString());
};
BigInt.prototype.toCompactNumber = function () {
    return (0, helper_1.__toCompactNumber)(this.toString());
};
BigInt.prototype.toPercent = function () {
    return (0, helper_1.__toPercent)(this.toString());
};
BigInt.prototype.toInteger = function () {
    return (0, helper_1.__toInteger)(this.toString());
};
BigInt.prototype.isZero = function () {
    return (0, helper_1.__isZero)(this.toString());
};
BigInt.prototype.isNegative = function () {
    return (0, helper_1.__isNegative)(this.toString());
};
BigInt.prototype.equals = function (num2) {
    return (0, helper_1.__isEqual)(this.toString(), num2);
};
BigInt.prototype.gt = function (num2) {
    return (0, helper_1.__isGreaterThan)(this.toString(), num2);
};
BigInt.prototype.gte = function (num2) {
    return (0, helper_1.__isGreaterThanEquals)(this.toString(), num2);
};
BigInt.prototype.lt = function (num2) {
    return (0, helper_1.__isLessThan)(this.toString(), num2);
};
BigInt.prototype.lte = function (num2) {
    return (0, helper_1.__isLessThanEquals)(this.toString(), num2);
};
BigInt.prototype.add = function (num2) {
    return (0, helper_1.__add)(this.toString(), num2);
};
BigInt.prototype.subtract = function (num2) {
    return (0, helper_1.__sub)(this.toString(), num2);
};
BigInt.prototype.multiply = function (num2) {
    return (0, helper_1.__mul)(this.toString(), num2);
};
BigInt.prototype.divide = function (num2) {
    return (0, helper_1.__div)(this.toString(), num2);
};
BigInt.prototype.max = function (num2) {
    return (0, helper_1.__max)(this.toString(), num2);
};
BigInt.prototype.min = function (num2) {
    return (0, helper_1.__min)(this.toString(), num2);
};
//# sourceMappingURL=prototype.js.map