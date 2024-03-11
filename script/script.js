//canvas definition
var canvas=document.querySelector("canvas");
var context=canvas.getContext("2d");

canvas.width="320";
canvas.height="240";


let isPainting = false;
let startPaintX, startPaintY;

canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
  startPaintX = e.clientX - canvas.offsetLeft;
  startPaintY = e.clientY - canvas.offsetTop;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPainting) {
    draw(e);
  }
});

canvas.addEventListener("mouseup", () => {
  isPainting = false;
});

const draw = (e) => {
  context.lineWidth = 5;
  context.lineCap = "round";
  context.strokeStyle = "#000";

  context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  context.stroke();
  context.beginPath();
  context.moveTo(startPaintX, startPaintY);

  // Update the starting position of the line
  startPaintX = e.clientX - canvas.offsetLeft;
  startPaintY = e.clientY - canvas.offsetTop;
};