const delayedHello = () => {
    console.log('Hi! This is an asynchronous greeting!');
  };
  
setTimeout(delayedHello, 2000);

const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(( ) => {resolve('I resolved!')}, 1000);
    });
};
  
const prom = returnPromiseFunction();
  

console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log('Yay! Coding is so fun!!');
};
setTimeout(usingSTO, 2000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");


/*
$ node app.js
This is the first line of code in app.js.
This is the last line of code in app.js.
Yay! Coding is so fun!!
*/