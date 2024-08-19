function startDynamicWordEffect() {
    let index = 0;
    var dynamicWordElement = document.getElementById('dynamicHomePortfolioWord');
    var dynamicWords = ["Portfolio", "Showcase", "Handle", "Gallery"];

    function updateDynamicWord() {
        console.log('Updating dynamic word to:', dynamicWords[index]); // Debugging

        dynamicWordElement.classList.add('animate');

        setTimeout(() => {
            dynamicWordElement.textContent = dynamicWords[index];

            dynamicWordElement.classList.remove('animate');
            void dynamicWordElement.offsetWidth;

            dynamicWordElement.classList.add('animate');

            index = (index + 1) % dynamicWords.length;
        }, 500);
    }

    setInterval(updateDynamicWord, 3000);

    updateDynamicWord();
}

// Expose the function globally
window.startDynamicWordEffect = startDynamicWordEffect;
