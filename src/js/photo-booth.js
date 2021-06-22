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
    .catch(err => {
        console.error(`Denied access to webcam`, err);
    })

    video.addEventListener("loadeddata", paintToCanvas);
}

function paintToCanvas() {
  console.dir(video);
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {    // return in case interval needs to be cleared
        ctx.drawImage(video, 0, 0, width, height)
    }, 16);
}

function takePhoto() {
  // Emit sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const photo = canvas.toDataURL('image/jpeg'); // data
  const link = document.createElement('a');
  link.href = photo;
  link.setAttribute('download', 'beautiful');
  link.innerHTML = `<img src="${photo}" alt="Beautiful picture"/>`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

photoButton.addEventListener('click', takePhoto);


