document.querySelectorAll('.buy-now-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Increase sensitivity for a more pronounced effect
        const sensitivity = 2.5; // Lower the number for more movement

        // Calculate the offset based on mouse position relative to the button
        const deltaX = (mouseX - (rect.left + rect.width / 2)) / sensitivity;
        const deltaY = (mouseY - (rect.top + rect.height / 2)) / sensitivity;

        // Apply a smoother and faster movement
        button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        button.style.transition = 'transform 0.2s ease-out'; // Make the movement smoother and faster
    });

    button.addEventListener('mouseleave', () => {
        // Reset the button's position when the mouse leaves
        button.style.transform = 'translate(0, 0)';
        button.style.transition = 'transform 0.4s ease-in-out'; // Smooth return to default position
    });
});
