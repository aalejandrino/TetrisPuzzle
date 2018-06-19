import Tile from "./tile";

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
    return (new Tile('cyan'))
  }

}

export default LongVert;
