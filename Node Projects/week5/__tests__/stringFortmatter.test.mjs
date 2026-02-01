const format_name = require("../stringFormatter.mjs");


test("format_name is defined", () => {
    expect(format_name).toBeDefined();
})

test("format_name with usual inputs", () => {
    expect(format_name("John", "Smith")).toBe("Smith, John");
    expect(format_name("joran", "zurmühl")).toBe("Zurmühl, Joran");
})

test("format_name with unusual inputs", () => {
    expect(format_name("pEtEr  ", "      PAN!")).toBe("Pan!, Peter");
    expect(format_name("", "")).toBe(", ");
})

test("format_name with non-string inputs", () => {
    expect(() => format_name(peter, pan)).toThrow();
    expect(() => format_name(true, false)).toThrow();
    expect(() => format_name(null, undefined)).toThrow();
})