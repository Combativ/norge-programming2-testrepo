const is_adult = require("../membershipChecker.mjs");


test("is_adult is defined", () => {
    expect(is_adult).toBeDefined();
})

test("is_adult() with number 17", () => {
    expect(is_adult(17)).toBe(false);
})

test("is_adult with number 18", () => {
    expect(is_adult(18)).toBe(true);
})

test("is_adult with string '18'", () => {
    expect(() => is_adult("18")).toThrow();
})

test("is_adult with non-integer numbers", () => {
    expect(is_adult(1.1)).toBe(false);
    expect(is_adult(17.9999999999)).toBe(false);
    expect(is_adult(81.5)).toBe(true);
})