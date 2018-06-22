/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/board.js":
/*!*****************************!*\
  !*** ./javascript/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Board {

  constructor() {
    // this.ctx = ctx; //for rendering?
    this.createGrid();
    
    //sound effects
    this.remove_snd = new Audio("./sound/line-removal4.mp3");
  }

  createGrid() {
    let a = [];
    for (let i = 0; i < 10; i++) {
        a.push(new Array(10).fill(0));
    }

    this.grid = a;
  }

  placePiece(coord, piece) {
    if (this.is_validMove(coord, piece)) {
      for (let i = 0; i < piece.tiles.length; i++) {
        for (let j = 0; j < (piece.tiles[0]).length; j++) {
          let current_tile = this.grid[coord[0] + i][coord[1] + j];
          let new_tile = piece.tiles[i][j];

          if (current_tile === 0 && new_tile !== 0) {
            this.grid[coord[0] + i][coord[1] + j] = new_tile;
          }
        }
      }
    }
  }

  is_validMove(coord, piece) {
    for (let i = 0; i < piece.tiles.length; i++) {
      for (let j = 0; j < (piece.tiles[0]).length; j++) {
        if ((coord[0] + piece.tiles.length-1) > 9 || (coord[1] + piece.tiles[0].length-1) > 9) {
          return false;
        }

        let current_tile = this.grid[coord[0] + i][coord[1] + j];
        let new_tile = piece.tiles[i][j];

        if (current_tile !== 0 && new_tile !== 0) {
          return false;
        }
      }
    }

    return true;
  }

  check_forValidMoves(piece) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.is_validMove([i,j], piece)) {
          return true;
        }
      }
    }

    return false;
  }

  checkForTiles(el) {
    return el !== 0;
  }

  clearRows() {
    let score = 0;

    for (let j = 0; j < 10; j++) {
      let check_row = [];

      for (let i = 0; i < 10; i++) {
        check_row.push(this.grid[i][j]);
      }

      if (check_row.every(this.checkForTiles)) {
        this.clearRow(j);
        score += 10;
      }
    }

    if (score) {
      this.remove_snd.play();
    }

    return score;
  }

  clearRow(rowNum) {
    for (let i = 0; i < 10; i++) {
      this.grid[i][rowNum] = 0;
    }
  }

  clearColumns() {
    let score = 0;

    this.grid.forEach(column => {
      if (column.every(this.checkForTiles)) {
        column.fill(0);
        score += 10;
      }
    })

    if (score) {
      this.remove_snd.play();
    }

    return score;
  }

  clearColumn(colNum) {
    this.grid[colNum].fill(0)
  }



}


/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pieces_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pieces/one */ "./javascript/pieces/one.js");
/* harmony import */ var _pieces_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieces/two */ "./javascript/pieces/two.js");
/* harmony import */ var _pieces_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pieces/three */ "./javascript/pieces/three.js");
/* harmony import */ var _pieces_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pieces/square */ "./javascript/pieces/square.js");
/* harmony import */ var _pieces_big_square__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pieces/big_square */ "./javascript/pieces/big_square.js");
/* harmony import */ var _pieces_ess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pieces/ess */ "./javascript/pieces/ess.js");
/* harmony import */ var _pieces_zee__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pieces/zee */ "./javascript/pieces/zee.js");
/* harmony import */ var _pieces_long_horiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pieces/long_horiz */ "./javascript/pieces/long_horiz.js");
/* harmony import */ var _pieces_long_vert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pieces/long_vert */ "./javascript/pieces/long_vert.js");
/* harmony import */ var _pieces_ell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pieces/ell */ "./javascript/pieces/ell.js");
/* harmony import */ var _pieces_jay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pieces/jay */ "./javascript/pieces/jay.js");
//theme credited to Original Tetris













  var PIECES = {
    0 : new _pieces_square__WEBPACK_IMPORTED_MODULE_3__["default"](),     1 : new _pieces_big_square__WEBPACK_IMPORTED_MODULE_4__["default"](),   2 : new _pieces_square__WEBPACK_IMPORTED_MODULE_3__["default"](),     3 : new _pieces_big_square__WEBPACK_IMPORTED_MODULE_4__["default"](),
    4 : new _pieces_ess__WEBPACK_IMPORTED_MODULE_5__["Ess1"](),       5 : new _pieces_ess__WEBPACK_IMPORTED_MODULE_5__["Ess2"](),        6 : new _pieces_ess__WEBPACK_IMPORTED_MODULE_5__["Ess1"](),       7 : new _pieces_ess__WEBPACK_IMPORTED_MODULE_5__["Ess2"](),
    8 : new _pieces_zee__WEBPACK_IMPORTED_MODULE_6__["Zee1"](),       9 : new _pieces_zee__WEBPACK_IMPORTED_MODULE_6__["Zee2"](),        10 : new _pieces_zee__WEBPACK_IMPORTED_MODULE_6__["Zee1"](),      11 : new _pieces_zee__WEBPACK_IMPORTED_MODULE_6__["Zee2"](),
    12 : new _pieces_long_horiz__WEBPACK_IMPORTED_MODULE_7__["default"](), 13 : new _pieces_long_vert__WEBPACK_IMPORTED_MODULE_8__["default"](),   14 : new _pieces_long_horiz__WEBPACK_IMPORTED_MODULE_7__["default"](), 15 : new _pieces_long_vert__WEBPACK_IMPORTED_MODULE_8__["default"](),
    16 : new _pieces_jay__WEBPACK_IMPORTED_MODULE_10__["Jay1"](),      17 : new _pieces_jay__WEBPACK_IMPORTED_MODULE_10__["Jay2"](),       18 : new _pieces_jay__WEBPACK_IMPORTED_MODULE_10__["Jay3"](),      19 : new _pieces_jay__WEBPACK_IMPORTED_MODULE_10__["Jay4"](),
    20 : new _pieces_ell__WEBPACK_IMPORTED_MODULE_9__["Ell1"](),      21 : new _pieces_ell__WEBPACK_IMPORTED_MODULE_9__["Ell2"](),       22 : new _pieces_ell__WEBPACK_IMPORTED_MODULE_9__["Ell3"](),      23 : new _pieces_ell__WEBPACK_IMPORTED_MODULE_9__["Ell4"](),
    24 : new _pieces_one__WEBPACK_IMPORTED_MODULE_0__["default"](),       25 : new _pieces_one__WEBPACK_IMPORTED_MODULE_0__["default"](),        26 : new _pieces_one__WEBPACK_IMPORTED_MODULE_0__["default"](),       27 : new _pieces_one__WEBPACK_IMPORTED_MODULE_0__["default"](),
    28 : new _pieces_two__WEBPACK_IMPORTED_MODULE_1__["Two1"](),      29 : new _pieces_two__WEBPACK_IMPORTED_MODULE_1__["Two2"](),       30 : new _pieces_two__WEBPACK_IMPORTED_MODULE_1__["Two1"](),      31 : new _pieces_two__WEBPACK_IMPORTED_MODULE_1__["Two2"](),
    32 : new _pieces_three__WEBPACK_IMPORTED_MODULE_2__["Three1"](),    33 : new _pieces_three__WEBPACK_IMPORTED_MODULE_2__["Three2"](),     34 : new _pieces_three__WEBPACK_IMPORTED_MODULE_2__["Three3"](),    35 : new _pieces_three__WEBPACK_IMPORTED_MODULE_2__["Three4"]()
  }

