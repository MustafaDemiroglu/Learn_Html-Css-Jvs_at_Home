console.log('Hello! Wellcome to our rock, paper or scissors Game! Fell free to enjoy !!!');
console.log("");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
      return userInput;
    } else {
      return "Error, Mistake";
    }
};

function getComputerChoice() {
  let temp = Math.floor(Math.random() * 3);
  if(temp == 0) {
      return "rock";
    } else if (temp == 1)  {
      return "paper";
    } else if (temp == 2) {
      return "scissors";
    } else {
      return "Kestane";
    }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice == "bomb"){
      return "Programmierer win always";
  } else if (userChoice == "Error, Mistake"){
      return "User has given an unacceptable choice. That is why, game is cancelled. Please try again later with a right choice ";
    } else {
        if(userChoice == computerChoice) {
        return "tie";
      } else {
        if(userChoice == "rock") {
          if(computerChoice == "paper") {
            return " computer won";
          } else {
              return "user won";
          }
        }
        if(userChoice == "paper") {
          if(computerChoice == "scissors") {
            return " computer won";
          } else {
              return "user won";
          }
        }
        if(userChoice == "scissors") {
          if(computerChoice == "rock") {
            return " computer won";
          } else {
              return "user won";
          }
        }
    }
  }
}

function playGame(){
  let userChoice = getUserChoice("rock");
  console.log("userChoice : " + userChoice)
  let computerChoice = getComputerChoice();
  console.log("computerChoice : " + computerChoice);
  console.log("#####################");
  console.log("Who has won the game : ")
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
