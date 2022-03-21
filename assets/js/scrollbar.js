// Side scrollbar variables
var scrollTop = 0;
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll("section");
const navigation = document.querySelector(".side-nav");

// Resets the selected scroll bar by removing the class from the currently selected
function resetSelected() {
  for (var i = 0; i < navigation.children.length; i++) {
    navigation.children[i].classList.remove("selected");
  }
}

// Event listener to check position of the scroll relative to the page height and change the selected nav dot
window.addEventListener("scroll", function () {
  scrollTop = window.scrollY;
  sections.forEach(function (section, i) {
    if (
      section.offsetTop < scrollTop + windowHeight / 2 &&
      scrollTop < section.offsetTop + windowHeight / 2
    ) {
      resetSelected();
      navigation.children[i].classList.add("selected");
    }
  });
});

// Allows for a click to change the position of the user on the page
navigation.querySelectorAll("li").forEach(function (item, i) {
  item.addEventListener("click", function () {
    resetSelected();
    window.scrollTo({
      top: i * windowHeight,
      behavior: "smooth",
    });
  });
});