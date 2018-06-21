//theme credited to Original Tetris

import One from './pieces/one';
import { Two1, Two2 } from './pieces/two';
import { Three1, Three2, Three3, Three4 } from './pieces/three';
import Square from './pieces/square';
import BigSquare from './pieces/big_square';
import { Ess1, Ess2 } from './pieces/ess';
import { Zee1, Zee2 } from './pieces/zee';
import LongHoriz from './pieces/long_horiz';
import LongVert from './pieces/long_vert';
import { Ell1, Ell2, Ell3, Ell4 } from './pieces/ell';
import { Jay1, Jay2, Jay3, Jay4 } from './pieces/jay';

  var PIECES = {
    0 : new Square(),     1 : new BigSquare(),   2 : new Square(),     3 : new BigSquare(),
    4 : new Ess1(),       5 : new Ess2(),        6 : new Ess1(),       7 : new Ess2(),
    8 : new Zee1(),       9 : new Zee2(),        10 : new Zee1(),      11 : new Zee2(),
    12 : new LongHoriz(), 13 : new LongVert(),   14 : new LongHoriz(), 15 : new LongVert(),
    16 : new Jay1(),      17 : new Jay2(),       18 : new Jay3(),      19 : new Jay4(),
    20 : new Ell1(),      21 : new Ell2(),       22 : new Ell3(),      23 : new Ell4(),
    24 : new One(),       25 : new One(),        26 : new One(),       27 : new One(),
    28 : new Two1(),      29 : new Two2(),       30 : new Two1(),      31 : new Two2(),
    32 : new Three1(),    33 : new Three2(),     34 : new Three3(),    35 : new Three4()
  }

class Game {
  constructor(board) {

    this.score = 0;
    this.board = board;
    this.pieces = {};
    this.selectedPiece = null;
    this.started = false;

    // this.board = this.board.clearRows.bind(this);
    // this.board = this.board.clearColumns.bind(this);

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

    if (pieces.length === 0) {
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

export default Game;
