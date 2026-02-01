
function divide(a, b) {

    if (typeof a != "number" || typeof b != "number") {
        throw new Error("Arguments must be numbers.");
    }


    if (b == 0) {
        throw new Error("Cannot divide by zero. Math crime!");
    }

    return a / b;

}

module.exports = divide;