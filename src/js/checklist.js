import "../scss/modules/checklist.scss";

const checklist = Array.from(document.querySelectorAll("input"));

let shiftDown = false;

let lastClickedIndex = -1;
/**
 * Sets to index of last box checked
 *
 * if Shift key is pressed with no boxes checked, it's set to -1 again and the index of the first box checked with Shift down is the new value
 */

function crossOut() {
  let currentIndex = checklist.findIndex((checkbox) => checkbox === this);

  if (lastClickedIndex >= 0 && shiftDown === true) {
    if (lastClickedIndex <= currentIndex) {
      checklist.forEach((checkbox, index) => {
        if (index >= lastClickedIndex && index <= currentIndex) {
          checkbox.checked = true;
          checkbox.nextElementSibling.classList.add("selected");
        } else {
          checkbox.checked = false;
          checkbox.nextElementSibling.classList.remove("selected");
        }
      });
    } else if (lastClickedIndex > currentIndex) {
      checklist.forEach((checkbox, index) => {
        if (index <= lastClickedIndex && index >= currentIndex) {
          checkbox.checked = true;
          checkbox.nextElementSibling.classList.add("selected");
        } else {
          checkbox.checked = false;
          checkbox.nextElementSibling.classList.remove("selected");
        }
      });
    }
    return;
  }

  this.nextElementSibling.classList.toggle("selected");

  lastClickedIndex = currentIndex;
}

checklist.forEach((input, index) => {
  input.addEventListener("change", crossOut);
  input.checkboxNo = index;
});

window.addEventListener("keydown", function (e) {
  if (e.key !== "Shift") return;
  shiftDown = true;

  if (checklist.every((checkbox) => checkbox.checked === false))
    lastClickedIndex = -1;
});

window.addEventListener("keyup", function (e) {
  if (e.key !== "Shift") return;
  shiftDown = false;
});
