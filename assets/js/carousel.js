const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("#project-slides");

console.log(buttons);
console.log("-----------");
console.log(slides);

// For each to add a click event listener to arrow buttons to rotate the carousel
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});