const NUM_OF_ROUNDs = 5;

function setPlayerSelection(event) {
    const playerSelection = event.target.value;
    let computerSelection = getComputerChoice();

    //console.log(playRound(playerSelection, computerSelection));
    document.getElementById('roundResult').innerHTML = playRound(playerSelection, computerSelection);
}

document.getElementById('playerRock').addEventListener('click', setPlayerSelection)
document.getElementById('playerPaper').addEventListener('click', setPlayerSelection)
document.getElementById('playerScissors').addEventListener('click', setPlayerSelection)

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection)
        return "It's a tie";
    // When player chooses Rock
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors")
            return "User win, Rock beats Scissors";
        else if (computerSelection === "paper")
            return "Computer wins, Paper beats Rock";
    }
    //When player chooses Scissors
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper")
            return "User wins, Scissors beats Paper";
        else if (computerSelection === "rock")
            return "Computer wins, Rock beats Scissors";
    }
    //when player chooses Paper
    else if (playerSelection === "paper") {
        if (computerSelection === "rock")
            return "User wins, Paper beats Rock";
        else if (computerSelection === "scissors")
            return "Computer wins, Scissors beats Paper";
    }
}
//Function to get computerChoice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0)
        return "rock";
    else if (computerChoice === 1)
        return "scissors";
    else
        return "paper";
}


//let computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
