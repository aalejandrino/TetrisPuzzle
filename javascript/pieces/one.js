import Tile from "./tile";

class One {
  constructor() {
    this.name = 'one';

    this.tiles = [
                  [this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('khaki'))
  }

}

export default One;
