const reverseString = function(a) {
    let leString = a;
    let newString = "";

    while (leString) {
        newString = newString.concat(leString.at(-1));
        leString = leString.slice(0,-1);
    }
    return newString

};

// Do not edit below this line
module.exports = reverseString;
