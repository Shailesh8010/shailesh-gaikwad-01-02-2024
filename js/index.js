//  // JavaScript for the slider
//  const slider = document.querySelector('.slider');
//  const slides = document.querySelectorAll('.slider > div');
//  let currentSlideIndex = 0;

//  function showSlide(index) {
//      slides.forEach((slide, i) => {
//          if (i === index) {
//              slide.style.opacity = 1;
//          } else {
//              slide.style.opacity = 0;
//          }
//      });
//  }

//  function nextSlide() {
//      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//      showSlide(currentSlideIndex);
//  }

//  // Initial setup
//  showSlide(currentSlideIndex);
//  setInterval(nextSlide, 3000);


document.addEventListener('DOMContentLoaded', function() {
    const customPopupOverlay = document.getElementById('custom-popupOverlay');
  
    // Check if the popup should be displayed (using local storage)
    if (!localStorage.getItem('custom-popupShown')) {
      customPopupOverlay.style.display = 'flex';
      localStorage.setItem('custom-popupShown', 'true');
    }
  });
  
  function closeCustomPopup() {
    document.getElementById('custom-popupOverlay').style.display = 'none';
  }
  