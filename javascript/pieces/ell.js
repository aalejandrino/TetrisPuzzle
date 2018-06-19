import Tile from "./tile";

export class Ell1 {
  constructor() {
    this.name = 'ell';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [0, 0, this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('green'))
  }

}

export class Ell2 {
  constructor() {
    this.name = 'ell';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    return (new Tile('green'))
  }

}

export class Ell3 {
  constructor() {
    this.name = 'ell';

    this.tiles = [
                  [0, this.fillPiece()],
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('green'))
  }

}

export class Ell4 {
  constructor() {
    this.name = 'ell';

    this.tiles = [
                  [this.fillPiece(), 0, 0],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('green'))
  }

}
