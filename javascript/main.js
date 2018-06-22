//theme credited to Original Tetris

import Board from './board';
import Game from './game';
import { renderField, renderMusicNote, renderScore, 
          renderGridAndPieces, renderSelected, renderMenu,
          renderHowToPlay } from './game_render';


var board = new Board();
var game = new Game(board);


// music and sound effects
var music1 = new Audio("./sound/tetris.mp3");
music1.volume = 0.75;

var start_snd = new Audio("./sound/start.mp3");
var gameover_snd = new Audio("./sound/gameover.mp3");



document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey there and welcome to TetrisPuzzle");
  // Initialize canvas and display splash
  var canvasEl = document.getElementById("canvas");
  canvasEl.width = 750;
  canvasEl.height = 750;

  var ctx = canvasEl.getContext("2d");
  var shiftColors = 0;

// render game ===============================================================
  const render = () => {

    renderField(ctx);
    
    renderMusicNote(ctx, music1);

    renderScore(ctx, game.score);

    renderGridAndPieces(ctx, game, board, shiftColors)

    renderSelected(ctx, game);

    if (shiftColors < 201) {
      shiftColors++;
    } else {
      shiftColors = 0;

      // check for losing condition every few seconds
      if (game.checkGameOver()) {
        music1.pause();
        gameover_snd.play();

        setTimeout( () => alert("GAME OVER, NO VALID MOVES!! Restart the game (refresh page)"), 500);
      }

    }

    requestAnimationFrame( render );
  }

  const beginGame = () => {
    game.started = true;
    game.receivePieces();

    music1.addEventListener('ended', function() {
      this.currentTime = this.duration;
      this.play();
    }, false);
    start_snd.play();
    music1.play();


    render();
  }

  renderMenu(ctx);

  canvasEl.addEventListener('mousemove', function(e) {
    let offsetX = e.offsetX || offsetX;
    let offsetY = e.offsetY || offsetY;

    window.offsetX = offsetX;
    window.offsetY = offsetY;
  });

// =============================================================================

// select pieces ===============================================================
  canvasEl.addEventListener('click', (e) => {
    // console.log(e.offsetX + ',' + e.offsetY);

    if (e.offsetY < 63 && e.offsetX < 50) {
      if (music1.paused) {
        music1.play();
      } else {
        music1.pause();
      }

    }

    if (!game.started && (e.offsetY > 525 && e.offsetY < 725)
                      && (e.offsetX > 275 && e.offsetX < 475)) {
      beginGame();
    }

    if (!game.started && (e.offsetY > 625 && e.offsetY < 725)
                      && (e.offsetX > 625 && e.offsetX < 725)) {

      if (game.atmenu === true) {
        game.atmenu = false;
        renderHowToPlay(ctx);
      } else {
        game.atmenu = true;
        renderMenu(ctx);
      }
    }

    if (e.offsetY > 550 && e.offsetY < 700) {
      if (e.offsetX > 40 && e.offsetX < 175) {
        game.pieceAction(0);
        // console.log(game.pieces);
      } else if (e.offsetX > 225 && e.offsetX < 360) {
        game.pieceAction(1);
        // console.log(game.pieces);
      } else if (e.offsetX > 415 && e.offsetX < 550) {
        game.pieceAction(2);
        // console.log(game.pieces);
      } else if (e.offsetX > 600 && e.offsetX < 740) {
        game.pieceAction(3);
        // console.log(game.pieces);
      }

    }
// =============================================================================

// place pieces on board
  if (e.offsetX > 150 && e.offsetX < 600 && e.offsetY > 75 && e.offsetY < 525) {

    if (game.selectedPiece) {
      let x = Math.floor((e.offsetX - 150)/45);
      let y = Math.floor((e.offsetY - 75)/45);
      game.placePiece([x,y]);

    } else {
      console.log("please select a piece!");
    }

  }

  }, false);

});
