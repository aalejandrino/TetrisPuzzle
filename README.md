# TetrisPuzzle
TetrisPuzzle is a fun and relaxing puzzle game inspired by our legendary, childhood game - Tetris. This is ideal for all ages!

## Live Demo
You can access the working demo here:
[Live Page](https://adobofrenzy.github.io/TetrisPuzzle/)

## Table of Contents
  * [Features]()
  * [Technologies]()
  * [Canvas Coordinates]()
  * [Credits]()
  * [Future Functionalities]()


## Features
  * More information here

## Technologies
  * [Vanilla Javascript](https://www.youtube.com/watch?v=-OqZzV__hts) (Video Link) - Plain javascript without the use of JQuery can still be powerful in writing web applications.
  * [Canvas](https://en.wikipedia.org/wiki/Canvas_element) - A part of HTML5 that allows dynamic, scriptable rendering of shapes and images.

## Canvas Coordinates
  * This game application relies on the event listener for clicks. Certain areas of the canvas, which the user may perceive as   "buttons", are actually assigned a minimum and maximum of X and Y canvas coordinates (offsetX and offsetY). Whenever the user clicks on one of these areas, certain methods are called. This sets up the user-to-game interaction.

  ```JS
 canvasEl.addEventListener('click', (e) => {

    // on/off music button during game play
    if (e.offsetY < 63 && e.offsetX < 50) {
      if (music1.paused) {
        music1.play();
      } else {
        music1.pause();
      }
    }

    // button to start playing
    if (!game.started && (e.offsetY > 525 && e.offsetY < 725)
                      && (e.offsetX > 275 && e.offsetX < 475)) {
      beginGame();
    }

    if (!game.started && (e.offsetY > 625 && e.offsetY < 725)
                      && (e.offsetX > 625 && e.offsetX < 725)) {

      if (game.atmenu === true) {
        game.atmenu = false;
        renderHowToPlay(ctx);
      } else {
        game.atmenu = true;
        renderMenu(ctx);
      }
    }

    // picks up or returns a puzzle piece
    if (e.offsetY > 550 && e.offsetY < 700) {
      if (e.offsetX > 40 && e.offsetX < 175) {
        game.pieceAction(0);

      } else if (e.offsetX > 225 && e.offsetX < 360) {
        game.pieceAction(1);

      } else if (e.offsetX > 415 && e.offsetX < 550) {
        game.pieceAction(2);

      } else if (e.offsetX > 600 && e.offsetX < 740) {
        game.pieceAction(3);

      }

    }

// place pieces on board
  if (e.offsetX > 150 && e.offsetX < 600 && e.offsetY > 75 && e.offsetY < 525) {

    if (game.selectedPiece) {
      let x = Math.floor((e.offsetX - 150)/45);
      let y = Math.floor((e.offsetY - 75)/45);
      game.placePiece([x,y]);

    } else {
      console.log("please select a piece!");
    }

  }

  }, false);
  ```

## Credits

  * [giphy.com](https://giphy.com/gifs/animation-animated-gif-xTiTnxpQ3ghPiB2Hp6) - Awesome backgrounds!
  * [Tetris Orchestra](https://www.youtube.com/watch?v=wBmZAg8HxfY) - Games in Concert playing Tetris!

## Future Functionalities

  - [ ] Be able to pause the game which brings up an option to restart, resume, or go to the main menu.
  - [ ] Include a "Best Scores" which records the name and score of players. (Top 10)