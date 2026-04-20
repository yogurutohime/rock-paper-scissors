//Get computer choice
//Get user choice
//Determine who wins
//Track user score
//Total of five rounds

// For five rounds
// Declare a variable computerChoice using function getComputerChoice
let computerChoice = getComputerChoice()
console.log(computerChoice)

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
// get a random number with math random method
// Assign it to computerChoice
// If its equal or bigger than 0.67, assign computerChoice to scissors
// If its equal or bigger than 0.34 and smaller than 0.67, assign computerChoice to paper
// If its smaller than 0.34, assign computerChoice to rock
