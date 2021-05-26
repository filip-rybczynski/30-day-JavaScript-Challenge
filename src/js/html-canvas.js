import "../scss/modules/html-canvas.scss";

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d"); //could also be 3d

// const footer = document.querySelector('#footer'); //offsetHeight
// const main = document.querySelector('main');

console.log(
  "Day 8 log: today's challenge has one of the most satisfying results! Oh, and I had no idea there was a 'canvas' tag in HTML - who would've though!"
);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 38; // to account for footer height

ctx.strokeStyle = "#ffffff";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 1;
// ctx.globalCompositeOperation = 'multiply' // note to self - check out this property

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let width = 20;
let growWidth = true;

function draw(e) {
  if (!isDrawing) return; // stop executing if we're not moused down
  // console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // got to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue < 359 ? hue++ : (hue = 0);

  if (width >= 1000) {
    growWidth = false;
  }
  if (width <= 10) {
    growWidth = true;
  }

  growWidth ? width++ : width--;

  ctx.lineWidth = width / 10;
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
