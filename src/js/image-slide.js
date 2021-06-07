import "../scss/modules/image-slide.scss";

console.log("Day 13 log: Some of the topics from today were a bit confusing (e.g. the debounce function) but in the end I learned a few important things")

const slideImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    slideImages.forEach(img => {
      // half way through the image
        const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
        // bottom of the image
        const imageBottom = img.offsetTop + img.height; //how far from the top of the page it is.

        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));

// ready function provided by the course
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() { // returning a function - 'func' parameter available thanks to closure 
      let context = this, args = arguments; // to pass context and arguments forward to 'func'
      let later = function() { // function resets timeout value
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


