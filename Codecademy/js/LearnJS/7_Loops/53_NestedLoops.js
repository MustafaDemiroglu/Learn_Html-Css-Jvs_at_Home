const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

let bobsFollowers = ['Ayse', 'Hacer', 'Kader', 'Emine'];
let tinasFollowers = ['Kader', 'Mustafa', 'Emine'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
    if (rapperArray[i] === 'Notorious B.I.G.' ) {
       console.log(rapperArray[i]);
       break;
    }
    console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");