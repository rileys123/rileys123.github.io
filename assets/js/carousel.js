document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevBtn = carousel.querySelector('.carousel-nav button:first-child');
    const nextBtn = carousel.querySelector('.carousel-nav button:last-child');

    // Check if carousel elements exist before proceeding
    if (!track || slides.length === 0 || !prevBtn || !nextBtn) {
      console.warn("Missing carousel elements for a container. Skipping carousel initialization.");
      return;
    }

    // Calculate slide width dynamically after images are loaded
    let slideWidth;
    const updateSlideWidth = () => {
      // Get the width of the first slide, including any margin/gap
      if (slides.length > 0) {
        const firstSlide = slides[0];
        const slideStyle = getComputedStyle(firstSlide);
        const marginRight = parseFloat(slideStyle.marginRight) || 0;
        const marginLeft = parseFloat(slideStyle.marginLeft) || 0;
        slideWidth = firstSlide.offsetWidth + marginRight + marginLeft + 20; // +20 for the gap from CSS
      } else {
        slideWidth = 0; // Default if no slides
      }
    };

    // Initial width calculation and recalculate on image load (for safety)
    updateSlideWidth();
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      if (img && !img.complete) {
        img.addEventListener('load', updateSlideWidth);
      }
    });
    window.addEventListener('resize', updateSlideWidth); // Recalculate on window resize

    let currentIndex = 0;

    // Clone slides for infinite effect
    slides.forEach(slide => {
      track.appendChild(slide.cloneNode(true));
    });

    function moveToSlide(index) {
      if (slideWidth === 0) { // Prevent division by zero or incorrect movement if width is 0
        updateSlideWidth();
        if (slideWidth === 0) return; // If still 0, something is wrong
      }
      track.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
    }

    function moveCarousel(direction) {
      const slidesCount = slides.length;
      currentIndex = (currentIndex + direction + slidesCount) % slidesCount;
      moveToSlide(currentIndex);
    }

    // Auto-scroll
    let autoScroll = setInterval(() => moveCarousel(1), 3000);

    carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
    carousel.addEventListener('mouseleave', () => {
      autoScroll = setInterval(() => moveCarousel(1), 3000);
    });

    // Button events
    prevBtn.addEventListener('click', () => moveCarousel(-1));
    nextBtn.addEventListener('click', () => moveCarousel(1));

    // Ensure the initial position is correct
    moveToSlide(currentIndex);
  });
});
