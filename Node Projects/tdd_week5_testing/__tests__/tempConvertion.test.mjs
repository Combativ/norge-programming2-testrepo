const convertFtoC = require("../tempConverter.mjs");
const convertCtoF = require("../tempConverter.mjs");
const convertKtoC = require("../tempConverter.mjs");


test("convertFtoC, convertCtoF, convertKtoC are defined", () => {
    expect(convertFtoC).toBeDefined();
    expect(convertCtoF).toBeDefined();
    expect(convertKtoC).toBeDefined();
})



test("0 Fahrenheit to Celsius", () => {
    expect(convertFtoC(0)).toBeCloseTo(-17.77777777777778);
})

test("0 Celsius to Fahrenheit", () => {
    expect(convertCtoF(0)).toBe(32);
})

test("0 Kelvin to Celsius", () => {
    expect(convertKtoC(0)).toBe(-273.15);
})