document.addEventListener('scroll', function () {
    const heroText = document.querySelector('.hero-sliding-text');
    const threshold = 100; // Adjust this value based on when you want to hide the elements

    if (window.scrollY > threshold) {
        heroText.classList.add('hero-hidden');
    } else {
        heroText.classList.remove('hero-hidden');
    }
});