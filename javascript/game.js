import Square from './pieces/square';
import BigSquare from './pieces/big_square';
import { Ess1, Ess2 } from './pieces/ess';
import { Zee1, Zee2 } from './pieces/zee';
import LongHoriz from './pieces/long_horiz';
import LongVert from './pieces/long_vert';
import { Ell1, Ell2, Ell3, Ell4 } from './pieces/ell';
import { Jay1, Jay2, Jay3, Jay4 } from './pieces/jay';

  var PIECES = {
    0 : new Square(),    1 : new BigSquare(),
    2 : new Square(),    3 : new BigSquare(),
    4 : new Ess1(),      5 : new Ess2(),
    6 : new Ess1(),      7 : new Ess2(),
    8 : new Zee1(),      9 : new Zee2(),
    10 : new Zee1(),      11 : new Zee2(),
    12 : new LongHoriz(), 13 : new LongVert(),
    14 : new LongHoriz(), 15 : new LongVert(),
    16 : new Jay1(), 17 : new Jay2(),
    18 : new Jay3(), 19 : new Jay4(),
    20 : new Ell1(), 21 : new Ell2(),
    22 : new Ell3(), 23 : new Ell4(),
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

export default Game;
