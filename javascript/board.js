class Board {

  constructor() {
    // this.ctx = ctx; //for rendering?
    this.createGrid();

  }

  createGrid() {
    let a = [];
    for (let i = 0; i < 10; i++) {
        a.push(new Array(10).fill(0));
    }

    this.grid = a;
  }

  fillTiles(coord, piece) {
    for (let i = 0; i < piece.tiles.length; i++) {
      for (let j = 0; j < (piece.tiles[0]).length; j++) {
        this.grid[coord[0] + i][coord[1] + j] = piece.tiles[i][j]
      }
    }
  }

  checkForTiles(el) {
    return el !== 0;
  }

  clearRows() {
    let score = 0;

    for (let j = 0; j < 10; j++) {
      let check_row = [];

      for (let i = 0; i < 10; i++) {
        check_row.push(this.grid[i][j]);
      }

      if (check_row.every(this.checkForTiles)) {
        this.clearRow(j);
        score += 10;
      }
    }

    return score;
  }

  clearRow(rowNum) {
    for (let i = 0; i < 10; i++) {
      this.grid[i][rowNum] = 0;
    }
  }

  clearColumns() {
    let score = 0;

    this.grid.forEach(column => {
      if (column.every(this.checkForTiles)) {
        column.fill(0);
        score += 10;
      }
    })

    return score;
  }



}


export default Board;
