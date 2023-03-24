function getImg() {
  const panorama = document.getElementById("panorama");
  const imgRange = document.getElementById("imgRange");
  imgRange.addEventListener("input", function () {
    const value = parseInt(this.value);
    if (!isNaN(value)) {
      panorama.style.transform = "translateX(" + value + "px)";
    }
  });
}

getImg();

const resolutions = [
  { width: 425, min: -1000, max: 0 },
  { width: 768, min: -2000, max: 0 },
  { width: 1244, min: -1525, max: 0 },
  { width: Infinity, min: -1525, max: 0 },
];

window.addEventListener("resize", function () {
  const screenWidth = window.innerWidth;
  const rangeElement = document.getElementById("imgRange");
  const { min = 0, max = 0 } =
    resolutions.find((r) => screenWidth <= r.width) || {};

  rangeElement.setAttribute("min", min);
  rangeElement.setAttribute("max", max);
});
