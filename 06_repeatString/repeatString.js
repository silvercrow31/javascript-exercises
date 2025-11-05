const repeatString = function(a,b) {
    
    const leString = a;
    const numOfTimes = b;

    if (b < 0) {
        return "ERROR"
    } else if (b == 0) {
        return ""
    } else {

        let newString = "";
        let counter = 0;
        while (counter < numOfTimes) {
            counter++;
            newString = newString + leString;
        }        
        return newString
    }
};


// Do not edit below this line
module.exports = repeatString;
