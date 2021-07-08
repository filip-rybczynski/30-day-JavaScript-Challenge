import "../scss/modules/click-and-drag.scss";

console.log("Day 27 log: interesting effect! I learned mainly how to follow the cursor's position in situations like this. The CSS is really nice, but I must admit I just copied it from the course files - it would've taken me way too long to figure it out myself!😅")

 const slider = document.querySelector(".items");

      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');

        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mousemove', (e) => {
          if(!isDown) return;
        e.preventDefault();

        let currentX = e.pageX - slider.offsetLeft;
        let walk = (currentX - startX)*2;

        slider.scrollLeft = scrollLeft - walk;

      });