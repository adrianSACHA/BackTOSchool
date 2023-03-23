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

window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('slide-in');
    } else {
      reveals[i].classList.remove('slide-in');
    }
  }
}