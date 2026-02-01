const divide = require("../errorHandler.mjs");


test("divide is defined", () => {
    expect(divide).toBeDefined();
})

test("divide 3 by 2", () => {
    expect(divide(3, 2)).toBe(1.5);
})

test("divide 10 by 3", () => {
    expect(divide(10, 3)).toBeCloseTo(3.333333);
})

test("divide 5 by -2", () => {
    expect(divide(5, -2)).toBe(-2.5);
})

test("divide by zero", () => {
    expect(() => divide(3, 0)).toThrow();
})

test("divide with non-numbers", () => {
    expect(() => divide("3", "two")).toThrow();
})