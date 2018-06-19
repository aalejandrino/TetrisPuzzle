import Tile from "./tile";

class LongHoriz {
  constructor() {
    this.name = 'longhoriz';
    this.value = 0;

    this.tiles = [
                  [ this.fillPiece() ],
                  [ this.fillPiece() ],
                  [ this.fillPiece() ],
                  [ this.fillPiece() ]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('cyan'))
  }

}

export default LongHoriz;
