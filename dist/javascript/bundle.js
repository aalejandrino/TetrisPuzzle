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

  }

  createGrid() {
    let a = [];
    for (let i = 0; i < 10; i++) {
        a.push(new Array(10).fill(0));
    }

    this.grid = a;
  }

  fillTiles(coord, piece) {
    for (let i = 0; i < piece.tiles.length; i++) {
      for (let j = 0; j < (piece.tiles[0]).length; j++) {
        this.grid[coord[0] + i][coord[1] + j] = piece.tiles[i][j]
      }
    }
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

    return score;
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
/* harmony import */ var _pieces_square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pieces/square */ "./javascript/pieces/square.js");
/* harmony import */ var _pieces_big_square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieces/big_square */ "./javascript/pieces/big_square.js");
/* harmony import */ var _pieces_ess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pieces/ess */ "./javascript/pieces/ess.js");
/* harmony import */ var _pieces_zee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pieces/zee */ "./javascript/pieces/zee.js");
/* harmony import */ var _pieces_long_horiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pieces/long_horiz */ "./javascript/pieces/long_horiz.js");
/* harmony import */ var _pieces_long_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pieces/long_vert */ "./javascript/pieces/long_vert.js");
/* harmony import */ var _pieces_ell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pieces/ell */ "./javascript/pieces/ell.js");
/* harmony import */ var _pieces_jay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pieces/jay */ "./javascript/pieces/jay.js");









  var PIECES = {
    0 : new _pieces_square__WEBPACK_IMPORTED_MODULE_0__["default"](),    1 : new _pieces_big_square__WEBPACK_IMPORTED_MODULE_1__["default"](),
    2 : new _pieces_square__WEBPACK_IMPORTED_MODULE_0__["default"](),    3 : new _pieces_big_square__WEBPACK_IMPORTED_MODULE_1__["default"](),
    4 : new _pieces_ess__WEBPACK_IMPORTED_MODULE_2__["Ess1"](),      5 : new _pieces_ess__WEBPACK_IMPORTED_MODULE_2__["Ess2"](),
    6 : new _pieces_ess__WEBPACK_IMPORTED_MODULE_2__["Ess1"](),      7 : new _pieces_ess__WEBPACK_IMPORTED_MODULE_2__["Ess2"](),
    8 : new _pieces_zee__WEBPACK_IMPORTED_MODULE_3__["Zee1"](),      9 : new _pieces_zee__WEBPACK_IMPORTED_MODULE_3__["Zee2"](),
    10 : new _pieces_zee__WEBPACK_IMPORTED_MODULE_3__["Zee1"](),      11 : new _pieces_zee__WEBPACK_IMPORTED_MODULE_3__["Zee2"](),
    12 : new _pieces_long_horiz__WEBPACK_IMPORTED_MODULE_4__["default"](), 13 : new _pieces_long_vert__WEBPACK_IMPORTED_MODULE_5__["default"](),
    14 : new _pieces_long_horiz__WEBPACK_IMPORTED_MODULE_4__["default"](), 15 : new _pieces_long_vert__WEBPACK_IMPORTED_MODULE_5__["default"](),
    16 : new _pieces_jay__WEBPACK_IMPORTED_MODULE_7__["Jay1"](), 17 : new _pieces_jay__WEBPACK_IMPORTED_MODULE_7__["Jay2"](),
    18 : new _pieces_jay__WEBPACK_IMPORTED_MODULE_7__["Jay3"](), 19 : new _pieces_jay__WEBPACK_IMPORTED_MODULE_7__["Jay4"](),
    20 : new _pieces_ell__WEBPACK_IMPORTED_MODULE_6__["Ell1"](), 21 : new _pieces_ell__WEBPACK_IMPORTED_MODULE_6__["Ell2"](),
    22 : new _pieces_ell__WEBPACK_IMPORTED_MODULE_6__["Ell3"](), 23 : new _pieces_ell__WEBPACK_IMPORTED_MODULE_6__["Ell4"](),
  }

class Game {
  constructor(board) {

    this.score = 0;
    this.board = board;
    this.pieces = {}

  }

  receivePieces() {
    var num = Object.keys(PIECES).length;

    for (let i = 0; i < 4; i++) {
      let rand_num = Math.floor(Math.random()*(num))

      this.pieces[i] = (PIECES[rand_num])
    }

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
/* harmony import */ var _pieces_square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pieces/square */ "./javascript/pieces/square.js");
/* harmony import */ var _pieces_big_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pieces/big_square */ "./javascript/pieces/big_square.js");
/* harmony import */ var _pieces_long_horiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pieces/long_horiz */ "./javascript/pieces/long_horiz.js");
/* harmony import */ var _pieces_long_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pieces/long_vert */ "./javascript/pieces/long_vert.js");
/* harmony import */ var _pieces_zee__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pieces/zee */ "./javascript/pieces/zee.js");
/* harmony import */ var _pieces_ell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pieces/ell */ "./javascript/pieces/ell.js");
/* harmony import */ var _pieces_jay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pieces/jay */ "./javascript/pieces/jay.js");










// Initialize canvas and display splash

var board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();

var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](board);
var square = new _pieces_square__WEBPACK_IMPORTED_MODULE_2__["default"]();
var bigsquare = new _pieces_big_square__WEBPACK_IMPORTED_MODULE_3__["default"]();
var longhoriz = new _pieces_long_horiz__WEBPACK_IMPORTED_MODULE_4__["default"]();
var longvert = new _pieces_long_vert__WEBPACK_IMPORTED_MODULE_5__["default"]();
var jay1 = new _pieces_jay__WEBPACK_IMPORTED_MODULE_8__["Jay4"]();
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
board.clearRows();

game.receivePieces();


document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey there and welcome to TetrisPuzzle");
  window.game = game;

  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 750;
  canvasEl.height = 700;


  const ctx = canvasEl.getContext("2d");
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


});


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

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('blue'))
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

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [0, 0, this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('green'))
  }

}

class Ell2 {
  constructor() {
    this.name = 'ell';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('green'))
  }

}

class Ell3 {
  constructor() {
    this.name = 'ell';

    this.tiles = [
                  [0, this.fillPiece()],
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('green'))
  }

}

class Ell4 {
  constructor() {
    this.name = 'ell';

    this.tiles = [
                  [this.fillPiece(), 0, 0],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
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

    this.tiles = [
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('violet'))
  }

}

class Ess2 {
  constructor() {
    this.name = 'ess';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), 0],
                  [0, this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
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

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0, 0]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('indigo'))
  }

}

class Jay2 {
  constructor() {
    this.name = 'jay';

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('indigo'))
  }

}

class Jay3 {
  constructor() {
    this.name = 'jay';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('indigo'))
  }

}

class Jay4 {
  constructor() {
    this.name = 'jay';

    this.tiles = [
                  [0, 0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('indigo'))
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

    this.tiles = [
                  [ this.fillPiece() ],
                  [ this.fillPiece() ],
                  [ this.fillPiece() ],
                  [ this.fillPiece() ]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('lightblue'))
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

    this.tiles = [
                  [ this.fillPiece(),
                    this.fillPiece(),
                    this.fillPiece(),
                    this.fillPiece() ]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('lightblue'))
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LongVert);


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

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('blue'))
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Square);


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
    this.value = 1;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Tile);


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

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('red'))
  }

}

class Zee2 {
  constructor() {
    this.name = 'zee';

    this.tiles = [
                  [0, this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    return (new _tile__WEBPACK_IMPORTED_MODULE_0__["default"]('red'))
  }

}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map