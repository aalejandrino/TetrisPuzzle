// Initialize canvas and display splash
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey there and welcome to TetrisPuzzle");

  // const canvas = document.getElementById('canvas');
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 750;
  canvasEl.height = 700;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "blue";

  ctx.fillRect(100, 126, 25, 25);
  ctx.fillRect(100, 100, 25, 25);
  ctx.fillRect(126, 100, 25, 25);
  ctx.fillRect(152, 100, 25, 25);

  ctx.fillStyle = "pink";
  ctx.fillRect(200, 100, 25, 25);
  ctx.fillRect(226, 100, 25, 25);
  ctx.fillRect(252, 100, 25, 25);
  ctx.fillRect(278, 100, 25, 25);

  ctx.fillStyle = "green";
  ctx.fillRect(100, 200, 25, 25);
  ctx.fillRect(126, 200, 25, 25);
  ctx.fillRect(100, 226, 25, 25);
  ctx.fillRect(126, 226, 25, 25);

  ctx.rect(100, 126, 25, 25);
  ctx.rect(100, 100, 25, 25);
  ctx.rect(126, 100, 25, 25);
  ctx.rect(152, 100, 25, 25);
  ctx.rect(200, 100, 25, 25);
  ctx.rect(226, 100, 25, 25);
  ctx.rect(252, 100, 25, 25);
  ctx.rect(278, 100, 25, 25);
  ctx.rect(100, 200, 25, 25);
  ctx.rect(126, 200, 25, 25);
  ctx.rect(100, 226, 25, 25);
  ctx.rect(126, 226, 25, 25);
  ctx.strokeStyle="#000000";
  ctx.stroke();


});
