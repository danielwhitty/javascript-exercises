const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        for (const element of array) {
            if (arg === element) {
                array.splice(array.indexOf(element), 1);
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
