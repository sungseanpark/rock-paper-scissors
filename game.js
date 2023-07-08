function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    let choiceStr;
    switch(choiceNum) {
        case 0:
            choiceStr = "rock";
            break;
        case 1:
            choiceStr = "paper";
            break;
        case 2:
            choiceStr = "scissors";
            break;
    }
    return choiceStr;
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    const result = document.querySelector('.round-result');
    switch(playerSelectionLowerCase) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    console.log("You Tie! Rock Ties Rock");
                    result.textContent = "You Tie! Rock Ties Rock";
                    return "tie";
                case "paper":
                    console.log("You Lose! Paper Beats Rock");
                    computerScore++;
                    const computerScoreDiv = document.querySelector('.score-computer');
                    computerScoreDiv.textContent = 'Computer: ' + computerScore;
                    if(computerScore == 5){
                        endGame('computer');
                    }
                    else{
                        result.textContent = "You Lose! Paper Beats Rock";
                    }
                    return "computer";
                case "scissors":
                    console.log("You Win! Rock Beats Scissors");
                    playerScore++;
                    const playerScoreDiv = document.querySelector('.score-player');
                    playerScoreDiv.textContent = 'Player: ' + playerScore;
                    if(playerScore == 5){
                        endGame('player');
                    }
                    else {
                        result.textContent = "You Win! Rock Beats Scissors";
                    }
                    return "player";
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    console.log("You Win! Paper Beats Rock");
                    playerScore++;
                    const playerScoreDiv = document.querySelector('.score-player');
                    playerScoreDiv.textContent = 'Player: ' + playerScore;
                    if(playerScore == 5) {
                        endGame('player');
                    }
                    else {
                        result.textContent = "You Win! Paper Beats Rock";
                    }
                    return "player";
                case "paper":
                    console.log("You Tie! Paper Ties Paper");
                    result.textContent = "You Tie! Paper Ties Paper";
                    return "tie";
                case "scissors":
                    console.log("You Lose! Scissors Beats Paper");
                    computerScore++;
                    const computerScoreDiv = document.querySelector('.score-computer');
                    computerScoreDiv.textContent = 'Computer: ' + computerScore;
                    if(computerScore == 5){
                        endGame('computer');
                    }
                    else{
                        result.textContent = "You Lose! Scissors Beats Paper";
                    }
                    return "computer";
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    console.log("You Lose! Rock Beats Scissors");
                    computerScore++;
                    const computerScoreDiv = document.querySelector('.score-computer');
                    computerScoreDiv.textContent = 'Computer: ' + computerScore;
                    if(computerScore == 5){
                        endGame('computer');
                    }
                    else{
                        result.textContent = "You Lose! Rock Beats Scissors";
                    }
                    return "computer";
                case "paper":
                    console.log("You Win! Scissors Beats Paper");
                    playerScore++;
                    const playerScoreDiv = document.querySelector('.score-player');
                    playerScoreDiv.textContent = 'Player: ' + playerScore;
                    if(playerScore == 5){
                        endGame('player');
                    }
                    else{
                        result.textContent = "You Win! Scissors Beats Paper";
                    }
                    return "player";
                case "scissors":
                    console.log("You Tie! Scissors Ties Scissors");
                    result.textContent = "You Tie! Scissors Ties Scissors";
                    return "tie";
            }
            break;
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i ++) {
        let playerSelection = prompt("Rock, Paper, Scissors.. What is your choice?");
        let winner = playRound(playerSelection, getComputerChoice());
        switch(winner) {
            case "player":
                playerScore++;
                break;
            case "computer":
                computerScore++;
                break;
            case "tie":
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log("You have won! Your score: " + playerScore + ", Computer's score: " + computerScore);
    }
    else if(computerScore > playerScore) {
        console.log("You have lost..  Your score: " + playerScore + ", Computer's score: " + computerScore);
    }
    else{
        console.log("You have tied.  Your score: " + playerScore + ", Computer's score: " + computerScore);
    }
}

function endGame(winner) {
    const result = document.querySelector('.round-result');
    if(winner == 'computer') {
        result.textContent = "You have lost..  Your score: " + playerScore + ", Computer's score: " + computerScore;
    }
    else {
        result.textContent = "You have won! Your score: " + playerScore + ", Computer's score: " + computerScore;
    }

    buttons.forEach(button => {
        button.removeEventListener('click', playRoundEvent);
    });

    const container =  document.querySelector('body');
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('play-again');
    playAgainButton.textContent = 'Play Again!';

    container.appendChild(playAgainButton);

    playAgainButton.addEventListener('click', startGame);
}

function playRoundEvent(e) {
    const computerChoice = getComputerChoice();
    let computerChoiceEmoji;
    switch(computerChoice) {
        case 'rock':
            computerChoiceEmoji= '👊';
            break;
        case 'paper':
            computerChoiceEmoji = '🤚';
            break;
        case 'scissors':
            computerChoiceEmoji = '✌️';
            break;
    }
    const computerChoiceDiv = document.querySelector('#computer-choice');
    computerChoiceDiv.textContent = computerChoiceEmoji;
    playRound(e.target.id, computerChoice);
}

function startGame() {

    playerScore = 0;
    computerScore = 0;

    const playerScoreDiv = document.querySelector('.score-player');
    playerScoreDiv.textContent = 'Player: ' + playerScore;
    const computerScoreDiv = document.querySelector('.score-computer');
    computerScoreDiv.textContent = 'Computer: ' + computerScore;
    const result = document.querySelector('.round-result');
    result.textContent = '';

    const playAgainButton = document.querySelector('.play-again');
    const container = document.querySelector('body');
    container.removeChild(playAgainButton);

    const computerChoiceDiv = document.querySelector('#computer-choice');
    computerChoiceDiv.textContent = '❓';

    buttons.forEach(button => {
        button.addEventListener('click', playRoundEvent);
    });

}

/*game();*/
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', playRoundEvent);
});

let playerScore = 0;
let computerScore= 0;




