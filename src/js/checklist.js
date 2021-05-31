import "../scss/modules/checklist.scss";

const checklist = document.querySelectorAll("input");

let shiftDown = false;

function crossOut() {
// console.dir(this.nextElementSibling);
console.dir(this);

if(shiftDown === true) {
    const checkboxes = [...checklist];

    const alreadyChecked = checkboxes.findIndex((checkbox, index) => index !== this.checkboxNo && checkbox.checked === true);

    if(alreadyChecked < this.checkboxNo) {
        checklist.forEach((item, index) => {
            if (index > alreadyChecked && index < this.checkboxNo) {
                item.checked = true;
                item.nextElementSibling.classList.add("selected");
            }
        })
    }
    if (alreadyChecked > this.checkboxNo) {
        checklist.forEach((item, index) => {
            if (index < alreadyChecked && index > this.checkboxNo) {
                item.checked = true;
                item.nextElementSibling.classList.add("selected");
            } 
        })
    }
}

// if(shiftDown === false && this.checked === false) {
//     checklist.forEach(item => {
//         item.checked = false;
//         item.nextElementSibling.classList.remove("selected");
//     })
// }

this.nextElementSibling.classList.toggle("selected");


}

checklist.forEach((input, index) => {
    input.addEventListener("change", crossOut)
    input.checkboxNo = index;    
});

window.addEventListener("keydown", function(e) {
    if(e.key !== "Shift") return;
    shiftDown = true;
})

window.addEventListener("keyup", function(e) {
    if(e.key !== "Shift") return;
    shiftDown = false;
})