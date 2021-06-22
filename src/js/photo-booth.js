import "../scss/modules/photo-booth.scss";

const photoBooth = document.querySelector(".photobooth");
const video = photoBooth.querySelector(".player");
const canvas = photoBooth.querySelector(".photo");
const ctx = canvas.getContext("2d");

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
}

getVideo();
