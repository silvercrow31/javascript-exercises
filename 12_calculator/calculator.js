const add = function(firstNumber, secondNumber) {
	return (firstNumber + secondNumber)
};

const subtract = function(firstNumber, secondNumber) {
	return (firstNumber - secondNumber)
};

const sum = function(a) {
  const array = a
	let sumToReturn = 0
  for (i = 0; i < array.length; i++) {
    sumToReturn=sumToReturn + array.at(i)
  }
  return sumToReturn
};


const multiply = function(a) {
  const array = a
  let multiplyToReturn = 1
  for (i = 0; i < array.length; i++) {
    multiplyToReturn=multiplyToReturn * array.at(i)
  }  return multiplyToReturn
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
