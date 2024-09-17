document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const centerX = rect.left + window.scrollX + (rect.width / 2);
            const centerY = rect.top + window.scrollY + (rect.height / 2);

            const mouseX = e.pageX;
            const mouseY = e.pageY;

            // Increase the multipliers for more pronounced effect
            const sensitivity = 50; // Higher value for increased sensitivity
            const deltaX = (mouseX - centerX) / rect.width * sensitivity;
            const deltaY = (mouseY - centerY) / rect.height * sensitivity;

            // Apply a maximum transform range to avoid excessive movement
            const maxTransform = 30; // Maximum transform range in pixels
            const clampedX = Math.min(Math.max(deltaX, -maxTransform), maxTransform);
            const clampedY = Math.min(Math.max(deltaY, -maxTransform), maxTransform);

            link.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translate(0, 0)';
        });
    });
});
