document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const items = document.querySelectorAll('.carousel-item');
  
    let currentIndex = 0;
  
    // Function to update carousel position
    const updateCarouselPosition = () => {
      const itemWidth = items[0].offsetWidth; // Width of one item
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };
  
    // Next Button Click
    nextButton.addEventListener('click', () => {
      if (currentIndex < items.length - 4) { // Adjust '4' to the number of visible items
        currentIndex++;
        updateCarouselPosition();
      }
    });
  
    // Previous Button Click
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
      }
    });
  });



  // Get the video element and container
const video = document.getElementById('video');
const videoContainer = document.querySelector('.carousel-item');

// Pause the video when mouse hovers over the container
videoContainer.addEventListener('mouseenter', function() {
  video.pause();
});

// Resume playing when the mouse leaves the container
videoContainer.addEventListener('mouseleave', function() {
  video.play();
});


