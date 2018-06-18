class Board {
  constructor() {
    // this.ctx = ctx; //for rendering?
    this.createGrid();


  }

  createGrid() {
    let a = [];
    for (let i = 0; i < 10; i++) {
      a.push(new Array(10));
    }

    this.grid = a;
  }

}
