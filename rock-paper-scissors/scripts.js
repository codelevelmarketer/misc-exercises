// Global Game Variables

let playerChoice,
  computerChoice,
  playerPoints = 0,
  computerPoints = 0,
  currentRound = 0;

// DOM Variables
const rockbtn = document.querySelector("#btn-rock");
const paperbtn = document.querySelector("#btn-paper");
const scissorsbtn = document.querySelector("#btn-scissors");
const buttons = document.querySelectorAll("button");
const computerResult = document.querySelector("#computer-score");
const playerResult = document.querySelector("#player-score");
const computerSelection = document.querySelector("#computer-selection");
const playerSelection = document.querySelector("#player-selection");
const roundText = document.querySelector(".round-text");
const playerScoreText = document.querySelector(".player-score-text");
const computerScoreText = document.querySelector(".computer-score-text");
const roundResult = document.querySelector(".round-result");
const computerPointsResult = document.querySelector("#computer-score");
const playerPointsResult = document.querySelector("#player-score");
const roundTracker = document.querySelector(".round-tracker");

roundText.style.display = "none";
playerScoreText.style.display = "none";
computerScoreText.style.display = "none";

// Game functions
function computerPlay() {
  let num = Math.floor(Math.random() * 3 + 1);
  computerChoice = num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors";
  computerSelection.innerHTML = `${computerChoice}`;
  return computerChoice;
}

// Event Handlers

function playerTurn(choice) {
  if (choice == "btn-rock") {
    playerChoice = "Rock";
  } else if (choice == "btn-paper") {
    playerChoice = "Paper";
  } else {
    playerChoice = "Scissors";
  }
  playerSelection.innerHTML = `${playerChoice}`;
  computerPlay();
  roundText.style.display = "flex";
  playerScoreText.style.display = "flex";
  computerScoreText.style.display = "flex";
  playRound(playerChoice, computerChoice);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerTurn(button.id);
  });
});

function playRound(playerSelection, computerSelection) {
  let result;
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice == "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    result = "You won this round!";
  } else if (
    (playerChoice === "Scissors" && computerChoice === "Rock") ||
    (playerChoice === "Paper" && computerChoice == "Scissors") ||
    (playerChoice === "Rock" && computerChoice === "Paper")
  ) {
    result = "You lost this round";
  } else {
    result = "Draw.";
  }
  if (result === "You won this round!") {
    playerPoints = ++playerPoints;
  } else if (result === "You lost this round") {
    computerPoints = ++computerPoints;
  }
  computerPointsResult.textContent = `${computerPoints}`;
  playerPointsResult.textContent = `${playerPoints}`;
  roundResult.innerHTML = `${result}`;
  currentRound = ++currentRound;
  if (currentRound === 5) {
    gameCheck(playerPoints, computerPoints);
  }
}

function gameCheck(playerPoints, computerPoints) {
  if (currentRound === 5) {
    if (playerPoints > computerPoints) {
      roundTracker.classList.add("round-tracker-won");
      alert(`You won ${playerPoints} - ${computerPoints}`);
    } else if (playerPoints < computerPoints) {
      roundTracker.classList.add("round-tracker-loss");
      alert(`You lost ${playerPoints} - ${computerPoints}`);
    } else {
      roundTracker.classList.add("round-tracker-draw");
      alert(
        `Draw! You scored ${playerPoints},the computer scored ${computerPoints}`
      );
    }
  }
}

function gameReset() {
  roundText.style.display = "none";
  playerScoreText.style.display = "none";
  computerScoreText.style.display = "none";
  computerPoints = 0;
  playerPoints = 0;
  roundTracker.classList.remove("round-tracker-draw");
  roundTracker.classList.remove("round-tracker-won");
  roundTracker.classList.remove("round-tracker-loss");
  computerPointsResult.textContent = `${computerPoints}`;
  playerPointsResult.textContent = `${playerPoints}`;
  currentRound = 0;
}
