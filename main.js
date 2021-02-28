const CHOICES = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  const index = Math.floor(Math.random() * Math.floor(CHOICES.length));
  return CHOICES[index];
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  if (!CHOICES.includes(playerSelection)) {
    return null;
  }

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      return 'You lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      return 'You win! Rock beats Scissors'
    }
  }

  if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      return 'You win! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      return 'You lose! Scissors beats Paper';
    }    
  }

  if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      return 'You lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      return 'You win! Scissors beats Paper';
    }  
  }

  return 'Draw';
}

const ROUNDS = 5;

function game() {
  let playerScores = 0;
  let computerScores = 0;

  let round = 0;
  while (round < ROUNDS) {
    const playerSelection = prompt("Your choice: 'rock', 'paper' or 'scissors'");
    const result = playRound(playerSelection, computerPlay());

    if (result) {
      if (result.includes('win')) {
        playerScores++;
      } else if (result.includes('lose')){
        computerScores++;
      }
  
      console.log(`Round ${round + 1}: ` + result);
      console.log(`${playerScores} - ${computerScores}`);
      round++;
    }
  }

  if (playerScores > computerScores) {
    console.log('You beat computer!');
  } else if (playerScores < computerScores) {
    console.log('You lose computer!');
  } else {
    console.log('No winner');
  }

  console.log('Thank you for playing!');
}

game();