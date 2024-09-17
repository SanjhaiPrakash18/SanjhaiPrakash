const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('mousemove', (e) => {
    const rect = submitButton.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Move the button based on the mouse position with increased sensitivity
    submitButton.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) scale(1.1)`; // Increased multiplier for more sensitivity
});

submitButton.addEventListener('mouseleave', () => {
    // Reset the button's transform when the mouse leaves
    submitButton.style.transform = 'translate(0px, 0px) scale(1)';
});