class Game {
  constructor(board) {

    this.score = 0;
    this.board = board;
    this.pieces = {};
    this.selectedPiece = null;
    this.started = false;
    this.atmenu = true;

    //sound effects
    this.select_snd = new Audio("./sound/select.mp3");
    this.drop_snd = new Audio("./sound/line-drop.mp3");
  }

  receivePieces() {
    var num = Object.keys(PIECES).length;

    for (let i = 0; i < 4; i++) {
      let rand_num = Math.floor(Math.random()*(num))

      this.pieces[i] = (PIECES[rand_num])
    }

  }

  clearTiles() {
    this.score += this.board.clearColumns();
    this.score += this.board.clearRows();
  }

  pieceAction(num) {
    let element = document.getElementById("canvas");

    if (this.pieces[num]) {
      this.selectPiece(num);
      element.classList.add("hideMouse");
    } else if (this.pieces[num] === null) {
      this.returnPiece(num);
      element.classList.remove("hideMouse");
    }
    this.select_snd.play();
  }

  selectPiece(num) {
    this.selectedPiece = this.pieces[num]
    this.pieces[num] = null;
  }

  returnPiece(num) {
    if (this.selectedPiece && this.pieces[num] === null) {
      this.pieces[num] = this.selectedPiece;
      this.selectedPiece = null;
    }
  }

