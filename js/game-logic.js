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

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
    let playerMovesArr = [moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue];
    if(player == 'Player One'){
        for(let i = 0; i < playerMovesArr.length; i++){
            playerOneArr[i] = playerMovesArr[i];
        };
    } else if(player == 'Player Two'){
        for(let i = 0; i < playerMovesArr.length; i++){
            playerTwoArr[i] = playerMovesArr[i];
        };
    } else {
        console.log('Invalid player entered')
    };
}

