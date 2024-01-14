let raceNumber = Math.floor(Math.random() * 1000);

var isEarly = false;

var age = 17;

if (age >= 18 && isEarly ) {
     raceNumber += 1000;
  }  

if(age >= 18 && isEarly) {
     console.log("Your race number is " +raceNumber +' and you will race at 09.30 am.');
} else if (age >= 18 && !isEarly) {
      console.log("Your race number is " +raceNumber +' and you will race at 11.00 am.'); 
} else if (age < 18) {
      console.log("Your race number is " + raceNumber +' and you will race at 12.30 pm.'); 
} else {
      console.log("You  should see the registration desk"); 
}