function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * Math.floor(choices.length));
  return choices[index];
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

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