import Tile from "./tile";

class Square {
  constructor() {
    this.name = 'square';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('blue'))
  }

}

export default Square;
