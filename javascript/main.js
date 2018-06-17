// Initialize canvas and display splash
document.addEventListener("DOMContentLoaded", ()=>{
  console.log("Hey there and welcome to TetrisPuzzle");

  const canvas = document.getElementById('canvas');
  const body = document.getElementsByTagName('body')[0];
  canvas.width = body.offsetWidth;
  canvas.height = window.innerHeight - 80;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
