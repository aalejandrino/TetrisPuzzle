import Tile from "./tile";

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
    return (new Tile('lightblue'))
  }

}

export default LongVert;
