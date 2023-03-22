const canvas = document.getElementById("drawing-board");
const toolbar = document.getElementById("toolbar");
const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isDrawing = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener("click", e => {
  if (e.target.id === "clear") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

toolbar.addEventListener("change", e => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }

  if (e.target.id === "lineWidth") {
    lineWidth = e.target.value;
  }
});

const draw = (e) => {
  if (!isDrawing) {
    return;
  }
  ctx.beginPath();
  // ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX - canvasOffsetX, e.offsetY);
  // ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  // ctx.lineJoin = lineJoin;
  ctx.stroke();
  // [lastX, lastY] = [e.offsetX, e.offsetY];
};

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  ctx.stroke();
  ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

// let lineColor = "black";
// let lineCap = "round";
// let lineJoin = "round";
// let lastX = 0;
// let lastY = 0;
