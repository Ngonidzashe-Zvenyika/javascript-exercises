const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = array.reduce((total, element) => {
    total += element;
    return total;
  }, 0);
  return sum;
};

const multiply = function(array) {
	let sum = array.reduce((total, element) => {
    total *= element;
    return total;
  }, 1)
  return sum;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
	for (let index = a; index > 0; index--) {
      total *= index;
  }
  return total;
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
