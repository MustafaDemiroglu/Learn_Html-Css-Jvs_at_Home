prom
 .then((resolvedValue) => {
   console.log(resolvedValue);
})
.then(null, (rejectionReason) => {
   console.log(rejectionReason);
});

prom
 .then((resolvedValue) => {
   console.log(resolvedValue);
 })
 .catch((rejectionReason) => {
   console.log(rejectionReason);
});

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order).then(handleSuccess).catch(handleFailure);