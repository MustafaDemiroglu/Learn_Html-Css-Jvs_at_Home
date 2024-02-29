returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})


const {checkInventory, processPayment, shipOrder} = require('./library2.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray);
        })
            .then((resolvedValueArray) => {
                return shipOrder(resolvedValueArray);
                })
                    .then((successMessage) => {
                        console.log(successMessage);
                    });