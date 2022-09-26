const add = function(a, b) {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
};

const sum = function(nums) {
	const finalSum = nums.reduce(
    (a, b) => a + b, 0
  );
  return finalSum;
};

const multiply = function(nums) {
  const finalSum = nums.reduce(
    (a, b) => a * b, 1
    );
    return finalSum;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (+num === 0 || +num === 1) {
    return 1;
  }
  let finalSum = num;
  while (num > 2) {
    finalSum *= (num - 1);
    num--;
  }
  return finalSum;
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
