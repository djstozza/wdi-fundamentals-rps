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
        console.log("We have a tie!");
        return winner;
    } 
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
            console.log ("You Win... Rock beats scissors!");
        } else {
            winner = "computer";
            console.log ("Paper covers rock!");
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            winner = "player";
            console.log ("Scissors cuts paper!");
        } else {
            winner = "computer";
            console.log ("Rock beats scissors!");
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
            console.log ("Paper covers rock!");
        } else {
            winner = "computer";
            console.log ("Scissors cuts paper!");
        }
    }
    else {
        getInput ();
    }
    console.log (winner + " wins!");
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = ("player" || "computer");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    for (var i=0; i<25; i++) {
        {
        if (playerWins === 5 || computerWins === 5) {
            console.log("FINAL SCORE: Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            if (playerWins === 5) {
                console.log("Congratulations... You Win!");
            } else if (computerWins === 5) {console.log("Computer Wins... Better luck next time!");}
            break;
        } else {
            if (winner === "player") {
             playerWins ++;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            } else if (winner === "computer") {
             computerWins ++;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);}
        getPlayerMove();}
        }
    }
    return [playerWins, computerWins];
}

