
function convert(i) {

    if (typeof i !== "number" || i < 0 || i > 3999) {
        return null;
    }
    
    let output = "";

    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (let j = 0; j < values.length; j++) {
        while (i >= values[j]) {
            output += numerals[j];
            i -= values[j];
        }
    }

    return output;

}

module.exports = convert;