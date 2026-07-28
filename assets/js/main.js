let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerSelection;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerSelection = "rock";
    } else if (randomNumber === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection
}

function getHumanChoice() {
    let humanSelection = prompt('choose one (Rock/Paper/Scissors): ').toLowerCase();
    return humanSelection
}

function playRound(humanStand, computerStand) {
    if (humanStand === computerStand) {
        console.log("We Draw!");
    } else {

        if (humanStand === "rock" && computerStand === "scissors") {
            console.log("You win! rock beats scissors");
            humanScore += 1;

        } else if (humanStand === "rock" && computerStand === "paper") {
            console.log("You lose! paper beats rock");
            computerScore += 1;
            
        } else if (humanStand === "paper" && computerStand === "rock") {
            console.log("You win! paper beats rock");
            humanScore += 1;
            
        } else if (humanStand === "paper" && computerStand === "scissors") {
            console.log("You lose! scissors beats paper");
            computerScore += 1;
            
        } else if (humanStand === "scissors" && computerStand === "paper") {
            console.log("You win! scissors beats paper");
            humanScore += 1;
            
        } else {
            console.log("You lose! rock beats scissors"); 
            computerScore += 1;

        }
    }
}

function playGame () {
    for (let index = 1; index <= 5; index++) {
        const humanStand = getHumanChoice();
        const computerStand = getComputerChoice();
        playRound(humanStand, computerStand);
    }
    if (humanScore == computerScore) {
        console.log(`DRAW! score result: you: ${humanScore} | computer: ${computerScore}`)

    } else if (humanScore > computerScore) {
        console.log('Congratulations you win this game!') 
        console.log(`score result: you: ${humanScore} | computer: ${computerScore}`)

    } else {
        console.log('Sorry you lose this game!')
        console.log(`score result: you: ${humanScore} | computer: ${computerScore}`)
    }
}

playGame();