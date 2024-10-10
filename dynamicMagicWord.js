document.addEventListener('DOMContentLoaded', () => {
    const words = ["Magic", "Expertise", "Solutions", "Abilities"];
    let index = 0;
    const dynamicWordElement = document.getElementById('dynamicMagicWord');
    const magicSymbolElement = document.getElementById('magicSymbol');

    if (!dynamicWordElement || !magicSymbolElement) {
        console.error('Required elements not found.');
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

        // Apply fade in/out animation to magic symbol
        setTimeout(() => {
            magicSymbolElement.style.opacity = 1;
            setTimeout(() => {
                magicSymbolElement.style.opacity = 0;
            }, 1000); // Fade out duration (1s)
        }, 1500); // Initial delay before starting (1.5s)
    }

    // Update dynamic word and magic symbol every 3 seconds
    setInterval(updateDynamicWord, 3000);

    // Call updateDynamicWord() initially
    updateDynamicWord();
});
