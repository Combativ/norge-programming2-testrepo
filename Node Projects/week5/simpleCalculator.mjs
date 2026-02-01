
function multiply(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Arguments must be integers.");
    }


    return a * b;
}

module.exports = multiply;