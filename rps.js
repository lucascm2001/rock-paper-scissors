
//0 is rock, 1 is paper, 2 is scissors
rps = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
};
rpsReverse = {
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
    if (playerSelection == computerSelection) {
        console.log("It's a tie! Try again.");
        return 0;
    }
    else if (computerSelection - playerSelection == 1 || computerSelection - playerSelection == -2) {
        console.log(`You Lose! ${rpsReverse[computerSelection]} beats ${rpsReverse[playerSelection]}`);
        return -1;
    }
    else if (computerSelection - playerSelection == -1 || computerSelection - playerSelection == 2) {
        console.log(`You Win! ${rpsReverse[playerSelection]} beats ${rpsReverse[computerSelection]}`);
        return 1;
    }
}

function game () {
    pScore = 0;
    cScore = 0;
    while (pScore <= 2 && cScore <= 2) {
        let pSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let score = playRound(rps[pSelection], getComputerChoice());
        if (score == 1) {
            pScore += 1;
        }
        else if (score == -1) {
            cScore += 1;
        }
    }
    if (pScore > 2) {
        console.log("Congrats, you won!");
    }
    else if (cScore > 2) {
        console.log("Oh no, you lost!");
    }
}
console.log(game());