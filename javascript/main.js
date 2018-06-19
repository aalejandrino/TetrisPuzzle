import Board from './board';
import Game from './game';
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
var square = new Square();
var bigsquare = new BigSquare();
var longhoriz = new LongHoriz();
var longvert = new LongVert();
var jay1 = new Jay4();
//

board.fillTiles([1,0], square);
board.fillTiles([1,2], square);
board.fillTiles([1,4], square);
board.fillTiles([1,6], square);
board.fillTiles([4,0], square);
board.fillTiles([5,5], jay1);
board.fillTiles([6,0], longhoriz);
board.fillTiles([6,1], longhoriz);
board.fillTiles([0,0], longvert);
board.fillTiles([3,0], longvert);
board.fillTiles([0,4], longvert);

// board.clearColumns();
// board.clearRows();

game.receivePieces();


document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey there and welcome to TetrisPuzzle");
  window.game = game;

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

    ctx.fillStyle = "blue";
    ctx.fillRect(50, 600, 45, 45);
    ctx.fillRect(50, 555, 45, 45);
    ctx.fillRect(95, 555, 45, 45);
    ctx.fillRect(140, 555, 45, 45);
    ctx.rect(50, 600, 45, 45);
    ctx.rect(50, 555, 45, 45);
    ctx.rect(95, 555, 45, 45);
    ctx.rect(140, 555, 45, 45);


    ctx.strokeStyle="#000000";
    ctx.stroke();

  }

  setInterval( () => render(), 300);

});
