var greentable = new Image();
greentable.src = "images/green_tablecloth.jpg";

var woodsq = new Image();
woodsq.src = "images/wood_square.png";


export const renderField = (ctx) => {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(greentable, 0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.strokeStyle = "goldenrod";
    ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeRect(1, 0, ctx.canvas.width - 2, ctx.canvas.height - 1);
}


export const renderMusicNote = (ctx, music) => {
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.font = "72px Comic San";
    ctx.fillText(`♫`, 0, 58);

    if (music.paused) {
        ctx.fillStyle = "red";
        ctx.fillText(`/`, 25, 58);
        ctx.fillText(`_`, 15, 29);
    }
}


export const renderScore = (ctx, score) => {
    ctx.fillStyle = "white";
    ctx.font = "42px Comic San";
    ctx.fillText(`Score: ${score}`, 275, 50);
}


export const renderGridAndPieces = (ctx, game, board, shiftColors) => {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {

            if (board.grid[i][j] === 0) {
                ctx.drawImage(woodsq, ((i * 45) + 150), (j * 45) + 75, 45, 45);
                // ctx.fillStyle = "white";

            } else if (shiftColors > 100) {
                ctx.fillStyle = board.grid[i][j].color;
                ctx.fillRect(((i * 45) + 150), (j * 45) + 75, 45, 45);
                // ctx.fillStyle = "silver";
            } else {
                // ctx.fillStyle = "silver";
                ctx.fillStyle = "dark" + board.grid[i][j].color;
                ctx.fillRect(((i * 45) + 150), (j * 45) + 75, 45, 45);
            }

            // ctx.fillRect(((i*45) + 150), (j*45) + 75, 45, 45);
            ctx.strokeRect(((i * 45) + 150), (j * 45) + 75, 45, 45);
        }
    }


    for (let n = 0; n < 4; n++) {
        let current_piece = game.pieces[n];

        if (current_piece === null) {
            continue;
        } else {

            for (let i = 0; i < current_piece.tiles.length; i++) {
                for (let j = 0; j < current_piece.tiles[0].length; j++) {

                    if (current_piece.tiles[i][j] === 0) {
                        continue;
                    } else {
                        ctx.fillStyle = current_piece.tiles[i][j].color;
                        ctx.fillRect((i * 45) + 40 + (n * 187.5), (j * 45) + 555, 45, 45)
                        ctx.strokeRect((i * 45) + 40 + (n * 187.5), (j * 45) + 555, 45, 45)
                    };
                }
            }
        }
    }
    
}


export const renderSelected = (ctx, game) => {
    if (game.selectedPiece) {

        for (let i = 0; i < game.selectedPiece.tiles.length; i++) {
            for (let j = 0; j < game.selectedPiece.tiles[0].length; j++) {

                if (game.selectedPiece.tiles[i][j] === 0) {
                    continue;
                } else {
                    ctx.fillStyle = game.selectedPiece.tiles[i][j].color;
                    ctx.fillRect(window.offsetX - 22.5 + (i * 45), window.offsetY - 22.5 + (j * 45), 45, 45);
                    ctx.strokeRect(window.offsetX - 22.5 + (i * 45), window.offsetY - 22.5 + (j * 45), 45, 45);
                }
            }
        }
    }
}


export const renderMenu = (ctx) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.font = "60px Comic San";
    // ctx.fillText(`START`, 300, 625);
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "silver";
    ctx.beginPath();
    ctx.arc(375, 625, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(335, 560);
    ctx.lineTo(335, 690);
    ctx.lineTo(445, 625);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "lightblue";
    ctx.beginPath();
    ctx.arc(675, 675, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "72px Comic San";
    ctx.fillText(`?`, 660, 695);

    var title_img = new Image();
    title_img.onload = function () {
        ctx.drawImage(title_img, -140, 0);
    }

    title_img.src = "images/tetris-title.png";

}


export const renderHowToPlay = (ctx) => {
    debugger
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "lightblue";
    ctx.beginPath();
    ctx.arc(675, 675, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "36px Comic San";
    ctx.fillText(`Back`, 635, 685);

    var img1 = new Image();
    img1.onload = function () {
        ctx.drawImage(img1, 0, 0, 475, 285);
    }
    img1.src = "images/place_pieces.png";

    var img3 = new Image();
    img3.onload = function () {
        ctx.drawImage(img3, 500, 200, 200, 400);
    }
    img3.src = "images/clear_column.png";

    var img2 = new Image();
    img2.onload = function () {
        ctx.drawImage(img2, 25, 325, 450, 160);
    }
    img2.src = "images/clear_row.png";

    var img4 = new Image();
    img4.onload = function () {
        ctx.drawImage(img4, 0, 590, 450, 160);
    }
    img4.src = "images/gameover.png";
}