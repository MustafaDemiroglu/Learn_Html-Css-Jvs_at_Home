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