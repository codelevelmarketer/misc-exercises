/* Problem - Game: Rock Paper Scissors */

// Players need to be able to select a choice, compete against a computer's choice, and see the winner of each round, as well as the game.

/* Plan */

/* Variables */
// Player choice
// Computer choice
// Round result
// Game result

/* Input Logic */
// Choices must be case insensitive

/* Functions */
// Game needs to be initialized with 5 rounds
// Player needs to be prompted for his/her choice
// Computer needs to make a choice
// A result is declared at the end of each round
// A result is declared at the end of each game

/* Outputs */
// Player needs to see the computer's choice
// Player needs to see the outcome of the round
// Player needs to see the outcome of the game

// Pseudo Code

/* When a player opens the page
    they will be prompted to start a new game
      If they accept
        They will be prompted for a choice
        When they make a choice,
        The computer will also make a choice,
        The computer and player choices will be compared
        The results will be displayed to the user
        And the next round will start
          If it is the 5th round
          A winner will be declared
*/

// Code

let playerChoice = "",
  computerChoice = "",
  playerScore = 0,
  computerScore = 0,
  gameResult;

function computerPlay() {
  let num;
  num = Math.floor(Math.random() * 3 + 1);
  computerChoice = num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors";
}

function playerTurn() {
  let choice = prompt("Rock, Paper, Scissors");
  playerChoice = choice[0].toUpperCase() + choice.toLowerCase().slice(1);
}

function playRound(playerSelection, computerSelection) {
  computerPlay();
  playerTurn();
  let result;
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice == "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    result = "You win!";
  } else if (
    (playerChoice === "Scissors" && computerChoice === "Rock") ||
    (playerChoice === "Paper" && computerChoice == "Scissors") ||
    (playerChoice === "Rock" && computerChoice === "Paper")
  ) {
    result = "You lose!";
  } else {
    result = "Draw.";
  }
  if (result === "You win!") {
    playerScore = ++playerScore;
  } else if (result === "You lose!") {
    computerScore = ++computerScore;
  }
  alert(
    (gameResult = `You: ${playerChoice}. Computer: ${computerChoice}. ${result}`)
  );
}

function game() {
  for (let i = 1; i <= 2; i++) {
    playRound();
    alert(`Your score: ${playerScore}. Computer score: ${computerScore}`);
    if (i === 2) {
      if (playerScore > computerScore) {
        gameResult = `You win! ${playerScore} vs ${computerScore}`;
      } else if (playerScore < computerScore) {
        gameResult = `You lose! ${playerScore} vs ${computerScore}`;
      } else {
        gameResult = `Draw! ${playerScore} vs ${computerScore}`;
      }
      alert(`End of Game! ${gameResult}`);
    }
  }
}
game();
