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