import Tile from "./tile";

class LongHoriz {
  constructor() {
    this.name = 'longhoriz';

    this.tiles = [
                  [ this.fillPiece() ],
                  [ this.fillPiece() ],
                  [ this.fillPiece() ],
                  [ this.fillPiece() ]
                ];
  }

  fillPiece() {
    return (new Tile('cyan'))
  }

}

export default LongHoriz;
