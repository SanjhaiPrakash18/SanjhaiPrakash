document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-container');
    let currentIndex = 0;

    function swapCards() {
        // Remove 'active' class from the current card
        cards[currentIndex].classList.remove('active');
        cards[currentIndex].style.zIndex = '1'; // Set z-index to ensure the card is behind the next

        // Update index and add 'active' class to the next card
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add('active');
        cards[currentIndex].style.zIndex = '2'; // Ensure the new front card is on top
    }

    // Initial setup to make sure the first card is visible
    cards[currentIndex].classList.add('active');
    cards[currentIndex].style.zIndex = '2'; // Ensure the first card is on top

    // Swap cards every 5 seconds
    setInterval(swapCards, 6000);
});
