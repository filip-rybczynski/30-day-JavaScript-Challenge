import "../scss/clock.scss";

const [secHand, minHand, hrHand] = document.querySelectorAll(".clock__hand");

function setTime() {
  const now = new Date();

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  if (second === 0) {
    // Restoring realistic transition for second hand
    secHand.style.transition = "all 0.1s cubic-bezier(0.46, 1.91, 0.4, 1.01)";
  }
  secHand.style.transform = `rotate(${180 + second * 6}deg)`; // + 180 because default position of hands is pointing down
  minHand.style.transform = `rotate(${180 + minute * 6 + second * 0.1}deg)`; // incrementing each second for a more analog feel
  hrHand.style.transform = `rotate(${
    180 + (hour - 12) * 30 + minute * 0.5
  }deg)`; // incrementing each minute for a more analog feel

  // Adjusting position and transition of second hand to avoid rapid counterclockwise transition for "0" second
  if (second === 59) {
    setTimeout(() => {
      secHand.style.transition = "none";
      secHand.style.transform = `rotate(174deg)`;
      console.log("done!");
    }, 500);
  }

  return setTime;
}

setInterval(setTime(), 1000);

console.log(
  "Day 2 log: was able to solve this challenge by myself the simple way (aka how it was done in Wes's video)... only before thinking up a seemingly better solution which turned out to be much more complicated than the first one (and which took me way too long to finish). Final version of this clock uses the first idea, which proved to be the best. Keep it simple, stupid 😅"
);

// // Convoluted version - leaving for educational purposes :)

// secHand.style.transform = `rotate(10deg)`;
// console.log(secHand.style.transform);
// console.log(typeof secHand.style.transform);

// let handRot = secHand.style.transform;

// let test = parseInt(handRot.slice(7, -4));
// console.log(test);

// function setTime() {
//   const now = new Date();

//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const second = now.getSeconds();

//   secHand.style.transform = `rotate(${180 + second * 6}deg)`; // + 180 because default position of hands is pointing down
//   minHand.style.transform = `rotate(${180 + minute * 6 + second * 0.1}deg)`;
//   hrHand.style.transform = `rotate(${
//     180 + (hour - 12) * 30 + minute * 0.5
//   }deg)`;
// }

// function getCurrentPosition(...hands) {
//   return hands.map((hand) => parseFloat(hand.style.transform.slice(7, -4)));
// }

// function adjustTime() {
//   let [secPosition, minPosition, hrPosition] = getCurrentPosition(
//     secHand,
//     minHand,
//     hrHand
//   );

//   secHand.style.transform = `rotate(${secPosition + 6}deg)`; // + 180 because default position of hands is pointing down
//   minHand.style.transform = `rotate(${minPosition + 0.1}deg)`;
//   hrHand.style.transform = `rotate(${
//     hrPosition + (minPosition % 6 === 0 ? 0.5 : 0)
//   }deg)`; // extending the interval to avoid desynchronizing by adding float values
// }

// setTime();

// setInterval(adjustTime, 1000);
