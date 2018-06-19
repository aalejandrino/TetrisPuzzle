import Tile from "./tile";

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
    return (new Tile('blue'));
  }

}

export default BigSquare;
