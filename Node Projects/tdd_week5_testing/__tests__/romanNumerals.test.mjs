const convert = require("../romanNumerals.mjs");



test("convert is defined", () => {
    expect(convert).toBeDefined();
})

test("test convert() function with normal inputs", () => {

    expect(convert(1)).toBe("I");
    expect(convert(5)).toBe("V");
    expect(convert(10)).toBe("X");
    expect(convert(31)).toBe("XXXI");
    expect(convert(991)).toBe("CMXCI");

    const val = convert(1);
    expect(val).toMatch(/I/);
})

test("test convert() function with unusual inputs", () => {
    
    expect(convert(0)).toBe("");
    expect(convert(3999)).toBe("MMMCMXCIX");
    expect(convert(-1)).toBeNull();
    expect(convert("kjdfh89h")).toBeNull();

})