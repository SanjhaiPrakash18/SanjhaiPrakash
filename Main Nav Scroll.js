window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) { // Adjust the scroll position as needed
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
