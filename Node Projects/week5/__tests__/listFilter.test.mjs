const filterEvenIntegers = require("../listFilter.mjs");



test("filterEvenIntegers is defined", () => {
    expect(filterEvenIntegers).toBeDefined();
})

test("filterEvenIntegers with usual inputs", () => {
    expect(filterEvenIntegers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
})

test("filterEvenIntegers with unusual inputs", () => {
    expect(filterEvenIntegers([1, 345869374952, 0, -9000, -0])).toEqual([345869374952, 0, -9000, -0]);
})

test("filterEvenIntegers with non-integer inputs", () => {
    expect(() => filterEvenIntegers([1.1, 2.000000000001, 0.0])).toThrow();
})

test("filterEvenIntegers with empty list", () => {
    expect(filterEvenIntegers([])).toEqual([]);
})