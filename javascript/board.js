class Board {

  constructor() {
    // this.ctx = ctx; //for rendering?
    this.createGrid();
    
    //sound effects
    this.remove_snd = new Audio("./sound/line-removal4.mp3");
  }

  createGrid() {
    let a = [];
    for (let i = 0; i < 10; i++) {
        a.push(new Array(10).fill(0));
    }

    this.grid = a;
  }

  placePiece(coord, piece) {
    if (this.is_validMove(coord, piece)) {
      for (let i = 0; i < piece.tiles.length; i++) {
        for (let j = 0; j < (piece.tiles[0]).length; j++) {
          let current_tile = this.grid[coord[0] + i][coord[1] + j];
          let new_tile = piece.tiles[i][j];

          if (current_tile === 0 && new_tile !== 0) {
            this.grid[coord[0] + i][coord[1] + j] = new_tile;
          }
        }
      }
    }
  }

  is_validMove(coord, piece) {
    for (let i = 0; i < piece.tiles.length; i++) {
      for (let j = 0; j < (piece.tiles[0]).length; j++) {
        if ((coord[0] + piece.tiles.length-1) > 9 || (coord[1] + piece.tiles[0].length-1) > 9) {
          return false;
        }

        let current_tile = this.grid[coord[0] + i][coord[1] + j];
        let new_tile = piece.tiles[i][j];

        if (current_tile !== 0 && new_tile !== 0) {
          return false;
        }
      }
    }

    return true;
  }

  check_forValidMoves(piece) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.is_validMove([i,j], piece)) {
          return true;
        }
      }
    }

    return false;
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

    if (score) {
      this.remove_snd.play();
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

    if (score) {
      this.remove_snd.play();
    }

    return score;
  }

  clearColumn(colNum) {
    this.grid[colNum].fill(0)
  }



}


export default Board;
