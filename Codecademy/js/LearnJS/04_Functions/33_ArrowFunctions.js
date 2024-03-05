const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
};


/*
    Concise Body Arrow Functions
*/
const squareNum = (num) => {
    return num * num;
};

const squareNum2 = num => num * num;

const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;;
