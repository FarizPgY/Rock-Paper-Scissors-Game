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

