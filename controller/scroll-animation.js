document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.boundingClientRect.top > 0) { // Solo si se está bajando
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que el elemento es visible
            }
        });
    }, {
        threshold: 0.1, 
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
