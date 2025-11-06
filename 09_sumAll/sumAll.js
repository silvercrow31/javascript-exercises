const sumAll = function(a,b) {
    
    // error check before anything
    if (a < 0 
        || b < 0
        || !Number.isInteger(a)
        || !Number.isInteger(b))
        {
        return "ERROR"
    }
    // sets variables
    let alpha = a;
    let omega = b;

    // checks if first number is higher than the second. defines alpha and omega accordingly
    if (alpha > omega) {
        alpha = b; omega = a
        }
    
    // sums the numbers
    let sum = alpha;
    for (let myNumber = alpha; myNumber != omega; sum = sum + myNumber) {
        myNumber++;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
