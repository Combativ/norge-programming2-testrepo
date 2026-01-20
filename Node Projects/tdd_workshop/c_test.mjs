import test from "./test.mjs";

function isAdult(age) {
  return age >= 18;
}

const ageTester = test("Testing isAdult function");

ageTester.isEqual(isAdult(1), false, "isAdult() == false with age of 1");
ageTester.isEqual(isAdult(18), true, "isAdult() == true with age of 18");
ageTester.doesNotThrowError(() => isAdult(-15), "testing if isAdult(-15) throws an error");
ageTester.doesNotThrowError(() => isAdult("minus 35"), "testing if isAdult('minus 35') throws an error");
