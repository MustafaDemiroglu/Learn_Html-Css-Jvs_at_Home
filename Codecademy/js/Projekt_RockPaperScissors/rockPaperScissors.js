console.log('hi');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      return "Error, Mistake";
    }
};

function getComputerChoice() {
  let temp = Math.floor(0,2);

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

console.log(getComputerChoice());
