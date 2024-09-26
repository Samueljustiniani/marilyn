document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    setInterval(() => {
        carouselImages[currentImageIndex].style.opacity = 0;
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].style.opacity = 1;
    }, 4000); // Change image every 5 seconds
});
