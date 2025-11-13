const fibonacci = function(a) {
    const sequence = [1, 1, 2, 3, 5, 8];
    const givenNumber = Number(a);
    const index = givenNumber-1;        // this is done to comply with zero indexing of arrays


    if (givenNumber === 0 ) {
        return 0;            // 0th fibonacci is 0
    } else if (givenNumber < 0) {
        return "OOPS";       // doesn't accept negatives
    }

    if (index < sequence.length) {
        // returns fibonacci if within the given sequence
        return sequence[index];
        
    } else if (index === sequence.length) {
        return sequence.at(-1) + sequence.at(-2);

        // calculates if any of the components of the fibonacci is not avaliable on given sequence
    } else {
        while (index > sequence.length) {
            newSequenceItem = sequence.at(-1) + sequence.at(-2);
            sequence.push(newSequenceItem);
            }
        return sequence.at(-1) + sequence.at(-2);

    }


};

// Do not edit below this line
module.exports = fibonacci;
