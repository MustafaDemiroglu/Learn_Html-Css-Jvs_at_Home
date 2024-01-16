const plantNeedsWater = function (day){
    if (day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));    // False

console.log(plantNeedsWater('Wednesday'));  // True
