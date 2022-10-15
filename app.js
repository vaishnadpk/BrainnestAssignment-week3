let playerGameCount = 5;
let computerGameCount = 5;
let tieCount = 0;
const randomPick = ["rock", "paper", "scissors"];

function computerPlay() {
  return randomPick[Math.floor(Math.random() * randomPick.length)];
}
function playRound(playSelection, computerSelection) {
  if (playSelection === computerSelection) {
    tieCount++;
    return `You have a tie.play again..!!!`;
  } else if (playSelection == "rock" && computerSelection == "scissors") {
    return `"You Win! Rock beats Scissors"`;
  } else if (playSelection == "paper" && computerSelection == "rock") {
    return `"You Win! Paper beats Rock"`;
  } else if (playSelection == "scissors" && computerSelection == "paper") {
    return `"You Win! Scissors beats Paper"`;
  } else {
    playerGameCount--;
    return `You lose! ${computerSelection} beats ${playSelection}`;
  }
}

function game() {
  alert(
    "Start the Game by selecting rock,paper,or scissors.The Rules are:Rock beats Scissors,Paper beats Rock and Scissors beats Paper"
  );
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt(
      `Pick anyone among : 'Rock ⛰ , Paper 📄 , Scissors ✂️ `
    );
    if (
      playerSelection === null ||
      !randomPick.includes(playerSelection.trim().toLowerCase())
    ) {
      alert("Its too bad.Play the game");
      i--;
    } else {
      playerSelection = playerSelection.trim().toLowerCase();
      let computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
    }
  }

  let playerWinCount = playerGameCount - tieCount;
  let computerWinCount = computerGameCount - tieCount - playerWinCount;

  if (playerWinCount > computerWinCount) {
    console.log("Player wins");
  } else if (playerWinCount === computerWinCount) {
    console.log("Its a Tie");
  } else {
    console.log("Computer wins");
  }
}
