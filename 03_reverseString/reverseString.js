const reverseString = function(str) {
    let stringArray = str.split('');
    let revString = '';
    for (const char of stringArray) {
        revString = char + revString;
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
