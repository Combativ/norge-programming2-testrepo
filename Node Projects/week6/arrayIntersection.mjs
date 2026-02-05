
function intersection_of_arrays(array1, array2) {

    const intersection = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {

                if (!intersection.includes(array1[i])) {
                    // we need to create a deep copy here to remove any references to array1 and array2
                    intersection.push(JSON.parse(JSON.stringify(array1[i])));
                }

            }
        }
    }

    return intersection;

}

function intersection_of_n_arrays(...arrays) {

}


module.exports = intersection_of_arrays;