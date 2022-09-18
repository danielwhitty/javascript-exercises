const sumAll = function(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    let sumStart;
    let sumEnd;
    if (num1 < num2) {
        sumStart = num1;
        sumEnd = num2;
    } else {
        sumStart = num2;
        sumEnd = num1;
    }

    let finalSum = 0;
    for (let i = sumStart; i <= sumEnd; i++) {
        finalSum += i;
    }
    return finalSum;
};


// Check parameters - ensure number and non negative
// Find smaller of the two numbers
// Loop from smallest number to biggest number
// Start sum variable at 0
// Increment by 1 each time
// Do not edit below this line
module.exports = sumAll;
