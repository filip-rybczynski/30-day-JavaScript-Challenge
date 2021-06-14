import '../scss/modules/text-shadow.scss';

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const reverseButton = hero.querySelector(".reverse");

let reverse = 1;

const walk = 100; //100px

function shadow(e) {

    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

        // Added since when mouse is over the h1 element, offsetX and offsetY is calculated from the edges of h1, not the parent container
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const shadowX = reverse * Math.round((x / width * walk) - (walk / 2));
    const shadowY = reverse * Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${shadowX}px ${shadowY}px 16px rgba(0,0,0,0.4)`;

}

hero.addEventListener("mousemove", shadow);

reverseButton.addEventListener("click", (e) => {
    reverse = -reverse;
    shadow(e);
})

console.log("Day 16 log: fun challenge for today. I added the option of reversing the text shadow to make the page slightly more interesting, I might add a few more options later on");