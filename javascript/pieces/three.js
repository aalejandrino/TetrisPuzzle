import Tile from "./tile";

export class Three1 {
  constructor() {
    this.name = 'three';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [0, this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('khaki'))
  }

}

export class Three2 {
  constructor() {
    this.name = 'three';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()],
                  [this.fillPiece(), 0]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('khaki'))
  }

}

export class Three3 {
  constructor() {
    this.name = 'three';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), 0],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('khaki'))
  }

}

export class Three4 {
  constructor() {
    this.name = 'three';
    this.value = 0;

    this.tiles = [
                  [0, this.fillPiece()],
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('khaki'))
  }

}
