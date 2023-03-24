const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");

canvas.width = 559;
canvas.height = 593;

let isPainting = false;
let lineWidth = 5;

const draw = (e) => {
  if (!isPainting) {
    return;
  }

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#f3e261";

  const canvasOffsetX = canvas.offsetLeft;
  const canvasOffsetY = canvas.offsetTop;
  const x = e.clientX - canvasOffsetX;
  const y = e.clientY - canvasOffsetY + window.scrollY;

  ctx.lineTo(x, y);
  ctx.stroke();
};

canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
  const canvasOffsetX = canvas.offsetLeft;
  const canvasOffsetY = canvas.offsetTop;
  const x = e.clientX - canvasOffsetX;
  const y = e.clientY - canvasOffsetY + window.scrollY;
  ctx.beginPath();
  ctx.moveTo(x, y);
});

canvas.addEventListener("mouseup", (e) => {
  isPainting = false;
});

canvas.addEventListener("mousemove", draw);
