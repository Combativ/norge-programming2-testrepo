import test from "./test.mjs";

function sum(a, b, ...c) {
  return a + b + c.reduce((prev, cur) => prev + cur);
}

const sumTester = test("Testing other sum function");

sumTester.isEqual(sum(2, 2, 5), 9, "2+2+5 is equal to 9");
sumTester.isEqual(sum(3, 1, 19), 23, "3+1+19 is equal to 23");
sumTester.doesNotThrowError(() => sum(0, 0, 6, "n", 0.00023, 't'), "Testing other sum function with non-number inputs");