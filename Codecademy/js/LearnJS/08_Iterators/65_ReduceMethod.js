const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce; // Output: 17

const summedNums2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums2); // Output: 117

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue)
  return accumulator + currentValue
}, 10,15,6)
console.log(newSum);

/*
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26
*/