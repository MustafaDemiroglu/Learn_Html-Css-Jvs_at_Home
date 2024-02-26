const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);

const executorFunction2 = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
   }
   const myFirstPromise2 = new Promise(executorFunction2);
   