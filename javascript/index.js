'use strict'
const NUM_OF_ROUNDS = 5;
let playerScore = 0;
let computerScore = 0;

document.getElementById('playerRock').addEventListener('click', setPlayerSelection)
document.getElementById('playerPaper').addEventListener('click', setPlayerSelection)
document.getElementById('playerScissors').addEventListener('click', setPlayerSelection)

function playRound(playerSelection, computerSelection) {
    let result = '';

    //If computer Choice equals Player Choice
    if (computerSelection === playerSelection)
        result = 'It is a tie';
    //When player chooses Rock
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            result = 'User wins, Rock beats Scissors';
        }
        else if (computerSelection === 'paper') {
            computerScore++;
            result = 'Computer wins, Paper beats Rock';
        }
    }
    //When player chooses Scissors
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            result = 'User wins, Scissors beats Paper';
        }
        else if (computerSelection === 'rock') {
            computerScore++;
            result = 'Computer wins, Rock beats Scissors';
        }
    }
    //When player chooses Paper
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            result = 'User wins, Paper beats Rock';
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            result = 'Computer wins, Scissors beats Paper';
        }
    }
    document.getElementById('roundResult').innerHTML = result;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    return [playerScore, computerScore];
}
//Function to get computerChoice randomly
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0)
        return 'rock';
    else if (computerChoice === 1)
        return 'scissors';
    else
        return 'paper';
}
//Play round until Computer or Player reach 5 points
// function game(playerSelection, computerSelection) {
//     let scores = playRound(playerSelection, computerSelection);
//     if (playerScore === NUM_OF_ROUNDS)
//         return 'Congratulations, you won';
//     else
//         return 'You lost, Computer won';
// }
// function gameOver() {
//     return playerScore === 5 || computerScore === 5 
// }
function setPlayerSelection(event) {
    const playerSelection = event.target.value;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    //gameOver();

    //console.log(playRound(playerSelection, computerSelection));
}
