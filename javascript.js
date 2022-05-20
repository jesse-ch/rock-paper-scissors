//Create function
//Function randomly returns 'Rock', 'Paper', or 'Scissors'
//The function is used to make the computer play
function computerPlay() {
    const gameArray = ['Rock', 'Papers', 'Scissors'];
    const random = Math.floor(Math.random() * gameArray.length);
    return gameArray[random];
}

//Create the playerSelection function
function playerPlay() {
    console.log ("Do you choose 'Rock' (1), 'Paper' (2), or 'Scissors' (3)?");
    let playerChoice = prompt("Do you choose 'Rock' (1), 'Paper' (2), or 'Scissors' (3)?");
    if (playerChoice.toLowerCase() === "rock" || parseInt(playerChoice) === 1) {
       playerChoice = "Rock";
    } else if (playerChoice.toLowerCase() === "paper" || parseInt(playerChoice) === 2) {
       playerChoice = "Paper";
    }
    else if (playerChoice.toLowerCase() === "scissors" || parseInt(playerChoice) === 3) {
       playerChoice = "Scissors";
    }
    else if (playerChoice.toLowerCase() !== "rock" || "scissors" || "paper" || parseInt(playerChoice) !== 1 || 2 || 3) {
       alert("Please try to enter your value again :)")
       playerSelection();
    }
    else {
       console.log("Not sure what's going on, hold on to yer butts ;)")
    }
    return playerChoice;
 }

//Create function that plays single round of Rock Paper Scissors
//Function will take two parameters - playerSelection & computerSelection
//Return a string that declare winner
//String says "you lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
       console.log("It's a draw!");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
       console.log("Rock beats scissors! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
       console.log("Rock beats scissors! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
       console.log("Scissors beats paper! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
       console.log("Scissors beats paper! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
       console.log("Paper beats rock! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
       console.log("Paper beats rock! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else {
       console.log("I'm not sure what, but something went worng :(");
    }
 }

const playerSelection = playerPlay();
const computerSelection = computerPlay();