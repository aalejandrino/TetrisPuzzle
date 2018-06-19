import Tile from "./tile";

export class Zee1 {
  constructor() {
    this.name = 'zee';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('red'))
  }

}

export class Zee2 {
  constructor() {
    this.name = 'zee';
    this.value = 0;

    this.tiles = [
                  [0, this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('red'))
  }

}
