import Board from './board';
import Game from './game';
import One from './pieces/one';
import { Two1, Two2 } from './pieces/two';
import { Three1, Three2, Three3, Three4 } from './pieces/three';
import Square from './pieces/square';
import BigSquare from './pieces/big_square';
import LongHoriz from './pieces/long_horiz';
import LongVert from './pieces/long_vert';
import { Zee1, Zee2 } from './pieces/zee';
import { Ell1, Ell2, Ell3, Ell4 } from './pieces/ell';
import { Jay1, Jay2, Jay3, Jay4 } from './pieces/jay';

// Initialize canvas and display splash

var board = new Board();
var game = new Game(board);

var one = new One();
var square = new Square();
var bigsquare = new BigSquare();
var longhoriz = new LongHoriz();
var longvert = new LongVert();
var test = new Three4();
//

// board.placePiece([5,3], one);
// board.placePiece([1,0], square);
// board.placePiece([1,2], square);
// board.placePiece([1,4], square);
// board.placePiece([1,6], square);
// board.placePiece([4,0], square);
// board.placePiece([5,5], test);
// board.placePiece([6,0], longhoriz);
// board.placePiece([6,1], longhoriz);
// board.placePiece([0,0], longvert);
// board.placePiece([3,0], longvert);
// board.placePiece([0,4], longvert);

// board.clearColumns();
// board.clearRows();

game.receivePieces();


document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey there and welcome to TetrisPuzzle");
  window.game = game;
  console.log(game.pieces);

  var canvasEl = document.getElementById("canvas");
  canvasEl.width = 750;
  canvasEl.height = 700;

  const render = () => {
    var ctx = canvasEl.getContext("2d");

    ctx.fillStyle = "#696969";
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

    ctx.fillStyle = "black";
    ctx.font = "42px Comic San";
    ctx.fillText(`Score: ${game.score}`, 250, 50);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {

        if (board.grid[i][j] === 0) {
          ctx.fillStyle = "white";
        } else {
          ctx.fillStyle = board.grid[i][j].color;
        }

        ctx.fillRect(((i*45) + 150), (j*45) + 75, 45, 45);
        ctx.rect(((i*45) + 150), (j*45) + 75, 45, 45);
      }
    }
    ctx.strokeStyle="#000000";
    ctx.stroke();

    // ctx.fillStyle = "blue";
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
              // ctx.rect((i*45) + 40 + (n*187.5), (j*45) + 555, 45, 45) //rendering error?
            };
          }
        }
      }
    }
  }

  setInterval( () => render(), 500);


  canvasEl.addEventListener('click', (e) => {
    console.log(e.pageX + ',' + e.pageY);
    // console.log(e);

// select pieces ===============================================================
    if (e.pageY > 650 && e.pageY < 750) {
      if (e.pageX > 310 && e.pageX < 450) {
        game.pieceAction(0);
        console.log(game.pieces);
      } else if (e.pageX > 500 && e.pageX < 640) {
        game.pieceAction(1);
        console.log(game.pieces);
      } else if (e.pageX > 685 && e.pageX < 825) {
        game.pieceAction(2);
        console.log(game.pieces);
      } else if (e.pageX > 875 && e.pageX < 1015) {
        game.pieceAction(3);
        console.log(game.pieces);
      }
    }
// =============================================================================

// place pieces on board
  if (e.pageX > 425 && e.pageX < 875 && e.pageY > 175 && e.pageY < 625) {
    // console.log("you clicked on the board!")

    if (game.selectedPiece) {
      let x = Math.floor((e.pageX - 425)/45);
      let y = Math.floor((e.pageY - 175)/45);
      game.placePiece([x,y]);
      console.log("you placed a piece!");
    } else {
      console.log("please select a piece!");
    }

  }

  }, false);


});

// ======================================================================


// canvasEl.addEventListener('click',function(evt){
// alert(evt.clientX + ',' + evt.clientY);
// },false);
