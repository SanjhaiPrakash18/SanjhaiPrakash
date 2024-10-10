document.addEventListener('DOMContentLoaded', () => {
    const words = ["Collaborate", "Partner", "Engage", "Work together"];
    let index = 0;
    const dynamicWordElement = document.getElementById('dynamicCollaborateWord');

    if (!dynamicWordElement) {
        console.error('Element with id "dynamicCollaborateWord" not found.');
        return;
    }

    function updateDynamicWord() {
        // Apply animation to dynamic word
        dynamicWordElement.style.animation = 'moveFromBottom 0.5s ease-in-out forwards';

        setTimeout(() => {
            // Update dynamic word after animation
            dynamicWordElement.textContent = words[index];

            // Reset animation
            dynamicWordElement.style.animation = 'none';

            // Trigger reflow to restart animation
            void dynamicWordElement.offsetHeight; // Use void to indicate intent

            // Apply animation again
            dynamicWordElement.style.animation = 'moveFromBottom 0.5s ease-in-out forwards';

            index = (index + 1) % words.length; // Move to the next word
        }, 500); // Wait for animation to complete (0.5s)
    }

    // Update dynamic word every 3 seconds
    setInterval(updateDynamicWord, 3000);

    // Call updateDynamicWord() initially
    updateDynamicWord();
});
