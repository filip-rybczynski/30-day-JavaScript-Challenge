// 1. Select all list elements
const videos = [...document.querySelectorAll("li")];

// 2. Extract time information and create new array of arrays with values in number type

const videoTimes = videos.map((video) => {
  let time = video.dataset.time.split(":");
  return time.map((el) => parseInt(el));
});

// 3. Reduce time values into one array

const totalTime = videoTimes.reduce(
  (total, videoTime) => {
    //  console.log(videoTime);
    const secSum = total[2] + videoTime[1];
    const minSum = total[1] + videoTime[0];

    // console.log(minSum, secSum);

    const fullSum = [
      total[0] + Math.floor(minSum / 60),         // Hours
      (minSum % 60) + Math.floor(secSum / 60),    // Minutes
      secSum % 60,                                // Seconds
    ];

    // console.log(fullSum);

    return fullSum;
  },
  [0, 0, 0]
);

//4. Convert array into string form

const stringTime = totalTime
  .map((value) => value.toString().padStart(2, "0"))
  .join(":");

console.log(`Total time: ${stringTime}`);