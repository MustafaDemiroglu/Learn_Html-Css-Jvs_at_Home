const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); // Output: 3
console.log(jumbledNums[3]); // Output: 5

const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
});
console.log(greaterThan1000); // Output: -1

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal == 'elephant';
}); 
console.log(foundAnimal);
console.log(animals[foundAnimal]);

const startsWithS = animals.findIndex(animal => {
  return animal[0] == 's';
}); 
console.log(startsWithS);
console.log(animals[startsWithS]);