const removeFromArray = function(a,...b) {
    const array = a;
    const itemsToRemove = b;
    let newArray= [];
    array.forEach(myFunction)
    
    return newArray
    
    function myFunction(value){
        if (!itemsToRemove.includes(value)) {
            newArray = newArray.concat(value)
        }
    }
    
};

// Do not edit below this line
module.exports = removeFromArray;
