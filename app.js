let currentIndex = 0;
const carousel = document.getElementById('productCarousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + newTransformValue + ')';
}

// Auto-scrolling
setInterval(nextSlide, 3000);
