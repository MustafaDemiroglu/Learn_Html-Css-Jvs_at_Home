const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code beansbelow:
async function makeBeans() {
  const type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
};

makeBeans();
