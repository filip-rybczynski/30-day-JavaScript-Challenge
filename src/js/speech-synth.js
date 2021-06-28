import './../scss/modules/speech-synth.scss';

console.log("Day 23 log: fun challenge, fun results. Today I learned mainly about the speech synthesis option available in the browser's API!")

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll(
  '[type="range"], [name="text"]'
);
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

function populateVoices() {
  voices = this.getVoices().filter(
    (voice) => voice.lang.includes("pl") || voice.lang.includes("en")
  );
  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}"">${voice.name} (${voice.lang})</option>`
    )
    .join("");

  msg.voice = voices[0];
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
}

function toggle(startOver = true) {
  speechSynthesis.cancel(); // stops the speaking
  if (!startOver) return;
  speechSynthesis.speak(msg);
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

msg.text = document.querySelector('[name="text"]').value; // Set the utterance to the placeholder text

speechSynthesis.addEventListener("voiceschanged", populateVoices);

voicesDropdown.addEventListener("change", setVoice);

options.forEach((option) => option.addEventListener("change", setOption));

speakButton.addEventListener("click", toggle);

stopButton.addEventListener("click", toggle.bind(null, false));