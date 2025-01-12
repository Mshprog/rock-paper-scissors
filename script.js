function getComputerChoice() {
  let max = 4;
  let min = 1;

  let generateRandomNum = Math.floor(Math.random() * (max - min) + 1);

  if (generateRandomNum === 1) {
    return alert("Computer Chose: ROCK");
  }
  if (generateRandomNum === 2) {
    return alert("Computer Chose: PAPER");
  }
  if (generateRandomNum === 3) {
    return alert("Computer Chose: SCISSORS");
  }
}

function getHumanChoice() {
  let humanInput;

  while (
    humanInput != "ROCK" &&
    humanInput != "PAPER" &&
    humanInput != "SCISSORS"
  ) {
    humanInput = prompt("Choose between ROCK, PAPER, or SCISSORS");
  }

  return alert("You Chose : " + humanInput);
}

function playRound() {}

// function playGame() {}
