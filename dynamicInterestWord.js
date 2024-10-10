document.addEventListener('DOMContentLoaded', () => {
    const words = ["Interest?", "Curiosity?", "Passion?", "Obsession?", "Focus?"];
    let index = 0;
    const dynamicWordElement = document.getElementById('dynamicInterestWord');

    if (!dynamicWordElement) {
        console.error('Element with id "dynamicInterestWord" not found.');
        return;
    }

    // Define the SVG as a string
    const searchIconSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    `;

    function updateDynamicWord() {
        // Apply animation
        dynamicWordElement.style.animation = 'moveFromBottom 0.5s ease-in-out forwards';

        setTimeout(() => {
            // Update text and prepend search icon
            dynamicWordElement.innerHTML = `${searchIconSVG} ${words[index]}`;

            // Reset animation
            dynamicWordElement.style.animation = 'none';

            // Trigger reflow to restart animation
            void dynamicWordElement.offsetHeight; // Use void to indicate intent

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
