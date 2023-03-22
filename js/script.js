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

// const sliderWidth =
//   document.querySelector(".slider").offsetWidth -
//   document.querySelector(".slider-dot").offsetWidth;

// document.querySelector(".panorama").style.width = "2000px";

// document
//   .querySelector(".slider-dot")
//   .addEventListener("mousedown", function (e) {
//     const sliderDot = this;
//     const slider = document.querySelector(".slider");
//     const startX = e.pageX - slider.offsetLeft - sliderDot.offsetLeft;

//     function moveSlider(e) {
//       let newX = e.pageX - slider.offsetLeft - startX;
//       newX = Math.max(0, Math.min(newX, sliderWidth));

//       sliderDot.style.transform = `translateX(${newX}px)`;
//       document.querySelector(".panorama").style.left = `${
//         -newX * (2000 / 400)
//       }px`;
//     }

//     function stopSlider() {
//       document.removeEventListener("mousemove", moveSlider);
//       document.removeEventListener("mouseup", stopSlider);
//     }

//     document.addEventListener("mousemove", moveSlider);
//     document.addEventListener("mouseup", stopSlider);
//   });

