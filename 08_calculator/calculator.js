const add = function(a,b) {
  //adds a and b
  return a + b;
};

const subtract = function(a, b) {
	//subtracts b from a
  return a - b;
};

const sum = function(array) {
	// sums an array of numbers
  return array.reduce((sum, value) => {
    return sum += value;
  }, 0)
};

const multiply = function(array) {
  // multiplies an array of numbers in each other
  return array.reduce((result, value) => result * value, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
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
