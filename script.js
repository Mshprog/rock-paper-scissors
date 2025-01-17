let humanScore = 0; //For storing player score
let computerScore = 0; // For storing computer score

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
        humanScore += 0;
        computerScore += 0;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      } else if (computerChoice === "PAPER") {
        alert("You lose! Paper beats Rock");
        computerScore++;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      } else if (computerChoice === "SCISSORS") {
        alert("You win! Rock beats Scissors");
        humanScore++;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      }
      break;

    case "PAPER":
      if (computerChoice === "PAPER") {
        alert("It's a draw!");
        humanScore += 0;
        computerScore += 0;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      } else if (computerChoice === "SCISSORS") {
        alert("You lose! Scissors beats Paper ");
        computerScore++;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      } else if (computerChoice === "ROCK") {
        alert("You win! Paper beats Rock");
        humanScore++;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      }
      break;
    case "SCISSORS":
      if (computerChoice === "SCISSORS") {
        alert("It's a draw!");
        humanScore += 0;
        computerScore += 0;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      } else if (computerChoice === "ROCK") {
        alert("You lose! Rock beats Scissors");
        computerScore++;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      } else if (computerChoice === "PAPER") {
        alert("You win! Scissors beats Paper");
        humanScore++;
        alert("Player : " + humanScore + " " + " Computer : " + computerScore);
      }
      break;
  }
}
function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

function getWinner() {
  if (humanScore > computerScore) {
    alert("Player got more points than Computer in 5 rounds! Player Wins!");
  } else if (computerScore > humanScore) {
    alert("Computer got more points than Player in 5 rounds! Computer Wins!");
  } else {
    alert("It's a tie!");
  }
}
