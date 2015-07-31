////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();  
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
    } 
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
            console.log("\nRock beats scissors!\n");
        } else {
            winner = "computer";
            console.log("\nPaper covers rock!\n");
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            winner = "player";
            console.log("\nScissors cuts paper!\n");
        } else {
            winner = "computer";
            console.log("\nRock beats scissors!\n");
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
            console.log("\nPaper covers rock!\n");
        } else {
            winner = "computer";
            console.log("\nScissors cuts paper!\n");
        }
    }
    else {
        getInput ();
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins <5 && computerWins <5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        if (winner === "player") {
            console.log("Player chose " + playerMove + " and Computer chose " + computerMove + ".\nPlayer wins this round!\n");
            playerWins++;
            console.log("SCORE\nPlayer: " + playerWins + "\tComputer: " + computerWins + "\n");
        }
        else if (winner === "computer") {
            console.log("Player chose " + playerMove + " and Computer chose " + computerMove + ".\nComputer wins this round!\n");
            computerWins++;
            console.log("SCORE\nPlayer: " + playerWins + "\tComputer: " + computerWins + "\n");
        }
        else if (winner === "tie") {
            console.log("It's a tie!\n");
            console.log("SCORE\nPlayer: " + playerWins + "\tComputer: " + computerWins + "\n");
        }
    }

    if (playerWins === 5) {
        console.log("FINAL SCORE\nPlayer: " + playerWins + "\tComputer: " + computerWins + "\nYou win... Hooray!");
    }
    else if (computerWins === 5) {
        console.log("FINAL SCORE\nPlayer: " + playerWins + "\tComputer: " + computerWins + "\nComputer wins... Better luck next time!");
    }

    
    return [playerWins, computerWins];
}

playToFive();
