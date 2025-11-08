const palindromes = function (givenWord) {
    let wordProcessed;
    itemsToRemove = ["-", "_", ",", " ", "\"", "\´", "."];
    wordLength=givenWord.length;
    let reversedWordProcessed = "";

    for (let i = 0; i===wordLength; i++) {
        let currentChar=givenWord.at(i)

        // remove punctuation and word breaks
        
        if (itemsToRemove.include(currentChar)) {
            wordProcessed = givenWord.replace(/currentChar/g,"")      
        }
        wordProcessed = wordProcessed.toLowercase()
        // get the reversed string
        reversedWordProcessed = reversedWordProcessed.concat(currentChar)
    }
    if (reversedWordProcessed === wordProcessed) {
        return true
    }   else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
