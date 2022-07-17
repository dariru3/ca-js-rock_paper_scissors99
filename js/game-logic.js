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

let pOne = "Player One";
let pTwo = "Player Two";

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
    let playerMovesArr = [moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue];
    if(player == pOne){
        for(let i = 0; i < playerMovesArr.length; i++){
            playerOneArr[i] = playerMovesArr[i];
        };
    } else if(player == pTwo){
        for(let i = 0; i < playerMovesArr.length; i++){
            playerTwoArr[i] = playerMovesArr[i];
        };
    } else {
        console.log('Invalid player entered')
    };
}

/**
 * Compare moves by index of a Rock-Paper-Scissors array 
 * @param {string} pOneMove 
 * @param {number} pOneValue 
 * @param {string} pTwoMove 
 * @param {number} pTwoValue 
 * @return winner 
 */
function compareMoveType(pOneMove, pOneValue, pTwoMove, pTwoValue){
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
            winner = pOne
        } else { winner = pTwo; }
    }
    //check winner
    if(pOneMoveIndex == 0 && pTwoMoveIndex == moveTypes.length - 1){
        winner = pOne;
    }
    if(pTwoMoveIndex == 0 && pOneMoveIndex == moveTypes.length - 1){
        winner = pTwo;
    }
    if(pOneMoveIndex > pTwoMoveIndex){
        winner = pOne;
    }
    if(pTwoMoveIndex > pOneMoveIndex){
        winner = pTwo;
    }

    return winner;
}

function getRoundWinner(round){
    if(round == 1){
        console.log("placeholder")
    }
}
