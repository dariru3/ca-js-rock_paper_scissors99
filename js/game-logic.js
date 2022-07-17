// All code should be written in this file.

//12 global variables
let playerOneMoveOneType, 
    playerOneMoveOneValue, 
    playerOneMoveTwoType,
    playerOneMoveTwoValue,
    playerOneMoveThreeType,
    playerOneMoveThreeValue,
    playerTwoMoveOneType, 
    playerTwoMoveOneValue,
    playerTwoMoveTwoType, 
    playerTwoMoveTwoValue,
    playerTwoMoveThreeType, 
    playerTwoMoveThreeValue;

let playerOneArr = [playerOneMoveOneType, playerOneMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue];
let playerTwoArr = [playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue];

let p1 = "Player One";
let p2 = "Player Two";

/**
 * Helper function that divides all moves into one round
 * @param {array} arr Array of all 3 rounds.
 * @param {number} roundNumber Round number.
 * @returns Moves for the designated round.
 */
function roundMoves_(arr, roundNumber){
    //round 1: 0, 2; round 2; 2, 4; round 3: 4, 6
    let roundMoves = arr.slice((round * 2) - 2, round * 2);

    return roundMoves
}

/**
 * Set global variables
 * @param {string} player 
 * @param {string} moveOneType 
 * @param {number} moveOneValue 
 * @param {string} moveTwoType 
 * @param {number} moveTwoValue 
 * @param {string} moveThreeType 
 * @param {number} moveThreeValue 
 */
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
    //check values: valid move types, valid move values

    let moves = [moveOneType, moveTwoType, moveThreeType];
    for(let i=0; i < moves.length; i++){
        if(moves[i] !== 'rock' || moves[i] !== "paper" || moves[i] !== "scissors"){
            console.log("invalid move")
        }
    }

    let values = [moveOneValue, moveTwoValue, moveThreeValue];

    //set values
    if(player == p1){
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if(player == p2){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    } else { console.log ("invalid player") }

}

/**
 * Helper function to compare moves by index of a Rock-Paper-Scissors array 
 * @param {string} pOneMove 
 * @param {number} pOneValue 
 * @param {string} pTwoMove 
 * @param {number} pTwoValue 
 * @return winner 
 */
function compareMoveType_(pOneMove, pOneValue, pTwoMove, pTwoValue){
    let moveTypes = ["rock", "paper", "scissors"];
    pOneMove = pOneMove.toLowerCase();
    pTwoMove = pTwoMove.toLowerCase();
    let pOneMoveIndex = moveTypes.indexOf[pOneMove];
    let pTwoMoveIndex = moveTypes.indexOf[pTwoMove]
    let winner;
    //if tie, check move values
    if(pOneMoveIndex == pTwoMoveIndex){
        if(pOneValue == pTwoValue){
            winner = "Tie"
        }
        if(pOneValue > pTwoValue){
            winner = p1
        } else { winner = p2; }
    }
    //check winner
    if(pOneMoveIndex == 0 && pTwoMoveIndex == moveTypes.length - 1){
        winner = p1;
    }
    if(pTwoMoveIndex == 0 && pOneMoveIndex == moveTypes.length - 1){
        winner = p2;
    }
    if(pOneMoveIndex > pTwoMoveIndex){
        winner = p1;
    }
    if(pTwoMoveIndex > pOneMoveIndex){
        winner = p2;
    }

    return winner;
}

function getRoundWinner(round){
    let playerOne, playerTwo;
    playerOne = roundMoves_(playerOneArr, round);
    playerTwo = roundMoves_(playerTwoArr, round);
    return compareMoveType_(playerOne[0], playerOne[1], playerTwo[0], playerTwo[1])
}