// DOM Variables

const buttons = document.querySelectorAll("button");
const playerScoreText = document.querySelector(".player-points");
const computerScoreText = document.querySelector(".computer-points");
const resultOutcome = document.querySelector(".results");

// Global Variables

let computerChoice,
  playerChoice,
  resultText,
  gameOver = false,
  playerScore = 0,
  computerScore = 0;

// Game Functions

function playerTurn(choice) {
  if (gameOver === true) {
    alert("Restarting the game!");
    startGame();
  } else {
    computerPlay();
    playRound(playerChoice, computerChoice);
  }
}

function computerPlay() {
  let num = Math.floor(Math.random() * 3 + 1);
  let computerSelection = num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors";
  computerChoice = computerSelection;
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice == "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    result = "Won";
  } else if (
    (playerChoice === "Scissors" && computerChoice === "Rock") ||
    (playerChoice === "Paper" && computerChoice == "Scissors") ||
    (playerChoice === "Rock" && computerChoice === "Paper")
  ) {
    result = "Loss";
  } else {
    result = "Draw";
  }
  resultText =
    result === "Won"
      ? `${playerSelection} beats ${computerSelection}. You win!`
      : result === "Loss"
      ? `${playerSelection} losses to ${computerSelection}. You lose.`
      : `You both picked ${playerSelection}. Draw.`;
  resultOutcome.textContent = resultText;
  if (result === "Won") {
    playerScoreText.textContent = ++playerScore;
  } else if (result === "Loss") {
    computerScoreText.textContent = ++computerScore;
  }
  checkWinner();
}

function startGame() {
  playerChoice = "";
  computerChoice = "";
  playerScore = 0;
  computerScore = 0;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  resultOutcome.textContent = "Pick an option to start!";
  gameOver = false;
  console.log("Game Restarted");
}

function checkWinner() {
  if (playerScore === 5) {
    gameOver = true;
    resultOutcome.textContent = "You won the game. Congrats!";
  } else if (computerScore === 5) {
    gameOver = true;
  }
}

// Event listeners

buttons.forEach((button) => {
  playerChoice = "";
  button.addEventListener("click", () => {
    playerChoice =
      button.id === "btn-rock"
        ? "Rock"
        : button.id === "btn-paper"
        ? "Paper"
        : button.id === "btn-scissors"
        ? "Scissors"
        : "Restart";
    if (playerChoice === "Restart") {
      startGame();
    } else {
      playerTurn(playerChoice);
    }
  });
});

buttons.forEach;
