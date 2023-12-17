// a variable named myAge, and set it equal to your age as a number.
var myAge = 40;

// a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
var earlyYears = 2;

earlyYears = earlyYears * 10.5;

// Accounting for the first two years, subtract 2 from myAge
var laterYears = myAge - 2;

// Calculate dog years for later years by multiplying by 4
// Multiply laterYears by 4 using the multiplication assignment operator
laterYears *= 4;

// to check the values
console.log(`The Early Years is ${earlyYears}.`);
console.log(`The Later Years is ${laterYears}.`);

// Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears

var myAgeInDogYears = earlyYears + laterYears;

// Convert myName to lowercase using the toLowerCase() method
var myName = "Mustafa Demiroglu";
myName = myName.toLowerCase();

// print on console
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is a ${myAgeInDogYears} years old in dog years`
);


