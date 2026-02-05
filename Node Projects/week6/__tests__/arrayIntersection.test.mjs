const intersection_of_arrays = require("../arrayIntersection.mjs");


test("intersection_of_arrays with numbers", () => {
    expect(intersection_of_arrays([1,2,3,4,5], [3,4,5,6,7])).toEqual([3,4,5]);
    expect(intersection_of_arrays([3.141592652589793, 99, -3.56, 1111111, 0, 0.0001], [489674, 0.0001, 0.0000, 3.14159265358979323])).toEqual([0, 0.0001]);
    expect(intersection_of_arrays([1, 1, 1, 2, 2, 3], [1, 1, 2, 2, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3]);
});

test("intersection_of_arrays with objects", () => {
    expect(intersection_of_arrays(
        [{name: "Joran", age: 21}, {name: "Justin", age: 21}],
        [{name: "Justin", age: 21}]))
    .not.toEqual([{name: "Justin", age: 21}])

    const joran = {name: "Joran", age: 21};
    const justin = {name: "Justin", age: 21};

    expect(intersection_of_arrays([joran, justin], [justin])).toEqual([justin]);
})

test("test intersection_of_arrays on side effect", () => {

    // Define sample objects to be used in arrays
    const one = {number: "1"};
    const two = {number: "2"};
    const three = {number: "3"};
    const four = {number: "4"};
    const five = {number: "5"};

    const array1 = [one, two, five, four];
    const array2 = [four, two, three];

    const intersection = intersection_of_arrays(array1, array2);

    // Verify the intersection contains the expected objects
    expect(intersection).toEqual([{number: "2"}, {number: "4"}]);

    // Ensure the original input arrays remain unchanged after the function call
    expect(array1).toEqual([{number: "1"}, {number: "2"}, {number: "5"}, {number: "4"}]);
    expect(array2).toEqual([{number: "4"}, {number: "2"}, {number: "3"}]);

    // Modify an object inside the intersection array to test for deep copying
    intersection[1].number = "5";

    // Verify that modifying the intersection does not affect the original arrays (no shared references)
    expect(intersection).toEqual([{number: "2"}, {number: "5"}]);
    expect(array1).toEqual([{number: "1"}, {number: "2"}, {number: "5"}, {number: "4"}]);
    expect(array2).toEqual([{number: "4"}, {number: "2"}, {number: "3"}]);

})