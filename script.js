let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors?").toLowerCase();
  while (!validateChoice(choice)) {
    choice = prompt("Invalid choice! enter 'rock' 'paper' or 'scissors'");
  }
  return choice;
}

function validateChoice(choice) {
  const options = ["rock", "paper", "scissors"];
  for (let i = 0; i < options.length; i++) {
    if (choice === options[i]) {
      return true;
    }
  }
  return false;
}

function playRound(humanChoice, computerChoice) {
  let result;
  if (humanChoice === computerChoice) {
    return;
  }
  switch (humanChoice) {
    case "rock":
      result = computerChoice === "scissors" ? "win" : "loss";
      break;
    case "paper":
      result = computerChoice === "rock" ? "win" : "loss";
      break;
    case "scissors":
      result = computerChoice === "paper" ? "win" : "loss";
      break;
  }
  return result;
}

function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  switch (playRound(humanChoice, computerChoice)) {
    case "win":
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
    case "loss":
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      break;
    default:
      console.log(`Draw! both you and the computer selected ${humanChoice}!`);
  }
  console.log(`Player score : ${humanScore}`);
  console.log(`Computer score : ${computerScore}`);
  console.log("Press the button to play again!");
}

playGame();
