import "../scss/modules/photo-booth.scss";

const photoBooth = document.querySelector(".photobooth");
const video = photoBooth.querySelector(".player");
const canvas = photoBooth.querySelector(".photo");
const ctx = canvas.getContext("2d");
const photoButton = photoBooth.querySelector(".photo-button");
const strip = photoBooth.querySelector(".strip");

const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      //   console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`Denied access to webcam`, err);
    });

  video.addEventListener("loadeddata", paintToCanvas);
}

function paintToCanvas() {
  console.dir(video);
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    // return in case interval needs to be cleared
    ctx.drawImage(video, 0, 0, width, height);

    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1; // causes delay effect

    // pixels = greenScreen(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 500] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0; // Setting opacity to 0
    }
  }

  return pixels;
}

function takePhoto() {
  // Emit sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const photo = canvas.toDataURL("image/jpeg"); // data
  const link = document.createElement("a");
  link.href = photo;
  link.setAttribute("download", "beautiful");
  link.innerHTML = `<img src="${photo}" alt="Beautiful picture"/>`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

photoButton.addEventListener("click", takePhoto);
