let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let selection;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        selection = "rock";
    } else if (randomNumber === 2) {
        selection = "paper";
    } else {
        selection = "scissors";
    }
    return selection
}

function getHumanChoice () {
    let selection = prompt('choose one (Rock/Paper/Scissors): ');
    return selection
}

console.log(getHumanChoice());