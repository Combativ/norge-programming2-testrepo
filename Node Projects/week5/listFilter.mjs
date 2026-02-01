
function filterEvenIntegers(integerList) {
    let outputList = [];

    for (number of integerList) {
        if (!Number.isInteger(number)) {
            throw new Error("List contains numbers that are not integers.");
        }
    }

    for (let i = 0; i < integerList.length; i++) {
        if (integerList[i] % 2 == 0) {
            outputList.push(integerList[i]);
        }
    }

    return outputList;
}

module.exports = filterEvenIntegers;