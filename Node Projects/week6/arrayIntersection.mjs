
function intersection_of_arrays(array1, array2) {

    const intersection = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                if (!intersection.includes(array1[i])) {
                    intersection.push(array1[i]); // NB: this creates a shallow-copy!
                }

            }
        }
    }

    return intersection;

}

function intersection_of_n_arrays(...arrays) {
    if (arrays.length === 0) return [];
    let output = arrays[0];
    for (let i = 1; i < arrays.length; i++) { //start at index 1 and always compare/intersect with previous
        output = intersection_of_arrays(output, arrays[i]);
    }
    return output;
}

module.exports = { intersection_of_arrays, intersection_of_n_arrays };