import Tile from "./tile";

export class Two1 {
  constructor() {
    this.name = 'two';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece()],
                  [this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('orange'))
  }

}

export class Two2 {
  constructor() {
    this.name = 'two';
    this.value = 0;

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    this.value += 1;
    return (new Tile('orange'))
  }

}
