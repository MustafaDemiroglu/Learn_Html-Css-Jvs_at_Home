var userName;

userName ? console.log('Hello, '+ userName) : console.log('Hello!'); 

var userQuestion;
console.log('Wie kan Ihnen behilflich sein? ' + userName);

var randomNumber = Math.floor(Math.random() * 8) ;
console.log('random number : ' + randomNumber);
var eightBall;

if (randomNumber == 0) {
  eightBall = 'It is certain';
} else if (randomNumber == 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber == 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber == 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber == 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber == 5) {
  eightBall = 'My sources say no';
} else if (randomNumber == 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber == 7) {
  eightBall = 'Please not again';
} else if (randomNumber == 8) {
  eightBall = 'Signs point to yes';
}
console.log(eightBall);