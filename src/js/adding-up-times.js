console.log(
  "Day 18 log: As usual, my first attempt turned out to be much more complicated than necessary. Thankfully, once I got the idea of how to better approach this problem, I was able to figure out the simpler solution on my own"
);

// 1. Select all list elements
const videos = [...document.querySelectorAll("[data-time]")];

// COMPLICATED VERSION :)

// // 2. Extract time information and create new array of arrays with values in number type

// const videoTimes = videos.map((video) => {
//   let time = video.dataset.time.split(":");
//   return time.map((el) => parseInt(el));
// });

// // 3. Reduce time values into one value of total seconds

// const totalTime = videoTimes.reduce(
//   (total, videoTime) => {
//     //  console.log(videoTime);
//     const secSum = total[2] + videoTime[1];
//     const minSum = total[1] + videoTime[0];

//     // console.log(minSum, secSum);

//     const fullSum = [
//       total[0] + Math.floor(minSum / 60),         // Hours
//       (minSum % 60) + Math.floor(secSum / 60),    // Minutes
//       secSum % 60,                                // Seconds
//     ];

//     // console.log(fullSum);

//     return fullSum;
//   },
//   [0, 0, 0]
// );

// //4. Convert array into string form

// const stringTime = totalTime
//   .map((value) => value.toString().padStart(2, "0"))
//   .join(":");

// MORE CONCISE VERSION

function stringifyTime(seconds) {
  function paddedString(num) {
    return num.toString().padStart(2, "0");
  }
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60) % 60;
  const hrs = Math.floor(seconds / 3600);

  return `${hrs}:${paddedString(min)}:${paddedString(sec)}`;
}

const totalTime = videos.reduce((total, video) => {
  const [mins, secs] = video.dataset.time.split(":").map(parseFloat);

  return total + mins * 60 + secs;
}, 0);

console.log(totalTime);

console.log(`Total time: ${stringifyTime(totalTime)}`);
