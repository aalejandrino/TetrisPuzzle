// Initialize canvas and display splash
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey there and welcome to TetrisPuzzle");

  // const canvas = document.getElementById('canvas');
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 750;
  canvasEl.height = 700;

  const ctx = canvasEl.getContext("2d");

  ctx.fillStyle = "lightgrey";
  for (let i = 150; i < 600; i=i+45) {
    for (let j = 75; j < 525; j=j+45) {
      ctx.fillRect(i, j, 45, 45);
      ctx.rect(i, j, 45, 45);
    }
  }

  ctx.fillStyle = "blue";
  ctx.fillRect(100, 600, 45, 45);
  ctx.fillRect(100, 555, 45, 45);
  ctx.fillRect(145, 555, 45, 45);
  ctx.fillRect(190, 555, 45, 45);
  ctx.rect(100, 600, 45, 45);
  ctx.rect(100, 555, 45, 45);
  ctx.rect(145, 555, 45, 45);
  ctx.rect(190, 555, 45, 45);


  ctx.strokeStyle="#000000";
  ctx.stroke();




});
