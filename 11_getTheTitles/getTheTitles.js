const getTheTitles = function(books) {
    const bookTitles = [];
    for (let book of books) {
        bookTitles.push(book.title);
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
