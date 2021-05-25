import "../scss/modules/drum-kit.scss";

console.log("Day 1 log: This was fun! Learned quite a bit with this one, even managed to discover a bug and find a solution to fix it afterwards (previously, if you held a key for too long, the respective field would get stuck on the 'pressed' animation 😅");

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //specific value of the data-key property of audio tag

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //stop the function from running

  audio.currentTime = 0; //rewind to the start, because if audio is already playing, play() method won't work unless audio is rewinded back to 0;
  audio.play();

  key.classList.add("playing");

  // // Removing the class
  // setTimeout(()=>{
  //     key.classList.remove("playing");
  // }, 70);

  /**
   *     this is a good solution, but that would require active synchronizing JS with CSS ('transform' parameter) in case the transform time is changed CSS... and vice versa. So could cause problems.
   *
   * Better solution is to create an event listener checking if there is a transition that's ending (since the only transitions we're concerned with are those on the keys)
   */
});

function removeEffect(e) {
  if (e.propertyName !== "transform") return; // skipping all transitions but one (there are several transitions happening: border, box shadow etc)

  this.classList.remove("playing");
}

function removeAllKeyEffects(e) {
  console.log("hello!");
  keys.forEach((key) => key.classList.remove("playing"));
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeEffect)); // function can be declared separately and reference (not called!) to it added here

window.addEventListener("keyup", removeAllKeyEffects); // function added to resolve bug where drum kit key pressed twice quickly or held for a longer time got stuck with the "playing" effect
