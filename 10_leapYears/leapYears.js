const leapYears = function(a) {

    // condition 1: divisible by 4
    const divBy4 = (a % 4 == 0)

    // conditions 2 and 3: divisible by 100 and 400
    const divBy100 = (a % 100 === 0)
    const divBy400 = (a % 400 === 0)

    if(     divBy4 && !divBy100
        ||  divBy4 && divBy100 && divBy400) {
            return true
        } else {
            return false
        }   
    

};

// Do not edit below this line
module.exports = leapYears;
