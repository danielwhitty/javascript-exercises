const palindromes = function (word) {
    let wordArray = word.toLowerCase().split('');
    // for (let char of wordArray) {
    //     if (!(/[a-z]/).test(char)) {
    //         wordArray.splice(wordArray.indexOf(char), 1);
    //     }
    // }
    let i = 0;
    while (i < wordArray.length) {
        if ((/[a-z]/).test(wordArray[i])) {
            i++;
        } else {
            wordArray.splice(i, 1);
            continue;
        }
    }

    for (let i = 0; i < wordArray.length - i; i++) {
        if (wordArray[i] !== wordArray[wordArray.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
