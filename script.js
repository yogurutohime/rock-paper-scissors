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

