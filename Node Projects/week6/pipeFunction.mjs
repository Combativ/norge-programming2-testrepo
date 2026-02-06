
function pipeFunctions(...functions) {
    return (input) => {
        for (let i = 0; i < functions.length; i++) {
            input = functions[i](input);
        }
        return input;
    }
}


module.exports = pipeFunctions;