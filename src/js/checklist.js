import "../scss/modules/checklist.scss";

const checklist = Array.from(
  document.querySelectorAll('.inbox input[type="checkbox"]')
);

let lastClickedIndex = -1;
/**
 * Index of last box checked
 * If all checkboxes are unchecked, value is the index of the first checked checkbox
 */

function crossOut(e) {
  const currentIndex = checklist.findIndex((checkbox) => checkbox === this);

  if (checklist.filter((checkbox) => checkbox.checked === true).length === 1)
    lastClickedIndex = currentIndex;

  if (e.shiftKey) {
    if (lastClickedIndex <= currentIndex) {
      checklist.forEach((checkbox, index) => {
        checkbox.checked = index >= lastClickedIndex && index <= currentIndex;
      });
    } else {
      checklist.forEach((checkbox, index) => {
        checkbox.checked = index <= lastClickedIndex && index >= currentIndex;
      });
    }
    return;
  }

  lastClickedIndex = currentIndex;
}

checklist.forEach((input) => input.addEventListener("click", crossOut)); // "click" event trigger allows us to also check the keyboard status (specifically, whether the shift key is pressed or not)

// Clearing the checklist
window.addEventListener("keypress", function (e) {
  if (e.key !== "c") return;
  checklist.forEach((checkbox) => (checkbox.checked = false));
});
