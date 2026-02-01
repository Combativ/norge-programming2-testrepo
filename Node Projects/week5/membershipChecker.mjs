
function is_adult(age) {

    if (typeof age != "number") {
        throw new Error("Age must be a number.");
    }

    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

module.exports = is_adult;