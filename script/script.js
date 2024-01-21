// script.js
document.addEventListener("DOMContentLoaded", (event) => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav__links");

  hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
  let currentSlideIndex = 1;
  showSlides(currentSlideIndex);

  window.plusSlides = function (n) {
    showSlides((currentSlideIndex += n));
  };

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("event-slideshow__slide");
    if (n > slides.length) {
      currentSlideIndex = 1;
    }
    if (n < 1) {
      currentSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlideIndex - 1].style.display = "block";
  }
});
