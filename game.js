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
                    result.textContent = "You Lose! Paper Beats Rock";
                    computerScore++;
                    const computerScoreDiv = document.querySelector('.score-computer');
                    computerScoreDiv.textContent = 'Computer: ' + computerScore;
                    return "computer";
                case "scissors":
                    console.log("You Win! Rock Beats Scissors");
                    result.textContent = "You Win! Rock Beats Scissors";
                    playerScore++;
                    const playerScoreDiv = document.querySelector('.score-player');
                    playerScoreDiv.textContent = 'Player: ' + playerScore;
                    return "player";
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    console.log("You Win! Paper Beats Rock");
                    result.textContent = "You Win! Paper Beats Rock";
                    playerScore++;
                    const playerScoreDiv = document.querySelector('.score-player');
                    playerScoreDiv.textContent = 'Player: ' + playerScore;
                    return "player";
                case "paper":
                    console.log("You Tie! Paper Ties Paper");
                    result.textContent = "You Tie! Paper Ties Paper";
                    return "tie";
                case "scissors":
                    console.log("You Lose! Scissors Beats Paper");
                    result.textContent = "You Lose! Scissors Beats Paper";
                    computerScore++;
                    const computerScoreDiv = document.querySelector('.score-computer');
                    computerScoreDiv.textContent = 'Computer: ' + computerScore;
                    return "computer";
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    console.log("You Lose! Rock Beats Scissors");
                    result.textContent = "You Lose! Rock Beats Scissors";
                    computerScore++;
                    const computerScoreDiv = document.querySelector('.score-computer');
                    computerScoreDiv.textContent = 'Computer: ' + computerScore;
                    return "computer";
                case "paper":
                    console.log("You Win! Scissors Beats Paper");
                    result.textContent = "You Win! Scissors Beats Paper";
                    playerScore++;
                    const playerScoreDiv = document.querySelector('.score-player');
                    playerScoreDiv.textContent = 'Player: ' + playerScore;
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

/*game();*/
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        playRound(e.target.textContent, getComputerChoice());
    });
});

let playerScore = 0;
let computerScore= 0;




