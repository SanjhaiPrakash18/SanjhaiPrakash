const btn = document.querySelector('.get-started-btn');

// On hover
btn.addEventListener('mouseenter', () => {
    btn.style.setProperty('--bottom-position', '0'); // Slide up to original position
});

// On mouse leave
btn.addEventListener('mouseleave', () => {
    btn.style.setProperty('--bottom-position', '-100%'); // Slide up out of view
});

// Initial state
btn.style.setProperty('--bottom-position', '-100%');
