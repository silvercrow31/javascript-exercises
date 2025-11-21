const findTheOldest = function(a) {
    const givenArray = a;
    let oldestAge = 0;
    let oldestPerson = {};
    givenArray.forEach(checkIfOldest);

    return oldestPerson;

    // función anidada que recibe personas (object), calcuula su edad,
    // compara con un valor y actualiza en base a la comparación
    function checkIfOldest(p) {

            let currentPerson = p;
            let currentPersonAge = p.yearOfDeath - p.yearOfBirth;

            if (currentPersonAge > oldestAge) {
                oldestPerson = currentPerson;
                oldestAge = currentPersonAge;
            }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
