import "./../scss/modules/whack-a-mole.scss";

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const startButton = document.querySelector(".button--js");
const highScore = document.querySelector(".high-score--js");
const timer = document.querySelector(".timer--js");

const gameDuration = 10; // in seconds
const minPeep = 200; // in miliseconds
const maxPeep = 1000; // in miliseconds

let timesUp = false;
let score = 0;
let lastHole;
let lastWhacked;

let currentHighScore = localStorage.getItem("high-score");

console.log(
  "Day 30 log: this challenge was super fun! I got a bit stuck at one point - overcomplicating things, as usual - but in the end managed to do most of it on my own. I don't think I learned anything new, however I was able to incorporate many things I learned previously into this code - nice recap, perfect way to finish this 30(ish) day challenge!"
);

function startGame() {
  score = 0;
  scoreBoard.textContent = score;
  timer.textContent = `Time left: ${gameDuration}`;
  startButton.textContent = "GO !!!";
  timesUp = false;

  setTimeout(() => {
    timesUp = true;
  }, gameDuration * 1000);

  let countdown;
  let countdownValue = gameDuration;

  countdown = setInterval(() => {
    countdownValue--;
    if (countdownValue >= 0) {
      timer.textContent = `Time left: ${countdownValue}`;
    } else clearInterval(countdown);
  }, 1000);

  peep();
}

function finishGame() {
  scoreBoard.textContent = `${score}`;
  timer.textContent = `Times up!`;
  startButton.textContent = "Play again?";

  if (score > currentHighScore) {
    alert("New high score!");
    currentHighScore = score;
    highScore.textContent = score;
    localStorage.setItem("high-score", score);
  }
}

function peep() {
  const peepTime = Math.random() * (maxPeep - minPeep) + minPeep;
  let whichHole = Math.floor(Math.random() * holes.length);

  while (whichHole === lastHole) {
    whichHole = Math.floor(Math.random() * holes.length);
  }

  lastHole = whichHole;

  holes[whichHole].classList.add("up");

  setTimeout(() => {
    holes[whichHole].classList.remove("up");
    if (!timesUp) {
      peep();
    } else finishGame();
  }, peepTime);
}

function whackMole(e) {
  if (lastWhacked === this) return; // to prevent double-clicking

  if (!e.isTrusted) {
    // to prevent simulating clicks :)
    alert("Cheater!");
    return;
  }
  scoreBoard.textContent = ++score;
  this.parentNode.classList.remove("up");

  lastWhacked = this;
}

highScore.textContent = currentHighScore ? currentHighScore : "0";

startButton.addEventListener("click", startGame);

moles.forEach((mole) => mole.addEventListener("click", whackMole));
