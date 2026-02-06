const pipeFunctions = require("../pipeFunction.mjs");

test("pipeFunctions with math operations", () => {
    const add5 = (x) => x + 5;
    const multiplyBy2 = (x) => x * 2;
    const subtract3 = (x) => x - 3;

    // Execution: ((10 + 5) * 2) - 3 = 27
    const pipeline = pipeFunctions(add5, multiplyBy2, subtract3);
    expect(pipeline(10)).toBe(27);
});

test("pipeFunctions execution order (left to right)", () => {
    const appendA = (s) => s + "A";
    const appendB = (s) => s + "B";

    // Should execute appendA then appendB
    expect(pipeFunctions(appendA, appendB)("start-")).toBe("start-AB");
    
    // Should execute appendB then appendA
    expect(pipeFunctions(appendB, appendA)("start-")).toBe("start-BA");
});

test("pipeFunctions with type transformations", () => {
    const numToString = (n) => `Number: ${n}`;
    const toUpperCase = (s) => s.toUpperCase();
    const createObject = (s) => ({ value: s });

    // Number -> String -> String -> Object
    const pipeline = pipeFunctions(numToString, toUpperCase, createObject);
    expect(pipeline(42)).toEqual({ value: "NUMBER: 42" });
});

test("pipeFunctions with no functions (identity)", () => {
    // Should return the input unchanged
    const pipeline = pipeFunctions();
    expect(pipeline(123)).toBe(123);
    expect(pipeline("hello")).toBe("hello");
    const obj = { id: 1 };
    expect(pipeline(obj)).toBe(obj);
});