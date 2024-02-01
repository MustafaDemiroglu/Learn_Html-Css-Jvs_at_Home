console.log('Hello! Wellcome to our rock, paper or scissors Game! Fell free to enjoy !!!');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
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

