import Tile from "./tile";

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
    return (new Tile('blue'))
  }

}

export default Square;
