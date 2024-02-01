function getSleepHours(day){
    day = day.toLowerCase();
    switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      console.log('wrong day is written');
      break;
  }
  }
  
  function getActualSleepHours(){
    return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday"); 
  }
  
  function getIdealSleepHours(ideal){
    return ideal*7;
  }
  
  function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    console.log("actualSleepHours : " + actualSleepHours);
    console.log("idealSleepHours : " + idealSleepHours);
    console.log("Did user sleep well this week ? : ")
    if(actualSleepHours == idealSleepHours) {
      console.log("Woww and how !! the user got this week already the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("Actually yes and also the user got more sleep than needed.");
    } else if (actualSleepHours < idealSleepHours) {
      console.log("Unfortunatelly not, the user should get some rest.");
    }
  }
  
  calculateSleepDebt();
  