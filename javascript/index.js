function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection)
        return "It's a tie";
    // When player chooses Rock
    else if (playerSelection === "rock") {
        if (computerSelection === "scissor")
            return "User win, Rock beats Scissor";
        else if (computerSelection === "paper")
            return "Computer wins, Paper beats Rock";
    }
    //When player chooses Scissor
    else if (playerSelection === "scissor") {
        if (computerSelection === "paper")
            return "User wins, Scissor beats Paper";
        else if (computerSelection === "rock")
            return "Computer wins, Rock beats Scissor";
    }
    //when player chooses Paper
    else if (playerSelection === "paper") {
        if (computerSelection === "rock")
            return "User wins, Paper beats Rock";
        else if (computerSelection === "scissor")
            return "Computer wins, Scissor beats Paper";
    }
}
//Function to get computerChoice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0)
        return "rock";
    else if (computerChoice === 1)
        return "scissor";
    else if (computerChoice === 2)
        return "paper";
    else
        return "error";
}
let playerSelection = "scissor";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));