let slideIndex = 1;
showSlides(slideIndex);

const currentSlide = (n) => showSlides((slideIndex = n));

function showSlides(n) {
  const slides = document.querySelectorAll(".pictures__slider__pics");
  const dots = document.querySelectorAll(".js-dot");

  slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;

  slides.forEach(
    (slide) =>
      (slide.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`)
  );
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex - 1].classList.add("active");
}

const sliderWidth =
  document.querySelector(".slider").offsetWidth -
  document.querySelector(".slider-dot").offsetWidth;

document.querySelector(".panorama").style.width = "2000px";

document
  .querySelector(".slider-dot")
  .addEventListener("mousedown", function (e) {
    const sliderDot = this;
    const slider = document.querySelector(".slider");
    const startX = e.pageX - slider.offsetLeft - sliderDot.offsetLeft;

    function moveSlider(e) {
      let newX = e.pageX - slider.offsetLeft - startX;
      newX = Math.max(0, Math.min(newX, sliderWidth));

      sliderDot.style.transform = `translateX(${newX}px)`;
      document.querySelector(".panorama").style.left = `${
        -newX * (2000 / 400)
      }px`;
    }

    function stopSlider() {
      document.removeEventListener("mousemove", moveSlider);
      document.removeEventListener("mouseup", stopSlider);
    }

    document.addEventListener("mousemove", moveSlider);
    document.addEventListener("mouseup", stopSlider);
  });

const canvas = document.getElementByID("drawing-board");
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

toolbar.addEventListener("click", (e) => {
  if (e.target.id === "clear") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

toolbar.addEventListener("change", (e) => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }

  if (e.target.id === "lineWidth") {
    lineWidth = e.target.value;
  }
});

const draw = (e) {
  if (!isDrawing) {
    return;
  }
  ctx.beginPath();
  // ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX - canvasOffsetX, e.offsetY);
  // ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  // ctx.lineJoin = lineJoin;
  ctx.stroke();
  // [lastX, lastY] = [e.offsetX, e.offsetY];
};

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", e => {
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


