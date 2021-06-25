import "../scss/modules/compass.scss";

const arrow = document.querySelector(".arrow");
const speedValue = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(data => {
    speedValue.textContent = data.coords.speed.toFixed(1);

    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, err => {
    console.error('Please grant access to your localisation', err);
});