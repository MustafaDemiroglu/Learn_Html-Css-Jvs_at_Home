// to declare a variable for Kelvin
var kelvin =0; 
var celcius;
// convert Kelvin to Celsius by subtracting 273 from the kelvin variable
celcius = kelvin - 273;
// convert celcius to fahrenheit and round the number saved to fahrenheit
var fahrenheit = Math.ceil(celcius * (9/5)+32);
// to print at console
console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${celcius} degrees Celcius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// for more exercise
var newton = Math.floor(celcius*(33/100));
console.log(`The temperature is ${newton} degrees Newton`);
