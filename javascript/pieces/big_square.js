import Tile from "./tile";

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
    return (new Tile('blue'))
  }

}

export default BigSquare;
