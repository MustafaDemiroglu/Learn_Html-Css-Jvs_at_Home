const menu = {
    _meal :'',
    _price : 0,
    set meal(mealToCheck){
        if (typeof mealToCheck === 'string'){
          this._meal = mealToCheck;
        } else {
          console.log('You must assign a food to meal');
        }
    }, 
    set price (priceToCheck){
        if (typeof priceToCheck === 'number'){
          this._price = priceToCheck;
        } else {
          console.log('You must assign a number to price');
        }
    } 
};
menu.meal = 80;
menu.price = 'kebap';
console.log(menu);