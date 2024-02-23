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
    },
    get todaysSpecial() {
        if (this._meal && this._price){
          return `Today's Special is ${this._meal} for $${this._price}!`;
        } else {
          return 'Meal or price was not set correctly!.';
        }
      } 
  };
  menu.meal = 80;
  menu.price = 'kebap';
  console.log(menu);
  console.log(menu.todaysSpecial);

/*
You must assign a food to meal
You must assign a number to price
{
  _meal: '',
  _price: 0,
  meal: [Setter],
  price: [Setter],
  todaysSpecial: [Getter]
}
Meal or price was not set correctly!.
*/

menu.meal = 'Adana Kebap';
menu.price = 30;
console.log(menu);
console.log(menu.todaysSpecial);
/* 
{
  _meal: 'Adana Kebap',
  _price: 30,
  meal: [Setter],
  price: [Setter],
  todaysSpecial: [Getter]
}
Today's Special is Adana Kebap for $30!
*/