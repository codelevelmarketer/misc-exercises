// SELECTORS
const buttons = document.querySelectorAll("button");
const playerIcon = document.getElementById("player-icon");
const computerIcon = document.getElementById("computer-icon");
const playerChoiceText = document.getElementById("player-choice-text");
const computerChoiceText = document.getElementById("computer-choice-text");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const roundResultText = document.getElementById("round-result-text");
const selectHeader = document.getElementById("select-header");
const playerButtons = document.getElementById("player-buttons");

//New Game Button
const newBtn = document.createElement("button");
const newBtnText = document.createTextNode("New Game");
newBtn.appendChild(newBtnText);
newBtn.classList.add("btn-icon", "new");

// Game variables
let computerChoice = null;
let playerChoice = null;
let computerScore = 0;
let playerScore = 0;
let outcome = null;

// EVENT LISTENERS

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove profile icons
    playerIcon.removeChild(playerIcon.childNodes[0]);
    computerIcon.removeChild(computerIcon.childNodes[0]);
    // Player and Computer Selections
    computerSelection();
    playerSelection(button.id);
    // Get round results
    roundResult(playerChoice, computerChoice);
    // Display round results
    gameResult();
    // Refactoring
    playerSelect(button.id);
    computerDisplay(computerChoice);
  });
});

// FUNCTIONS

const playerSelection = (id) => {
  playerChoice = id;
};

const computerSelection = () => {
  let choice = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  computerChoice = choice[index];
};

const roundResult = (playerChoice, computerChoice) => {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore++;
    outcome = "You win this round";
  } else if (
    (playerChoice === "scissors" && computerChoice === "rock") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "rock" && computerChoice === "paper")
  ) {
    computerScore++;
    outcome = "Computer wins this round";
  } else {
    outcome = "Draw";
  }
};

const playerSelect = (id) => {
  if (playerIcon.childNodes.length > 0) {
    playerIcon.removeChild(playerIcon.childNodes[0]);
    playerChoiceText.innerText = "";
  }
  if (id === "rock") {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-hand-rock", "fadein");
    playerIcon.appendChild(icon);
    playerChoiceText.innerText = "Rock";
    playerScoreDisplay.innerText = playerScore;
  }
  if (id === "paper") {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-hand-paper", "fadein");
    playerIcon.appendChild(icon);
    playerChoiceText.innerText = "Paper";
    playerScoreDisplay.innerText = playerScore;
  }
  if (id === "scissors") {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-hand-scissors", "fadein");
    playerIcon.appendChild(icon);
    playerChoiceText.innerText = "Scissors";
    playerScoreDisplay.innerText = playerScore;
  }
};

const computerDisplay = (id) => {
  if (computerIcon.childNodes.length > 0) {
    computerIcon.removeChild(computerIcon.childNodes[0]);
    computerChoiceText.innerText = "";
  }
  if (id === "rock") {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-hand-rock", "fadein");
    computerIcon.appendChild(icon);
    computerChoiceText.innerText = "Rock";
    computerScoreDisplay.innerText = computerScore;
  }
  if (id === "paper") {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-hand-paper", "fadein");
    computerIcon.appendChild(icon);
    computerChoiceText.innerText = "Paper";
    computerScoreDisplay.innerText = computerScore;
  }
  if (id === "scissors") {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-hand-scissors", "fadein");
    computerIcon.appendChild(icon);
    computerChoiceText.innerText = "Scissors";
    computerScoreDisplay.innerText = computerScore;
  }
};

const gameResult = () => {
  roundResultText.innerText = `${outcome}`;
  if (computerScore === 5 && computerScore > playerScore) {
    outcome = "Computer wins the Game!";
    roundResultText.innerText = `${outcome}`;
    gameReset();
  }
  if (playerScore === 5 && computerScore < playerScore) {
    outcome = "You win the Game!";
    roundResultText.innerText = `${outcome}`;
    gameReset();
  }
};

const gameReset = () => {
  newBtn.style.display = "flex";
  buttons.forEach((button) => {
    button.style.display = "none";
  });
  selectHeader.textContent = "Start a new game";
  playerButtons.appendChild(newBtn);
  newBtn.addEventListener("click", gameStart);
};

const gameStart = () => {
  // Hide new game button
  newBtn.style.display = "none";
  // Show game buttons
  buttons.forEach((button) => {
    button.style.display = "flex";
  });
  // Reset game variables
  computerChoice = null;
  playerChoice = null;
  computerScore = 0;
  playerScore = 0;
  outcome = null;
  // Game Text
  selectHeader.textContent = "Select Your Weapon";
  roundResultText.innerText = "First to 5 wins";
  computerScoreDisplay.innerText = computerScore;
  playerScoreDisplay.innerText = playerScore;
  playerChoiceText.innerText = "Human Player";
  computerChoiceText.innerText = "Robot Player";
  // Computer Icon
  computerIcon.removeChild(computerIcon.childNodes[0]);
  const compIcon = document.createElement("i");
  compIcon.classList.add("fas", "fa-robot", "fadein");
  compIcon.style.animation = "fadein .5s";
  computerIcon.appendChild(compIcon);
  // Player Icon
  playerIcon.removeChild(playerIcon.childNodes[0]);
  const playIcon = document.createElement("i");
  playIcon.classList.add("fas", "fa-user", "fadein");
  playIcon.style.animation = "fadein .5s";
  playerIcon.appendChild(playIcon);
};
