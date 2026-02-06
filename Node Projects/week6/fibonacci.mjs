

function recursiveFibonacci(n) {

    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("function parameter must be a non-negative integer");
    }
    
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    }

}


module.exports = recursiveFibonacci;