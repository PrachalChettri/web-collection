const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let autoSlideInterval;

// Function to update the slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
}

// Function to reset the auto-slide timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 7000); // Slide every 4 seconds
}

// Previous button click event
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
    resetAutoSlide(); // Reset timer on manual action
});

// Next button click event
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
    resetAutoSlide(); // Reset timer on manual action
});

// Dot navigation click events
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateSlider();
        resetAutoSlide(); // Reset timer on manual action
    });
});

// Start automatic sliding
resetAutoSlide();

// Initialize first dot as active
updateSlider();

