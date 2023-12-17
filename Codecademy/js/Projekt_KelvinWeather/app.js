// to declare a variable for Kelvin
var kelvin = 293; 
var celcius;
// convert Kelvin to Celsius by subtracting 273 from the kelvin variable
celcius = kelvin - 273;
// convert celcius to fahrenheit and round the number saved to fahrenheit
var fahrenheit = Math.ceil(celcius * (9/5)+32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);