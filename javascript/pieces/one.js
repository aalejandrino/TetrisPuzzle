import Tile from "./tile";

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
    return (new Tile('khaki'))
  }

}

export default One;
