import './../scss/modules/sticky-nav.scss';

console.log("Day 24 log: Today's challenge was simple, but the result is very nice, I think I'd like to use it in a future project. The most useful thing I learned is definitely that adding a class to the ultimate parent makes it easier to adjust styles for its children than adding a special class for each one separately.")

const body = document.querySelector('body');
const navBar = document.querySelector('#main');
const navBarTop = navBar.offsetTop;

function navBarStick() {
  if(this.scrollY >= navBarTop) {
    body.classList.add('sticky-nav');
    body.style.paddingTop = navBar.offsetHeight + 'px';

  } else {
    body.classList.remove('sticky-nav');
    body.style.paddingTop = '0px';
  }
}

window.addEventListener('scroll', navBarStick);