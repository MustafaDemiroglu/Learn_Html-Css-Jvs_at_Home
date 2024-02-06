const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();    // deletes first Element
console.log(groceryList);

groceryList.unshift('popcorn'); // adds neu as firt element
console.log(groceryList);

console.log(groceryList.slice(1,4)); //  Elemnts from 1 to 4 are written
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);