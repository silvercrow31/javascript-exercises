const getTheTitles = function(a) {
    const providedArray = a;
    let arrayOfTitles = [];

    providedArray.forEach(getTitle)

    return arrayOfTitles

    function getTitle(book) {
        arrayOfTitles.push(book.title)
    }

};

// Do not edit below this line
module.exports = getTheTitles;
