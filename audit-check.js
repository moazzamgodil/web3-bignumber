const { Web3BigNumber } = require("./lib/commonjs");

  const test = (name, fn) => {
    try {
      const out = fn();
      console.log(`PASS? ${name}:`, out);
    } catch (e) {
      console.log(`THROW ${name}:`, e.message);
    }
  };

//   Test Cases To Verify Findings

//   1. Precision loss in add/sub (unsafe Number math)

  test("add unsafe integer", () =>
    Web3BigNumber("9007199254740993").add("1") // expected 9007199254740994
  );
  test("subtract unsafe integer", () =>
    Web3BigNumber("9007199254740993").subtract("1") // expected 9007199254740992
  );

//   - If output is wrong or rounded, issue confirmed.

//   2. Precision loss in comparison

  test("equals unsafe", () =>
    Web3BigNumber("9007199254740993").equals("9007199254740992") // expected false
  );
  test("gt unsafe", () =>
    Web3BigNumber("9007199254740993").gt("9007199254740992") // expected true
  );

//   3. toBig(1) bug

  test("toBig decimals=1", () =>
    Web3BigNumber("1.5").toBig(1) // expected 15, current likely 1.5
  );

//   4. toSmall(1) bug

  test("toSmall decimals=1", () =>
    Web3BigNumber("15").toSmall(1) // expected 1.5, current likely 15
  );

//   5. toBigInt unsafe conversion/rounding

  test("toBigInt huge", () =>
    Web3BigNumber("123456789012345678901234567890").toBigInt().toString()
    // expected exact same integer string
  );
  test("toBigInt decimal rounding", () =>
    Web3BigNumber("1.6").toBigInt().toString() // shows rounding behavior (likely "2")
  );

//   6. Silent invalid-input fallback to "0"

  test("invalid input add", () =>
    Web3BigNumber("abc").add("10") // should ideally throw; current likely "0"
  );
  test("invalid input value", () =>
    Web3BigNumber("abc").value() // current likely "0"
  );

//   7. Divide by zero behavior

  test("divide by zero", () =>
    Web3BigNumber("10").divide("0") // should throw; inspect current output
  );

//   8. Prototype pollution / side effects

  test("string prototype extended", () => typeof "1".toBigInt === "function");
  test("number prototype extended", () => typeof (1).toBigInt === "function");
  test("bigint prototype extended", () => typeof (1n).toBigInt === "function");

//   - If true immediately after import, side-effect issue confirmed.

//   9. Formatting scientific notation edge

  test("scientific input", () =>
    Web3BigNumber("1e+27").value() // verify exact digits output
  );
  test("very small scientific", () =>
    Web3BigNumber("1e-8").value() // inspect correctness/stability
  );

//   10. Trim decimals behavior checks

  test("trim normal", () => Web3BigNumber("12.34567").trimDecimalPlaces(2)); // expect 12.35
  test("trim zero decimalPlaces", () => Web3BigNumber("12.9").trimDecimalPlaces(0)); // expect 13
  test("trim invalid decimalPlaces", () => Web3BigNumber("12.9").trimDecimalPlaces(-1)); // current
//   likely "0"

//   Run:

//   node audit-check.js
