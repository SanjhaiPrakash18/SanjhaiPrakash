const textElement = document.querySelector('.sliding-word-container');
const heroSlidingText = document.querySelector('.hero-sliding-text');
const defaultWord = '&lt;Sanjhai Prakash&gt;';
const words = [
    '&lt;#ANALYST&gt;',
    '&lt;*DESIGNER&gt;',
    '&lt;@DEVELOPER&gt;'
];
let index = 0;
let animationTimeout;

function slideLeftText() {
    clearTimeout(animationTimeout); // Clear any previous animations

    function slide() {
        // Insert the next word
        textElement.innerHTML = `<span class="hero-sliding-word">${words[index]}</span>`;

        // Apply the sliding animation
        const word = textElement.querySelector('.hero-sliding-word');
        word.style.opacity = 1;
        word.style.transform = 'translateX(0)';

        // Cycle to the next word
        index = (index + 1) % words.length;

        // Schedule the next word to slide after 1 second
        animationTimeout = setTimeout(slide, 1000);
    }

    slide(); // Start the sliding effect
}

// Start animation on hover
heroSlidingText.addEventListener('mouseover', () => {
    slideLeftText();
});

// Reset to default word when the mouse leaves
heroSlidingText.addEventListener('mouseleave', () => {
    clearTimeout(animationTimeout); // Stop the sliding animation
    textElement.innerHTML = defaultWord; // Restore the default word
    index = 0; // Reset the index
});
