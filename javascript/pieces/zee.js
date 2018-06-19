import Tile from "./tile";

export class Zee1 {
  constructor() {
    this.name = 'zee';

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('red'))
  }

}

export class Zee2 {
  constructor() {
    this.name = 'zee';

    this.tiles = [
                  [0, this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    return (new Tile('red'))
  }

}
