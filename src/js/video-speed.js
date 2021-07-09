import "./../scss/modules/video-speed.scss";

console.log("Day 28 log: Not a lot of new things, but that's ok - I had the opportunity to refresh a few things and play around with making the code work better with the CSS. Was fun!")

const video = document.querySelector(".video");
const speedToggle = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const min = 0.4;
const max = 3;

let isDown = false;

function adjustVideoSpeed(e) {
  if (!isDown) return;
  e.preventDefault();

  // const offsetY = e.offsetY; // this value doesn't go down to 0
  const mouseY = e.pageY - this.offsetTop;
  const barHeight = this.offsetHeight;
  const percent = mouseY / barHeight;
  const height = Math.round(percent * 100) + "%";

  bar.style.height = height;

  const playbackRate = min + (max - min) * percent;

  bar.textContent = +playbackRate.toFixed(1) + "×"; // + operator lets us avoid decimal places for integers, since it converts strings back into numbers

  video.playbackRate = playbackRate; // playbackRate changes smoothly (not incremented by 0.1) - this is expected
}

speedToggle.addEventListener("mousedown", () => {
  isDown = true;
});

// speedToggle.addEventListener('mouseleave', () => {isDown = false});
speedToggle.addEventListener("mousemove", adjustVideoSpeed);

window.addEventListener("mouseup", () => {
  isDown = false;
});
window.addEventListener("mousedown", (e) => {
  e.preventDefault();
}); // prevents the speed bar from getting dragged when mouse leaves the node
