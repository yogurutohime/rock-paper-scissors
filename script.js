//Get computer choice
//Get user choice
//Determine who wins
//Track user score
//Total of five rounds

let getComputerChoice = function() {
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

let getHumanChoice = () => window.prompt()


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Tie!")
        return "tie"
    }else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return "computerWins"
        }else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            return "humanWins"
        }
    }else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return "computerWins"
        }else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            return "humanWins"
        }
    }else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return "computerWins"
        }else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            return "humanWins"
        }
    }
}

function playGame() {
    let humanScore= 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        if (result === "humanWins") {
            humanScore += 1;
        }else if (result === "computerWins") {
            computerScore += 1;
        }
        console.log(`Human score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log("Human wins!")
    }else if (humanScore < computerScore ) {
        console.log("Computer wins!")
    }else {
        console.log ("Tie!")
    }
}

playGame();