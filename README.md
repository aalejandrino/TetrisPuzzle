## TetrisPuzzle

### Background and Overview
TetrisPuzzle is a fun and relaxing puzzle game inspired by our legendary, childhood game - Tetris. This is ideal for all ages!

On the main page, users can start the game or watch a quick & easy demo on how to play the game.

When the game starts, the player starts off with a 10x10 board and four random puzzle pieces. These pieces are placed strategically on the board so that the player can fit the next random four pieces that comes in. Note that the pieces <strong>can't</strong> be rotated. This process is repeated until there are no more moves available (game over).

To score points, the player automatically gets 1 point per square filled (a 3-size piece = 3pts, a 4-size piece = 4pts). In addition to this, when the player fills a whole row or column (1x10 or 10x1 ), that row/column is cleared and the player earns 10 points.

### MVPs and Bonuses
In TetrisPuzzle, users will be able to:

- [ ] Start the game with a 10x10 board and 4 random puzzle pieces.
- [ ] Place the puzzle pieces on the board.
- [ ] Filled rows and columns disappear to make space for the user.
- [ ] Obtain a calculated score based on the user's performance.
- [ ] Pause the game which brings up an option to restart, resume, or go to the main menu.

Bonuses:
- View a demo to teach them how to play.
- Add the functionality to rotate pieces? (Not sure yet, might make the game too easy)
- Add background music and sound when placing pieces.
- Turn the background music/sound on and off.
- Include a "Best Scores" which records the name and score of players. (top 10?)

### Wireframes
The main menu will consist of a play button and a help button. Possibly nav links to the game's Github and my Linkedin page.
![](https://s6.postimg.cc/mers6ir5d/tetrispuzzle_main_menu.png)

The four random puzzle pieces are located at the bottom of the screen and the player can select any and place them in the 10x10 board. Once all pieces are placed, the player will receive four new ones.

The current score is located at the top and the pause button on the top right which will open up a modal for the restart, resume, and main menu options.
![](https://s6.postimg.cc/xr4dob7k1/board.png)


### Architecture and Technologies
The project will include the following technologies:
  * Vanilla JavaScript for overall structure and game logic,
  * HTML5 Canvas for DOM manipulation and rendering,
  * Webpack to bundle and serve up the various scripts.
  * More, etc

The following will also be involved in the project:
  * `board.js`: this file will handle the logic for creating and updating the DOM elements.
  * `pieces.js`: this file will manage the puzzle pieces (size, color, orientation, selection)


### Project Timeline

**Over the weekend**
- [x] Play some javascript games and come up with an idea of what to do for the project
- [ ] Do some research on how to start a javascript game project
- [x] Set up a repo in Github and begin creating some files (create a new project folder and set up `webpack.config.js`, `package.json`, and the basic `entry file`)
- [x] Finish Project proposal for jabberwocky

**Day 1:** Setup necessary files and get webpack up and running. Continue working on `webpack.config.js`, `package.json`,  and `entry file` if necessary - finish today if possible. Continue doing research/ask around on how to begin and setup the project.

**Day 2:** Create additional files necessary for the project. Such as `board.js`, `pieces.js`, `game.js`. Think back during our days when we used Ruby to create games. How each file and classes organized the game.

**Day 3:** Work on rendering the game on the canvas. Style with css.

**Day 4:** Lastly, work on user controls. They should be able to click on a piece to pick it up and click again to drop it on the board. Work on any final details.



### Bonus MVPS
Work on these if time permits:
- [ ] View a demo to teach them how to play.
- [ ] Add the functionality to rotate pieces? (Not sure yet, might make the game too easy)
- [ ] Add background music and sound when placing pieces.
- [ ] Turn the background music/sound on and off.
- [ ] Include a "Best Scores" which records the name and score of players. (top 10?)
