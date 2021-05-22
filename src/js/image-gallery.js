import "../scss/image-gallery.scss";

const panels = document.querySelectorAll(".panel");


function toggleActiveOpen(e) {
    // console.log('e.propertyName);
    if (e.propertyName.includes('flex')) return; // since transition name varies between browsers
    this.classList.toggle('open-active');
}

function toggleOpen() {
    panels.forEach(panel => {
      if (panel !== this) panel.classList.remove('open')
    });
    this.classList.toggle('open');

    this.addEventListener("transitionend", toggleActiveOpen); // when done outside of this function there was a bug where clicking to fast on a panel caused the additional text to hide when it was opened and appear when it was shrunk
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));


