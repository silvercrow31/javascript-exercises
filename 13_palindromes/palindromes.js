const palindromes = function (givenWord) {
    // format the string to lowercase and 
    const wordLowerCase = givenWord.toLowerCase();
    const wordLength=givenWord.length;
    
    // remove punctuations or breaks
    let itemsToRemove = ["-", "_", ",", " ", ".", "!"];
    let wordLowerPruned = "";

    for (let i = 0; i < wordLength; i++) {
        let currentChar = wordLowerCase.at(i);
        if (!(itemsToRemove.includes(currentChar))) {
            wordLowerPruned = wordLowerPruned.concat(currentChar);
        }
    }
    // reverses the processed string
    const reversedWord = wordLowerPruned.split("").reverse().join("");

    // tests if it's a palindrome
    return wordLowerPruned === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
