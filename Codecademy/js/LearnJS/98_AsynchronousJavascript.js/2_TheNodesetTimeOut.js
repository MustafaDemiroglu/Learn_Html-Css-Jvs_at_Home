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
  