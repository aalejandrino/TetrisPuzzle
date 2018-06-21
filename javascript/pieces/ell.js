import Tile from "./tile";

export class Ell1 {
  constructor() {
    this.name = 'ell';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [0, 0, this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('green'))
  }

}

export class Ell2 {
  constructor() {
    this.name = 'ell';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('green'))
  }

}

export class Ell3 {
  constructor() {
    this.name = 'ell';
    this.value = 0;

    this.tiles = [
                  [0, this.fillPiece()],
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('green'))
  }

}

export class Ell4 {
  constructor() {
    this.name = 'ell';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), 0, 0],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('green'))
  }

}
