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

  printMessage('Computer move: ' + computerMove);

//player move
  playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Wpisana odpowiedź to: ' + playerInput);
  if (playerInput == '1') {
    playerMove = 'rock';
  } else if (playerInput == '2') {
    playerMove = 'paper';
  } else if (playerInput == '3') {
    playerMove = 'scissors';
  } else
    playerMove = 'unkown move';

  printMessage('Player move: ' + playerMove);



