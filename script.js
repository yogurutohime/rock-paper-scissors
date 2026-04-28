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
        explain.textContent = "Tie!"
        return "tie"
    }else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            explain.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
            return "computerWins"
        }else {
            explain.textContent = `You win! ${humanChoice} beats ${computerChoice}`
            return "humanWins"
        }
    }else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            explain.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
            return "computerWins"
        }else {
            explain.textContent = `You win! ${humanChoice} beats ${computerChoice}`
            return "humanWins"
        }
    }else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            explain.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
            return "computerWins"
        }else {
            explain.textContent = `You win! ${humanChoice} beats ${computerChoice}`
            return "humanWins"
        }
    }
}


explain = document.querySelector("#explain")
let humanScore= 0;
let computerScore = 0;
humanScoreRecord = document.querySelector("#humanScore")
computerScoreRecord = document.querySelector("#computerScore")
finalResult = document.querySelector("#finalResult")

game = document.querySelector("#player")
game.addEventListener("click", (e) => {
    humanSelection = e.target.id
    let computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    if (result === "humanWins") {
        humanScore += 1;
    }else if (result === "computerWins") {
        computerScore += 1;
    }
    humanScoreRecord.textContent = `Human score: ${humanScore}`
    computerScoreRecord.textContent = `Computer score: ${computerScore}`
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
        finalResult.textContent = "Human wins!"
        } else if (humanScore < computerScore ) {
        finalResult.textContent = "Computer wins!"
        }
        humanScore = 0
        computerScore = 0
    } else {
        finalResult.textContent = ""
    }
})