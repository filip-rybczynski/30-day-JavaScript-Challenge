import '../scss/modules/speech-recognition.scss';

console.log(
  "Day 20 log: didn't expect to have as much fun with this one, but I did! I had a different approach to the challenge than what was suggested in the course - but that's ok, as long as it works 🙂 The buttons (and adding some attitude to the written text) was also my idea"
);

const options = document.querySelector(".options");
const buttons = options.querySelectorAll("button");

let suffix = "";

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    suffix = this.name;

    buttons.forEach(button => button.classList.remove('pressed'));

    this.classList.add('pressed');
  })
);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; // so that speech recognition works in real time - otherwise it would wait until the user stops speaking to return anything.

let p = document.createElement("p");
const words = document.querySelector(".words");

words.appendChild(p);

recognition.addEventListener("result", (e) => {
  let speech = "";
  for (const result of e.results) {
    speech += result[0].transcript;
    words.lastChild.textContent = capitalize(speech);

    if (result.isFinal) {
      words.lastChild.textContent += suffix;
      p = document.createElement("p");
      words.appendChild(p);
    }
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
