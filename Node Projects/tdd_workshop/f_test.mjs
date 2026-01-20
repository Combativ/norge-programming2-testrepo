import test from "./test.mjs";


function mysteryFunction(input) {
    return;
}


const tester = test("Testing mysteryFunction");


tester.isEqual(mysteryFunction(5), 25);
tester.isEqual(mysteryFunction(0.5),0.25);
tester.isEqual(mysteryFunction(0), 0);
tester.isEqual(mysteryFunction(-4), 16);


