import Tile from "./tile";

export class Two1 {
  constructor() {
    this.name = 'two';

    this.tiles = [
                  [this.fillPiece()],
                  [this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('orange'))
  }

}

export class Two2 {
  constructor() {
    this.name = 'two';

    this.tiles = [
                  [this.fillPiece(), this.fillPiece()]
                ];
  }

  fillPiece() {
    return (new Tile('orange'))
  }

}
