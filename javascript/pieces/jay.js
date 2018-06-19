import Tile from "./tile";

export class Jay1 {
  constructor() {
    this.name = 'jay';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0, 0]
                ];
  }

  fillPiece() {
    return (new Tile('indigo'))
  }

}

export class Jay2 {
  constructor() {
    this.name = 'jay';

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('indigo'))
  }

}

export class Jay3 {
  constructor() {
    this.name = 'jay';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('indigo'))
  }

}

export class Jay4 {
  constructor() {
    this.name = 'jay';

    this.tiles = [
                  [0, 0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('indigo'))
  }

}
