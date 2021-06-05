import "../scss/modules/key-sequence.scss";

console.log("Day 12 log: this was a fun challenge. There's a small secret to be discovered here, but please don't get your hopes up :D");

console.log('Code is: ENTER n g g u 🔺. Just press the keys in this order')

let keyInput = [];

let secretCode = ['Enter','n','g','g','u','ArrowUp'];

function checkCode(e) {
console.log(e.key);
keyInput.push(e.key);

if (keyInput.length < secretCode.length) return;

const sequence = keyInput.join('');

if (sequence === secretCode.join('')) showSecretButton();

keyInput.shift();

}

function showSecretButton() {
console.log('Success!');

    const par = document.querySelector("p");

    par.innerHTML = '<a target ="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"><button class="secret-button">Congrats!  Press here</button></a>';

    const button = document.querySelector('.secret-button');
    button.addEventListener('click', () => {console.log("Sorry, I couldn't help myself🤭")})
}

window.addEventListener('keyup', checkCode);