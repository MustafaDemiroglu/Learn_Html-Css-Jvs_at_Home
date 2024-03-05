const numbers = [1, 2, 3, 4, 5]; 
const bigNumbers2 = numbers.map(number => {
  return number * 10;
});
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers2); // Output: [10, 20, 30, 40, 50]

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal =>{
  return animal.charAt(0);
});
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number =>{
  return number/100;
});
console.log(smallNumbers);