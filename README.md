# Web3 BigNumber

![ES Version](https://img.shields.io/badge/ES-2020-yellow)
![Node Version](https://img.shields.io/badge/node-14.x-green)

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

### From small to big

```ts
Web3BigNumber(1000).toBig(18);
// Output: 1000000000000000000000
```

### From big to small

```ts
Web3BigNumber("12300000000000000").toSmall(18);
// Output: 0.0123
```

### Addition

```ts
Web3BigNumber("100").add(50);
// Output: 150
```

### Subtract

```ts
Web3BigNumber("100").sub(50);
// Output: 50
```

### Multiply

```ts
Web3BigNumber("100").mul(5);
// Output: 500
```

### Division

```ts
Web3BigNumber("50").div(5);
// Output: 10
```

### To Big Integer

```ts
Web3BigNumber("1234500000000000").toBigInt();
// Output: 1234500000000000n
```

### To Integer

```ts
Web3BigNumber("123").toInteger();
// Output: 123
```

### Comma Seperated

```ts
Web3BigNumber("1234500000000").toCommaSeparated();
// Output: 1,234,500,000,000
```

### Compact Number

```ts
Web3BigNumber("1000000").toCompactNumber();
// Output: 1M
```

### Percentage

```ts
Web3BigNumber("0.123").toPercent();
// Output: 12.3%
```

### Check Zero

```ts
Web3BigNumber(0).isZero();
// Output: true

Web3BigNumber(1).isZero();
// Output: false
```

### Check Negative

```ts
Web3BigNumber(-123).isNegative();
// Output: true

Web3BigNumber(123).isNegative();
// Output: false
```

### Equal

```ts
Web3BigNumber(123).eq("123");
// Output: true

Web3BigNumber(123).eq(456);
// Output: false
```

### Greater Than

```ts
Web3BigNumber(123).gt("5");
// Output: true

Web3BigNumber(123).gt(456);
// Output: false
```

### Greater Than or Equal

```ts
Web3BigNumber(123).gte("123");
// Output: true

Web3BigNumber(123).gte(456);
// Output: false
```

### Less Than

```ts
Web3BigNumber(123).lt("1234");
// Output: true

Web3BigNumber(123).lt(5);
// Output: false
```

### Less Than or Equal

```ts
Web3BigNumber(123).lte("123");
// Output: true

Web3BigNumber(123).lte(5);
// Output: false
```

### Check Maximum

```ts
Web3BigNumber(123).max("1234");
// Output: 1234
```

### Check Minimum

```ts
Web3BigNumber(123).min("1234");
// Output: 123
```