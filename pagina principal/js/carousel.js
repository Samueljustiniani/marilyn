document.addEventListener('DOMContentLoaded', function () {
    // Selección de imágenes del carrusel para el hero, asegurándose de que solo afecte a la sección del hero
    const heroCarouselImages = document.querySelectorAll('.hero .carousel-background .carousel-image');
    let currentImageIndex = 0;

    // Verificar que haya imágenes antes de iniciar el carrusel
    if (heroCarouselImages.length > 0) {
        setInterval(() => {
            // Solo cambiar opacidad para las imágenes del hero
            heroCarouselImages[currentImageIndex].style.opacity = 0;
            currentImageIndex = (currentImageIndex + 1) % heroCarouselImages.length;
            heroCarouselImages[currentImageIndex].style.opacity = 1;
        }, 4000); // Cambiar imagen cada 4 segundos
    }
});
