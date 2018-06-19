import Tile from "./tile";

export class Three1 {
  constructor() {
    this.name = 'three';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('yellow'))
  }

}

export class Three2 {
  constructor() {
    this.name = 'three';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    return (new Tile('yellow'))
  }

}

export class Three3 {
  constructor() {
    this.name = 'three';

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('yellow'))
  }

}

export class Three4 {
  constructor() {
    this.name = 'three';

    this.tiles = [
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('yellow'))
  }

}
