const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    }
};
goat.makeSound(); // Prints baaa

const goat2 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(dietType);
    }
};
goat2.diet(); 
// Output will be "ReferenceError: dietType is not defined"

const goat3 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
}; 
goat3.diet(); 
// Output: herbivore

const robot = {
    model : '1E78V2',
    energyLevel : '100',
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
      }
};
console.log(robot.provideInfo());