  placePiece(coor) {
    if (this.selectedPiece && this.board.is_validMove(coor, this.selectedPiece)) {
      this.board.placePiece(coor, this.selectedPiece);
      this.score += this.selectedPiece.value;
      this.drop_snd.play();
      this.selectedPiece = null;

      this.clearTiles();

      if (Object.values(this.pieces).every(this.isNull)) {
        this.receivePieces();
      };

      let element = document.getElementById("canvas");
      element.classList.remove("hideMouse");

    } else {
      window.alert("invalid move!")
    }

  }

  isNull(el) {
    return el === null;
  }

  checkGameOver() {
    let pieces = Object.values(this.pieces).filter((obj) => obj);

    if (pieces.length === 0 || !!this.selectedPiece) {
      return false;
    };

    for (let i = 0; i < pieces.length; i++) {
      if (this.board.check_forValidMoves(pieces[i])) {
        return false;
      };
    };

    return true;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./javascript/main.js":
/*!****************************!*\
  !*** ./javascript/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./javascript/board.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./javascript/game.js");
//theme credited to Original Tetris





var board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](board);


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
    // requestAnimationFrame( render );
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.strokeStyle = "black";

    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvasEl.width, canvasEl.height);

    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0,535, canvasEl.width, 185);

    // ctx.beginPath();
    // ctx.arc(50,50,25,0,2*Math.PI);
    // ctx.fill();

    ctx.fillStyle = "white";
    ctx.font = "72px Comic San";
    ctx.fillText(`♫`, 0, 58);

    if (music1.paused) {
      ctx.fillStyle = "red";
      ctx.fillText(`/`, 25, 58);
      ctx.fillText(`_`, 15, 29);
    }


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


/***/ }),

/***/ "./javascript/pieces/big_square.js":
/*!*****************************************!*\
  !*** ./javascript/pieces/big_square.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class BigSquare {
  constructor() {
    this.name = 'big_square';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('blue'));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BigSquare);


/***/ }),

/***/ "./javascript/pieces/ell.js":
/*!**********************************!*\
  !*** ./javascript/pieces/ell.js ***!
  \**********************************/
/*! exports provided: Ell1, Ell2, Ell3, Ell4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ell1", function() { return Ell1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ell2", function() { return Ell2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ell3", function() { return Ell3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ell4", function() { return Ell4; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class Ell1 {
  constructor() {
    this.name = 'ell';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [0, 0, this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('green'))
  }

}

class Ell2 {
  constructor() {
    this.name = 'ell';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('green'))
  }

}

class Ell3 {
  constructor() {
    this.name = 'ell';
    this.value = 0;

    this.tiles = [
                  [0, this.fillPiece()],
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('green'))
  }

}

class Ell4 {
  constructor() {
    this.name = 'ell';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), 0, 0],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('green'))
  }

}


/***/ }),

/***/ "./javascript/pieces/ess.js":
/*!**********************************!*\
  !*** ./javascript/pieces/ess.js ***!
  \**********************************/
/*! exports provided: Ess1, Ess2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ess1", function() { return Ess1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ess2", function() { return Ess2; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class Ess1 {
  constructor() {
    this.name = 'ess';
    this.value = 0;

    this.tiles = [
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('violet'))
  }

}

class Ess2 {
  constructor() {
    this.name = 'ess';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), 0],
                  [0, this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('violet'))
  }

}


/***/ }),

/***/ "./javascript/pieces/jay.js":
/*!**********************************!*\
  !*** ./javascript/pieces/jay.js ***!
  \**********************************/
