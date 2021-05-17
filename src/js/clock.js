import "../scss/clock.scss";

const [secHand, minHand, hrHand] = document.querySelectorAll(".clock__hand");

secHand.style.transform = `rotate(10deg)`;
console.log(secHand.style.transform);
console.log(typeof secHand.style.transform);

let handRot = secHand.style.transform;

let test = parseInt(handRot.slice(7, -4));
console.log(test);

function setTime() {
  const now = new Date();

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  secHand.style.transform = `rotate(${180 + second * 6}deg)`; // + 180 because default position of hands is pointing down
  minHand.style.transform = `rotate(${180 + minute * 6 + second * 0.1}deg)`;
  hrHand.style.transform = `rotate(${
    180 + (hour - 12) * 30 + minute * 0.5
  }deg)`;
}

function getCurrentPosition(...hands) {
  return hands.map((hand) => parseFloat(hand.style.transform.slice(7, -4)));
}

function adjustTime() {
  let [secPosition, minPosition, hrPosition] = getCurrentPosition(
    secHand,
    minHand,
    hrHand
  );

  secHand.style.transform = `rotate(${secPosition + 6}deg)`; // + 180 because default position of hands is pointing down
  minHand.style.transform = `rotate(${minPosition + 0.1}deg)`;
  hrHand.style.transform = `rotate(${
    hrPosition + (minPosition % 6 === 0 ? 0.5 : 0)
  }deg)`; // extending the interval to avoid desynchronizing by adding float values
}

setTime();

setInterval(adjustTime, 1000);
