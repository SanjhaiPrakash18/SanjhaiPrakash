document.addEventListener('DOMContentLoaded', function () {
    const halfmoonButton = document.querySelector('.servwebdev-mac-button.halfmoon');
    const halfmoonIcon = document.getElementById('halfmoon-icon');
    const lightmodeIcon = document.getElementById('lightmode-icon');
    const macWindow = document.querySelector('.servwebdev-mac-window');

    // Function to initialize the default state
    function initializeState() {
        // Ensure the default state is half moon inactive
        macWindow.classList.remove('halfmoon-active');
        halfmoonIcon.style.display = 'block';
        lightmodeIcon.style.display = 'none';
    }

    initializeState(); // Set the initial state on page load

    halfmoonButton.addEventListener('click', function () {
        if (macWindow.classList.contains('halfmoon-active')) {
            // Switch to light mode
            halfmoonIcon.style.display = 'block';
            lightmodeIcon.style.display = 'none';
            macWindow.classList.remove('halfmoon-active');
        } else {
            // Switch to dark mode
            halfmoonIcon.style.display = 'none';
            lightmodeIcon.style.display = 'block';
            macWindow.classList.add('halfmoon-active');
        }
    });
});
