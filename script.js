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

let humanScore= 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice === computerChoice) {
        console.log("Tie!")
    }else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
    }else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
    }else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);