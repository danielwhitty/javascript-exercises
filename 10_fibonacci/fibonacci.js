const fibonacci = function(num) {
    if (num < 1 || isNaN(+num)) {
        return 'OOPS';
    }
    
    const fibArray = [1, 1];
    for (let i = 2; i < num; i++) {
        fibArray.push(fibArray[0] + fibArray[1]);
        fibArray.shift();
    }
    return fibArray[1];
};

// Do not edit below this line
module.exports = fibonacci;
