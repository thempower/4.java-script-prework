'use strict';


var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

//computer move
var randomNumber = Math.floor(Math.random() * 3 + 1);
if (randomNumber == '1') {
  computerMove = 'rock';
} else if (randomNumber == '2') {
  computerMove = 'paper';
} else if (randomNumber == '3') {
  computerMove = 'scissors';
} else
  computerMove = 'unkown move';

  console.log(computerMove);



function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
        return 'scissor';        ;
    } else printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
2
  /**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      printMessage('You Won!');
    } else if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      printMessage('You Lose :(');
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
      printMessage('It is Draw');
    } else {
        printMessage('Your move is unknown');
    }
}
  playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  playerMove = getMoveName(playerInput);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
