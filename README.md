# Web3 BigNumber

[![npm package][npm-img]][npm-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
![ES Version][es-version]
![Node Version][node-version]

[npm-img]: https://img.shields.io/npm/v/web3-bignumber/latest
[npm-url]: https://www.npmjs.com/package/web3-bignumber
[downloads-img]: https://img.shields.io/npm/dt/web3-bignumber
[downloads-url]: https://www.npmtrends.com/web3-bignumber
[issues-img]: https://img.shields.io/github/issues/moazzamgodil/web3-bignumber
[issues-url]: https://github.com/moazzamgodil/web3-bignumber/issues
[es-version]: https://img.shields.io/badge/ES-2020-yellow
[node-version]: https://img.shields.io/badge/node-14.x-green

Web3 BigNumber is an extensive library for managing large number for Javascript and Node.js. Useful for web3 development.

## Installation
You can install the package using [NPM](https://www.npmjs.com/package/web3-bignumber)

### Using NPM
```bash
npm install web3-bignumber
```

### Using Yarn
```bash
yarn add web3-bignumber
```

## Getting Started
-   :writing_hand: If you have questions [submit an issue](https://github.com/moazzamgodil/web3-bignumber/issues/new/choose)

## Prerequisites
-   :gear: [NodeJS](https://nodejs.org/) (LTS/Fermium)
-   :toolbox: [Yarn](https://yarnpkg.com/)/[Lerna](https://lerna.js.org/)

## Usage
### Import
```ts
const { Web3BigNumber } = require("web3-bignumber");

OR

import { Web3BigNumber } from "web3-bignumber";
```

```ts
Web3BigNumber(number: bigint | string | number)
```
---
### Basic Usage
---
#### Simple Formatting
```ts
Web3BigNumber(1e+27).value();
// Output: 1000000000000000000000000000
```

#### From small to big
```ts
Web3BigNumber(1000).toBig(18);
// Output: 1000000000000000000000
```

#### From big to small
```ts
Web3BigNumber("12300000000000000").toSmall(18);
// Output: 0.0123
```
---
### Arithmatic Operations
---
#### Addition
```ts
Web3BigNumber("100").add(50);
// Output: 150
```

#### Subtract
```ts
Web3BigNumber("100").subtract(50);
// Output: 50
```

#### Multiply
```ts
Web3BigNumber("100").multiply(5);
// Output: 500
```

#### Division
```ts
Web3BigNumber("50").divide(5);
// Output: 10
```
---
### Manipulate
---
#### To Big Integer
```ts
Web3BigNumber("1234500000000000").toBigInt();
// Output: 1234500000000000n
```

#### To Integer
```ts
Web3BigNumber("123").toInteger();
// Output: 123
```

#### Comma Seperated
```ts
Web3BigNumber("1234500000000").toCommaSeparated();
// Output: 1,234,500,000,000
```

#### Compact Number
```ts
Web3BigNumber("1000000").toCompactNumber();
// Output: 1M
```

#### Percentage
```ts
Web3BigNumber("0.123").toPercent();
// Output: 12.3%
```

#### Fixed Decimal Places
```ts
Web3BigNumber("12.34567").trimDecimalPlaces(2);
// Output: 12.35
```
---
### Conditional Check
---
#### Check Zero
```ts
Web3BigNumber(0).isZero();
// Output: true

Web3BigNumber(1).isZero();
// Output: false
```

#### Check Negative
```ts
Web3BigNumber(-123).isNegative();
// Output: true

Web3BigNumber(123).isNegative();
// Output: false
```

#### Equal
```ts
Web3BigNumber(123).equals("123");
// Output: true

Web3BigNumber(123).equals(456);
// Output: false
```

#### Greater Than
```ts
Web3BigNumber(123).gt("5");
// Output: true

Web3BigNumber(123).gt(456);
// Output: false
```

#### Greater Than or Equal
```ts
Web3BigNumber(123).gte("123");
// Output: true

Web3BigNumber(123).gte(456);
// Output: false
```

#### Less Than
```ts
Web3BigNumber(123).lt("1234");
// Output: true

Web3BigNumber(123).lt(5);
// Output: false
```

#### Less Than or Equal
```ts
Web3BigNumber(123).lte("123");
// Output: true

Web3BigNumber(123).lte(5);
// Output: false
```

#### Check Maximum
```ts
Web3BigNumber(123).max("1234");
// Output: 1234
```

#### Check Minimum
```ts
Web3BigNumber(123).min("1234");
// Output: 123
```

### Prototype Functions
```ts
// Example
Web3BigNumber(1000).subtract("1000").isZero();
// Output: true
```
---
#### All Prototype Functions
---
##### String | Number | BigInt
- ` toBigInt() `
- ` toCommaSeparated() `
- ` toCompactNumber() `
- ` toPercent() `
- ` toInteger() `
- ` isZero() `
- ` isNegative() `
- ` equals(num2: number | string | bigint) `
- ` gt(num2: number | string | bigint) `
- ` gte(num2: number | string | bigint) `
- ` lt(num2: number | string | bigint) `
- ` lte(num2: number | string | bigint) `
- ` add(num2: number | string | bigint) `
- ` subtract(num2: number | string | bigint) `
- ` multiply(num2: number | string | bigint) `
- ` divide(num2: number | string | bigint) `
- ` max(num2: number | string | bigint) `
- ` min(num2: number | string | bigint) `