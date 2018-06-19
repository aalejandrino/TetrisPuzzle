import Tile from "./tile";

export class Jay1 {
  constructor() {
    this.name = 'jay';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0, 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('turquoise'))
  }

}

export class Jay2 {
  constructor() {
    this.name = 'jay';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('turquoise'))
  }

}

export class Jay3 {
  constructor() {
    this.name = 'jay';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('turquoise'))
  }

}

export class Jay4 {
  constructor() {
    this.name = 'jay';
    this.value = 0;

    this.tiles = [
                  [0, 0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('turquoise'))
  }

}
