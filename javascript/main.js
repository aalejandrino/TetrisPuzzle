//theme credited to Original Tetris

import Board from './board';
import Game from './game';

// Initialize canvas and display splash

var board = new Board();
var game = new Game(board);


// music and 
var music1 = new Audio("./sound/tetris.mp3");
music1.volume = 0.5;

var start_snd = new Audio("./sound/start.mp3");
var gameover_snd = new Audio("./sound/gameover.mp3");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey there and welcome to TetrisPuzzle");
  // window.game = game;
  // console.log(game.pieces);


  var canvasEl = document.getElementById("canvas");
  canvasEl.width = 750;
  canvasEl.height = 750;

  var ctx = canvasEl.getContext("2d");
  var shiftColors = 0;

// render game ===============================================================

  const render = () => {
    // requestAnimationFrame( render );
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.strokeStyle = "black";

    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvasEl.width, canvasEl.height);

    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0,535, canvasEl.width, 185);

    ctx.fillStyle = "white";
    // ctx.beginPath();
    // ctx.arc(50,50,25,0,2*Math.PI);
    // ctx.fill();
    ctx.font = "72px Comic San";
    ctx.fillText(`♫`, 0, 58);


    ctx.fillStyle = "white";
    ctx.font = "42px Comic San";
    ctx.fillText(`Score: ${game.score}`, 250, 50);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {

        if (board.grid[i][j] === 0) {
          ctx.fillStyle = "white";
        } else if (shiftColors > 100) {
          ctx.fillStyle = board.grid[i][j].color;
          // ctx.fillStyle = "silver";
        } else {
          // ctx.fillStyle = "silver";
          ctx.fillStyle = "dark" + board.grid[i][j].color;
        }

        ctx.fillRect(((i*45) + 150), (j*45) + 75, 45, 45);
        ctx.strokeRect(((i*45) + 150), (j*45) + 75, 45, 45);
      }
    }

    for (let n = 0; n < 4; n++) {
      let current_piece = game.pieces[n];

      if (current_piece === null) {
        continue;
      } else {

        for (let i = 0; i < current_piece.tiles.length; i++) {
          for (let j = 0; j < current_piece.tiles[0].length; j++) {

            if (current_piece.tiles[i][j] === 0) {
              continue;
            } else {
              ctx.fillStyle = current_piece.tiles[i][j].color;
              ctx.fillRect((i*45) + 40 + (n*187.5), (j*45) + 555, 45, 45)
              ctx.strokeRect((i*45) + 40 + (n*187.5), (j*45) + 555, 45, 45)
            };
          }
        }
      }
    }

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


    if (game.selectedPiece) {

      for (let i = 0; i < game.selectedPiece.tiles.length; i++) {
        for (let j = 0; j < game.selectedPiece.tiles[0].length; j++) {

          if (game.selectedPiece.tiles[i][j] === 0) {
            continue;
          } else {
            ctx.fillStyle = game.selectedPiece.tiles[i][j].color;
            ctx.fillRect(window.offsetX - 22.5 + (i*45), window.offsetY - 22.5 + (j*45), 45, 45);
            ctx.strokeRect(window.offsetX - 22.5 + (i*45), window.offsetY - 22.5 + (j*45), 45, 45);
          }
        }
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

  const renderMenu = (ctx) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvasEl.width, canvasEl.height);
    // ctx.font = "60px Comic San";
    // ctx.fillText(`START`, 300, 625);
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "silver";
    ctx.beginPath();
    ctx.arc(375,625,100,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(335, 560);
    ctx.lineTo(335, 690);
    ctx.lineTo(445, 625);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "lightblue";
    ctx.beginPath();
    ctx.arc(675,675,50,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "72px Comic San";
    ctx.fillText(`?`, 660, 695);

    var title_img = new Image();
    title_img.onload = function () {
      ctx.drawImage(title_img, -140, 0);
    }

    title_img.src = "images/tetris-title.png";

  }

  renderMenu(ctx);

  const renderHowToPlay = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvasEl.width, canvasEl.height);

    ctx.fillStyle = "lightblue";
    ctx.beginPath();
    ctx.arc(675,675,50,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "36px Comic San";
    ctx.fillText(`Back`, 635, 685);

    var img1 = new Image();
    img1.onload = function () {
      ctx.drawImage(img1, 0, 0, 475, 285);
    }
    img1.src = "images/place_pieces.png";

    var img3 = new Image();
    img3.onload = function () {
      ctx.drawImage(img3, 500, 200, 200, 400);
    }
    img3.src = "images/clear_column.png";

    var img2 = new Image();
    img2.onload = function () {
      ctx.drawImage(img2, 25, 325, 450, 160);
    }
    img2.src = "images/clear_row.png";

    var img4 = new Image();
    img4.onload = function () {
      ctx.drawImage(img4, 0, 590, 450, 160);
    }
    img4.src = "images/gameover.png";
  }

  canvasEl.addEventListener('mousemove', function(e) {
    let offsetX = e.offsetX || offsetX;
    let offsetY = e.offsetY || offsetY;

    window.offsetX = offsetX;
    window.offsetY = offsetY;
  });

// =============================================================================

// select pieces ===============================================================
  canvasEl.addEventListener('click', (e) => {
    // console.log(e.pageX + ',' + e.pageY);
    console.log(e.offsetX + ',' + e.offsetY);

    if (e.offsetY < 63 && e.offsetX < 50) {
      if (music1.paused) {
        music1.play();
      } else {
        music1.pause();
      }

    }

    if (!game.started && (e.offsetY > 400 && e.offsetY < 675)
                      && (e.offsetX > 250 && e.offsetX < 450)) {
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
    // console.log("you clicked on the board!")

    if (game.selectedPiece) {
      let x = Math.floor((e.offsetX - 150)/45);
      let y = Math.floor((e.offsetY - 75)/45);
      game.placePiece([x,y]);
      // console.log("you placed a piece!");
    } else {
      console.log("please select a piece!");
    }

  }

  }, false);


  // track mouse cursor ========================================================

});

// ===========================================================================


// canvasEl.addEventListener('click',function(evt){
// alert(evt.offsetX + ',' + evt.clientY);
// },false);
