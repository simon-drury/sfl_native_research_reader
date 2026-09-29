
const slidesWrapper = document.getElementById('slides-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlideIndex = 0;

const slides = []; // This will be populated after slides are rendered

// Function to update slide visibility and transform
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * currentSlideIndex}%)`;
    });
}

// Function to navigate to the next slide
function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlides();
}

// Function to navigate to the previous slide
function showPrevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

// Add event listeners for navigation buttons
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

// Initial rendering of slides (assuming slides are already in the DOM)
// This part needs to be called after the slides are dynamically added.

function initializeSlides() {
    const renderedSlides = document.querySelectorAll('.slide');
    renderedSlides.forEach(slide => slides.push(slide));
    if (slides.length > 0) {
        updateSlides();
    }
}

// To be called when the DOM is ready and slides are injected:
// initializeSlides();

document.addEventListener('DOMContentLoaded', initializeSlides);
