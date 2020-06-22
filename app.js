var btnSlidePrev = document.querySelectorAll('.slide-prev');
var btnSlideNext = document.querySelectorAll('.slide-next');

const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

for (var i = 0; i < btnSlidePrev.length; i++) {
btnSlidePrev[i].addEventListener('click', function () {
  slideIndex--;

  // If currentSlide is first slide.
  if(slideIndex < 0) {
      slideIndex = slides.length - 1;

  }

  slides.forEach(slide => {
      slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'flex';


});
}

for (var i = 0; i < btnSlideNext.length; i++) {
btnSlideNext[i].addEventListener('click', function () {

  slideIndex++;


  // If currentSlide is last slide.
  if (slideIndex > slides.length - 1) {

      slideIndex = 0;

  }

  slides.forEach(slide => {
      slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'flex';


});

}
