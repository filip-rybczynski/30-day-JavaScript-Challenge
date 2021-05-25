import "../scss/modules/css-var.scss";

const inputs = document.querySelectorAll('.editor__controls input');

function handleUpdate() {
const suffix = this.dataset.sizing || ''; // = "px" or '' (we don't want to append "undefined" when "data-sizing" parameter is absent)
//dataset - object which contains all custom parameters which use the "data-" prefix 

document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // so that updates are dynamic

console.log("Day 3 log: Nice exercise, although I was a bit rusty on how CSS variables (and inputs, for that matter) work and had to go through the video step-by-step to get it done. But thanks to that, really happy with how quick this one went, compared to last day's challenge 😁")
