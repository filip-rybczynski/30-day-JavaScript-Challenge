import "../scss/modules/moving-dropdown.scss";

console.log(
  "Day 26 log: this challenge was a tough one - especially since I decided to do everything on my own, including CSS - but the result sure is satisfying. I can't name just one thing I learned here, I guess above all I learned how to be creative with CSS!"
);

const dropdownBg = document.querySelector(".bg--js");
const navElements = document.querySelectorAll(".nav-elements--js > li");
const navBar = document.querySelector(".nav--js");

function enterElement() {
  this.classList.add("dropdown-active");
  setTimeout(
    () =>
      this.classList.contains("dropdown-active") &&
      this.classList.add("dropdown-visible"),
    150
  );
  dropdownBg.classList.add("bg-visible");

  const dropdown = this.querySelector(".dropdown--js");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navBarCoords = navBar.getBoundingClientRect();

  const bgCoords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navBarCoords.top,
    left: dropdownCoords.left - navBarCoords.left,
  };

  dropdownBg.style.setProperty("width", bgCoords.width + "px");
  dropdownBg.style.setProperty("height", bgCoords.height + "px");
  dropdownBg.style.setProperty(
    "transform",
    `translate(${bgCoords.left}px, ${bgCoords.top}px)`
  );
}

function leaveElement() {
  this.classList.remove("dropdown-active", "dropdown-visible");
  dropdownBg.classList.remove("bg-visible");
}

navElements.forEach((element) =>
  element.addEventListener("mouseenter", enterElement)
);
navElements.forEach((element) =>
  element.addEventListener("mouseleave", leaveElement)
);
