
function convertFtoC() {

}

function convertCtoF() {

}

function convertKtoC(k) {

    if (typeof k !== "number" || k < 0) {
        return null;
    }

    return k - 273.15;

}


module.exports = convertFtoC, convertCtoF, convertKtoC;