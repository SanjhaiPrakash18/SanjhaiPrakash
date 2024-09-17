document.querySelectorAll('.zoom-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Increase sensitivity for a more pronounced effect
        const sensitivity = 3; // Lower the number for more movement

        // Calculate the offset based on mouse position relative to the button
        const deltaX = (mouseX - (rect.left + rect.width / 2)) / sensitivity;
        const deltaY = (mouseY - (rect.top + rect.height / 2)) / sensitivity;

        // Apply a more noticeable movement
        button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    button.addEventListener('mouseleave', () => {
        // Reset the button's position when the mouse leaves
        button.style.transform = 'translate(0, 0)';
    });
});
