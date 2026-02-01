const multiply = require("../simpleCalculator.mjs");


test("multiply is defined", () => {
    expect(multiply).toBeDefined();
})

test("multiply usual numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(15, 2)).toBe(30);
    expect(multiply(1, 1)).toBe(1);
})

test("multiply with unusual numbers", () => {
    expect(multiply(333, 0)).toBe(0);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(0,0)).toBe(0);
})

test("multiply with non-integer numbers", () => {
    expect(() => multiply(1.1, 2)).toThrow();
    expect(() => multiply(4, 1.1)).toThrow();
})

test("multiply with non-numbers", () => {
    expect(() => multiply("a", "b")).toThrow();
    expect(() => multiply(true, false)).toThrow()
    expect(() => multiply(null, undefined)).toThrow();
})