import Tile from "./tile";

export class Ess1 {
  constructor() {
    this.name = 'ess';
    this.value = 0;

    this.tiles = [
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('violet'))
  }

}

export class Ess2 {
  constructor() {
    this.name = 'ess';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), 0],
                  [0, this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('violet'))
  }

}
