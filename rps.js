
//0 is rock, 1 is paper, 2 is scissors
const rps = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
};
const rpsReverse = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors'
};

function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    return rand;
}

function playRound(playerSelection, computerSelection) {
    //only accepts 0, 1, or 2
    let announce = document.querySelector('#announcement');


    if (playerSelection == computerSelection) {
        announce.textContent = 'It\'s a tie! Try again.';
    }
    else if (computerSelection - playerSelection == 1 || computerSelection - playerSelection == -2) {
        announce.textContent = `You Lose! ${rpsReverse[computerSelection]} beats ${rpsReverse[playerSelection]}`;
        cScore.textContent = Number(cScore.textContent) + 1;
    }
    else if (computerSelection - playerSelection == -1 || computerSelection - playerSelection == 2) {
        announce.textContent = `You Win! ${rpsReverse[playerSelection]} beats ${rpsReverse[computerSelection]}`;
        pScore.textContent = Number(pScore.textContent) + 1;
    }

    if (Number(pScore.textContent) === 5) {
        announce.textContent = 'Congrats, you won!';
    }
    if (Number(cScore.textContent) === 5) {
        announce.textContent = 'Oh no, you lost!';
    }
}

    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', () => playRound(0, getComputerChoice()));

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => playRound(1, getComputerChoice()));

    const scissorButton = document.querySelector('#scissors');
    scissorButton.addEventListener('click', () => playRound(2, getComputerChoice()));

    const pScore = document.querySelector('#pScore');
    const cScore = document.querySelector('#cScore');
