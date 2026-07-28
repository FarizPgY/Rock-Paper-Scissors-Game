let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
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

function getHumanChoice() {
    let selection = prompt('choose one (Rock/Paper/Scissors): ').toLowerCase();
    return selection
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("We Draw!");
    } else {

        if (humanSelection === "rock" && computerSelection === "scissors") {
            console.log("You win! rock beats scissors");
            humanScore += 1;

        } else if (humanSelection === "rock" && computerSelection === "paper") {
            console.log("You lose! paper beats rock");
            computerScore += 1;
            
        } else if (humanSelection === "paper" && computerSelection === "rock") {
            console.log("You win! paper beats rock");
            humanScore += 1;
            
        } else if (humanSelection === "paper" && computerSelection === "scissors") {
            console.log("You lose! scissors beats paper");
            computerScore += 1;
            
        } else if (humanSelection === "scissors" && computerSelection === "paper") {
            console.log("You win! scissors beats paper");
            humanScore += 1;
            
        } else {
            console.log("You lose! rock beats scissors"); 
            computerScore += 1;

        }
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();