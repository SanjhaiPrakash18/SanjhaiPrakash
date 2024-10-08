document.addEventListener('DOMContentLoaded', () => {
    const words = ["Story", "Journey", "Narrative", "Adventure", "Tale"];
    let index = 0;
    const dynamicWordElement = document.getElementById('dynamicStoryWord');

    if (!dynamicWordElement) {
        console.error('Element with id "dynamicStoryWord" not found.');
        return;
    }

    function updateDynamicWord() {
        // Apply animation
        dynamicWordElement.style.animation = 'moveFromBottom 0.5s ease-in-out forwards';

        setTimeout(() => {
            // Update text after animation
            dynamicWordElement.textContent = words[index];

            // Reset animation
            dynamicWordElement.style.animation = 'none';

            // Trigger reflow to restart animation
            void dynamicWordElement.offsetHeight; // Use void to avoid ESLint error

            // Apply animation again
            dynamicWordElement.style.animation = 'moveFromBottom 0.5s ease-in-out forwards';

            index = (index + 1) % words.length; // Move to the next word
        }, 500); // Wait for animation to complete (0.5s)
    }

    // Update the word every 3 seconds
    setInterval(updateDynamicWord, 3000);

    // Call updateDynamicWord() initially
    updateDynamicWord();
});