/*! exports provided: Jay1, Jay2, Jay3, Jay4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jay1", function() { return Jay1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jay2", function() { return Jay2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jay3", function() { return Jay3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jay4", function() { return Jay4; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class Jay1 {
  constructor() {
    this.name = 'jay';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0, 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('turquoise'))
  }

}

class Jay2 {
  constructor() {
    this.name = 'jay';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('turquoise'))
  }

}

class Jay3 {
  constructor() {
    this.name = 'jay';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('turquoise'))
  }

}

class Jay4 {
  constructor() {
    this.name = 'jay';
    this.value = 0;

    this.tiles = [
                  [0, 0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('turquoise'))
  }

}


/***/ }),

/***/ "./javascript/pieces/long_horiz.js":
/*!*****************************************!*\
  !*** ./javascript/pieces/long_horiz.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class LongHoriz {
  constructor() {
    this.name = 'longhoriz';
    this.value = 0;

    this.tiles = [
                  [ this.fillPiece() ],
                  [ this.fillPiece() ],
                  [ this.fillPiece() ],
                  [ this.fillPiece() ]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('cyan'))
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LongHoriz);


/***/ }),

/***/ "./javascript/pieces/long_vert.js":
/*!****************************************!*\
  !*** ./javascript/pieces/long_vert.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class LongVert {
  constructor() {
    this.name = 'longvert';
    this.value = 0;

    this.tiles = [
                  [ this.fillPiece(),
                    this.fillPiece(),
                    this.fillPiece(),
                    this.fillPiece() ]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('cyan'))
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LongVert);


/***/ }),

/***/ "./javascript/pieces/one.js":
/*!**********************************!*\
  !*** ./javascript/pieces/one.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class One {
  constructor() {
    this.name = 'one';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('khaki'))
  }

}

/* harmony default export */ __webpack_exports__["default"] = (One);


/***/ }),

/***/ "./javascript/pieces/square.js":
/*!*************************************!*\
  !*** ./javascript/pieces/square.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class Square {
  constructor() {
    this.name = 'square';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('blue'))
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Square);


/***/ }),

/***/ "./javascript/pieces/three.js":
/*!************************************!*\
  !*** ./javascript/pieces/three.js ***!
  \************************************/
/*! exports provided: Three1, Three2, Three3, Three4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Three1", function() { return Three1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Three2", function() { return Three2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Three3", function() { return Three3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Three4", function() { return Three4; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class Three1 {
  constructor() {
    this.name = 'three';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('khaki'))
  }

}

class Three2 {
  constructor() {
    this.name = 'three';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('khaki'))
  }

}

class Three3 {
  constructor() {
    this.name = 'three';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('khaki'))
  }

}

class Three4 {
  constructor() {
    this.name = 'three';
    this.value = 0;

    this.tiles = [
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('khaki'))
  }

}


/***/ }),

/***/ "./javascript/pieces/tile.js":
/*!***********************************!*\
  !*** ./javascript/pieces/tile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Tile {
  constructor(color) {
    this.color = color;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Tile);


/***/ }),

/***/ "./javascript/pieces/two.js":
/*!**********************************!*\
  !*** ./javascript/pieces/two.js ***!
  \**********************************/
/*! exports provided: Two1, Two2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Two1", function() { return Two1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Two2", function() { return Two2; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class Two1 {
  constructor() {
    this.name = 'two';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece()],
                  [this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('orange'))
  }

}

class Two2 {
  constructor() {
    this.name = 'two';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('orange'))
  }

}


/***/ }),

/***/ "./javascript/pieces/zee.js":
/*!**********************************!*\
  !*** ./javascript/pieces/zee.js ***!
  \**********************************/
/*! exports provided: Zee1, Zee2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zee1", function() { return Zee1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zee2", function() { return Zee2; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./javascript/pieces/tile.js");


class Zee1 {
  constructor() {
    this.name = 'zee';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('red'))
  }

}

class Zee2 {
  constructor() {
    this.name = 'zee';
    this.value = 0;

    this.tiles = [
                  [0, this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('red'))
  }

}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map