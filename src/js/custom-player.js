import "../scss/modules/custom-player.scss";

console.log("Day 11 log: challenge for today was quite difficult for me (as I wasn't familiar with the video tag in HTML at all) and I was rather busy, so for the most part I followed the video. Current behavior doesn't include the custom controls in the fullscreen view - hope to fix it soon when I find the time")

/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector('.fullscreen');

/* Build out functions */

function togglePlay(e) {
  if (e.key && e.key !== " ") return; // To ensure video plays/gets paused only for the space bar, when function is triggered by a key press
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function changePlayButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skip() {
    const skip = +this.dataset.skip;
    // console.log(skip);
    video.currentTime += skip; 
}

function handleRangeUpdate() {
    video[this.name] = this.value;
  }

function updateProgress() {
    const progress = (video.currentTime / video.duration) * 100;

    progressBar.style.flexBasis = `${progress}%`;
}

function drag(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function toggleFullscreen() { // found on the web
    if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }

    //   console.log(player.requestFullscreen)
    //   if (player.requestFullscreen) {
    //       player.requestFullscreen();
    //     } else if (player.msRequestFullscreen) {
    //       player.msRequestFullscreen();
    //     } else if (player.mozRequestFullScreen) {
    //       video.mozRequestFullScreen();
    //     } else if (player.webkitRequestFullscreen) {
    //       player.webkitRequestFullscreen();
    //     }
} 
  

/* Hook up the event listeners */

video.addEventListener("click", togglePlay);
video.addEventListener("play", changePlayButton);
video.addEventListener("pause", changePlayButton);
video.addEventListener("timeupdate", updateProgress);

toggle.addEventListener("click", togglePlay);
window.addEventListener("keypress", togglePlay); // for video to play/pause when spacebar is pressed


skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', drag);
progress.addEventListener('mousemove', (e) => mousedown && drag(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', toggleFullscreen);
video.addEventListener('dblclick', toggleFullscreen); 