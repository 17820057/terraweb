
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    }

    // Minimize HTTP requests with lazy loading
    const lazyLoadImages = document.querySelectorAll('img[data-src]');
    const loadImages = (image) => {
        image.src = image.dataset.src;
    };

    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImages(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    lazyLoadImages.forEach(img => {
        imgObserver.observe(img);
    });
});
