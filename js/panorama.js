function getImg() {
  const panorama = document.getElementById("panorama");
  const imgRange = document.getElementById("imgRange");
  imgRange.addEventListener("input", function () {
    const value = this.value;
    panorama.style.transform = "translateX(" + value + "px)";
  });
}

getImg();
