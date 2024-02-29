const prom2 = new Promise((resolve, reject) => {
    resolve('Yay!');
  });  
const handleSuccess2 = (resolvedValue) => {
    console.log(resolvedValue);
};  
prom.then(handleSuccess); // Prints: 'Yay!'

let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
});
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};
const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};
prom.then(handleSuccess, handleFailure);

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess3 = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure3 = (rejectReason) => {
    console.log(rejectReason);
};

prom.checkInventory(order).then(handleSuccess3, handleFailure3);