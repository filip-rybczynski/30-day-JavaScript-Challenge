import "./../scss/modules/countdown-clock.scss";

console.log("Day 29 log: This one was a lot of fun - I learned a bit about working with timestamps and setInterval. Last challenge tomorrow, almost there!");

const displayTime = document.querySelector(".time-left--js");
const endTime = document.querySelector(".end-time--js");

const timerButtons = document.querySelectorAll("[data-time]");

let countdown;

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds/60);
    const secondsRemaining = seconds % 60;
    const timerString = `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
    displayTime.textContent = timerString;
    document.title = timerString;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);

    const hours = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Be back at: ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function timer(seconds) {
  clearInterval(countdown);

  // The countdown could be done using only setInterval, but since setInterval sometimes lags due to scrolling or changing tabs (apparently), other solution was used.

  const now = Date.now(); // time in ms

  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        displayTimeLeft(secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(countdown);
            endTime.textContent = "Back to work!"
        }

    }, 1000);
}

function runTimer() {
  timer(parseInt(this.dataset.time));
}

timerButtons.forEach((button) => button.addEventListener("click", runTimer));
document.customTime.addEventListener('submit', (e) => {
    e.preventDefault();
    const minutes = document.customTime.minutes.value;
    const seconds = minutes * 60;
    timer(seconds);
})


