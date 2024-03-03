// Initializing score variables
let playerScore = 0;
let computerScore = 0;

// Computer random choice function

function computerPlay() {
    // Defining computer options
    let allChoices = ["Rock", "Paper", "Scissors"];
    // Generating random choice from options
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    // Returning choice for later
    return randomChoice
}

// Game initializing

function game() {
    // While loop for when the player/computer's score have not yet reached the maximum for 5
    while (playerScore < 5 && computerScore < 5) {
        // Prompting player choice and assigning it to a variable
        const playerSelection = prompt("Would you like to choose Rock, Paper or Scissors?")
        // Assigning computer choice from previous function
        const computerSelection = computerPlay();
        // Beginning round using playRound function with both gathered selections.
        alert(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // Reporting current scores to console
        console.log(`Your current score: ` + playerScore);
        console.log(`Computer current score: ` + computerScore);
        return "Tie game!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        // Incrementing scores
        playerScore += 1;
        console.log(`Your current score: ` + playerScore);
        console.log(`Computer current score: ` + computerScore);
        return `You win! ${playerSelection} beats ${computerSelection}!`
        
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        console.log(`Your current score: ` + playerScore);
        console.log(`Computer current score: ` + computerScore);
        return `You win! ${playerSelection} beats ${computerSelection}!`
        
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore += 1;
        console.log(`Your current score: ` + playerScore);
        console.log(`Computer current score: ` + computerScore);
        return `You win! ${playerSelection} beats ${computerSelection}!`

    } else {
        computerScore += 1;
        console.log(`Your current score: ` + playerScore);
        console.log(`Computer current score: ` + computerScore);
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

// Function for ending the game once the score limit has been reached.

function winGame() {
    if (playerScore == 5) {
        return "You win!"
    } else if (computerScore == 5) {
        return "You lose!"
    }
}

game();

// Printing final scores

console.log(`Your final score: ` + playerScore);
console.log(`Computer final score: ` + computerScore);