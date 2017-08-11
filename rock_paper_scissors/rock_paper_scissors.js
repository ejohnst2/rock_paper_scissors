var userInput = 'bomb';
userInput = userInput.toLowerCase();

function getComputerChoice (){
    return Math.floor(Math.random()*2)

    switch (getComputerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        case 3:
            return 'bomb';
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userInput === 'rock'&& computerChoice === 'paper') {
        return 'Computer wins!'
    } else {
        return 'User wins!';
    }
    if (userInput === 'paper' && computerChoice === 'scissors') {
        return 'Computer wins!'
    } else {
        return 'User wins!';
    }
    if (userInput === 'scissors' && computerChoice === 'rock') {
        return 'Computer wins!'
    } else {
        return 'User wins!';
    }
    if (userInput === 'bomb') {
        return 'User wins!'
    }
}

function playGame() {
    var userChoice = userInput;
    var computerChoice = getComputerChoice();
    console.log('You threw ' + userChoice);
    console.log('The computer threw ' + computerChoice);

    console.log(determineWinner(userChoice,computerChoice));
}

playGame();