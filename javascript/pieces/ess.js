import Tile from "./tile";

export class Ess1 {
  constructor() {
    this.name = 'ess';

    this.tiles = [
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    return (new Tile('violet'))
  }

}

export class Ess2 {
  constructor() {
    this.name = 'ess';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), 0],
                  [0, this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('violet'))
  }

}
