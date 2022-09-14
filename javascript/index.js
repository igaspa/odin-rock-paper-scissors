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

//Function that gets player and computer choices and plays game until one reaches 5
function setPlayerSelection(event) {
    let playerSelection = event.target.value;
    let computerSelection = getComputerChoice();
    function game() {
        let p1Score = 0;
        let p2Score = 0;
        [p1Score, p2Score] = playRound(playerSelection, computerSelection)
        if (p1Score === 5 || p2Score === 5) {
            document.getElementById('playerRock').removeEventListener('click', setPlayerSelection)
            document.getElementById('playerPaper').removeEventListener('click', setPlayerSelection)
            document.getElementById('playerScissors').removeEventListener('click', setPlayerSelection)

            if (p1Score == 5)
                document.getElementById('roundResult').innerHTML = 'Congratulations, you won';
            else
                document.getElementById('roundResult').innerHTML = 'You lost, try again';
        }
    }
    game();
}
