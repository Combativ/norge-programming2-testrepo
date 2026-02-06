const recursiveFibonacci = require("../fibonacci.mjs");

test("recursiveFibonacci with valid integers", () => {
    // Base cases
    expect(recursiveFibonacci(0)).toBe(0);
    expect(recursiveFibonacci(1)).toBe(1);

    // Small integers
    // Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
    expect(recursiveFibonacci(2)).toBe(1);
    expect(recursiveFibonacci(3)).toBe(2);
    expect(recursiveFibonacci(4)).toBe(3);
    expect(recursiveFibonacci(5)).toBe(5);
    expect(recursiveFibonacci(6)).toBe(8);
    expect(recursiveFibonacci(10)).toBe(55);
});

test("recursiveFibonacci error handling", () => {

    // Negative numbers
    expect(() => recursiveFibonacci(-1)).toThrow();
    expect(() => recursiveFibonacci(-10)).toThrow();

    // Non-integers and invalid types
    expect(() => recursiveFibonacci(1.5)).toThrow();
    expect(() => recursiveFibonacci("5")).toThrow();
    expect(() => recursiveFibonacci(null)).toThrow();
    expect(() => recursiveFibonacci(undefined)).toThrow();
});