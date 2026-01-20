import test from "./test.mjs";

function sum(a,b){
    return a + b
}

const sumTester = test("Testing sum function");

sumTester.isEqual(sum(2,2), 4, "2+2 is equal to 4");
sumTester.isEqual(sum(3,1), 4, "3+1 is equal to 4");
sumTester.isEqual(sum(2,3), 5, "2+3 is equal to 5");