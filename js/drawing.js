const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = "559";
canvas.height = "593";

let isPainting = false;
let lineWidth = "5";

const draw = (e) => {
  if (!isPainting) {
    return;
  }

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#f3e261";

  ctx.lineTo(
    e.clientX - canvasOffsetX,
    (e.clientY - canvasOffsetY) + window.scrollY
  );
  ctx.stroke();
};

canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
  startX = e.clientX - canvasOffsetX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
  isPainting = false;
  ctx.stroke();
  ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);
