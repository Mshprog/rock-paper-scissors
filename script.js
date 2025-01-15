let humanScore = 0; //For storing player score
let computerScore = 0; // For storing computer score

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  let max = 4;
  let min = 1;

  let generateRandomNum = Math.floor(Math.random() * (max - min) + 1);

  if (generateRandomNum === 1) {
    alert("Computer Chose: ROCK");
    return "ROCK";
  }
  if (generateRandomNum === 2) {
    alert("Computer Chose: PAPER");
    return "PAPER";
  }
  if (generateRandomNum === 3) {
    alert("Computer Chose: SCISSORS");
    return "SCISSORS";
  }
}

function getHumanChoice() {
  let humanInput;

  while (
    humanInput != "ROCK" &&
    humanInput != "PAPER" &&
    humanInput != "SCISSORS"
  ) {
    humanInput = prompt(
      "Choose between ROCK, PAPER, or SCISSORS"
    ).toUpperCase();

    if (humanInput === null) {
      return;
    }
  }
  alert("You Chose : " + humanInput);
  return humanInput;
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "ROCK":
      if (computerChoice === "ROCK") {
        alert("It's a draw!");
      } else if (computerChoice === "PAPER") {
        alert("You lose! Paper beats Rock");
        computerScore++;
        alert("Player:" + humanScore + " " + " Computer:" + computerScore);
      } else if (computerChoice === "SCISSORS") {
        alert("You win! Rock beats Scissors");
        humanScore++;
        alert("Player:" + humanScore + " " + " Computer:" + computerScore);
      }
      break;

    case "PAPER":
      if (computerChoice === "PAPER") {
        alert("It's a draw!");
      } else if (computerChoice === "SCISSORS") {
        alert("You lose! Scissors beats Paper ");
        computerScore++;
        alert("Player:" + humanScore + " " + " Computer:" + computerScore);
      } else if (computerChoice === "ROCK") {
        alert("You win! Paper beats Rock");
        humanScore++;
        alert("Player:" + humanScore + " " + " Computer:" + computerScore);
      }
      break;
    case "SCISSORS":
      if (computerChoice === "SCISSORS") {
        alert("It's a draw!");
      } else if (computerChoice === "ROCK") {
        alert("You lose! Rock beats Scissors");
        alert("Player:" + humanScore + " " + " Computer:" + computerScore);
        return computerScore++;
      } else if (computerChoice === "PAPER") {
        alert("You win! Scissors beats Paper");
        humanScore++;
        alert("Player:" + humanScore + " " + " Computer:" + computerScore);
      }
      break;
  }
}

playRound(humanSelection, computerSelection);

// function playGame() {}
