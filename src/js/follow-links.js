import '../scss/modules/follow-links.scss';

console.log('Day 22 log: I really enjoyed the effect I learned to code today! The main thing I learned today was that the "getBoundingClientRect" method exists... and it\'s very useful!');

const main = document.querySelector("main");
const links = main.querySelectorAll("a");
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();

   const highlightCoords = {
        width: linkCoords.width,
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY,
    }

    highlight.style.width = `${highlightCoords.width}px`;
    highlight.style.height = `${highlightCoords.height}px`;
    highlight.style.transform = `translate(${highlightCoords.left}px, ${highlightCoords.top}px)`;
}

links.forEach(link => link.addEventListener('mouseenter', highlightLink));