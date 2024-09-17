document.addEventListener('DOMContentLoaded', function () {
    const musicPlayer = document.querySelector('.music-player');
    const hoverEffect = document.createElement('div');
    hoverEffect.className = 'music-player-hover-effect';
    musicPlayer.appendChild(hoverEffect);

    musicPlayer.addEventListener('mousemove', function (event) {
        const rect = musicPlayer.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Show the hover effect
        hoverEffect.style.clipPath = `circle(150px at ${mouseX}px ${mouseY}px)`;
        hoverEffect.style.transform = 'scale(1)'; // Make it visible

        // Add the 'hover' class to change the color of elements
        if (!musicPlayer.classList.contains('hover')) {
            musicPlayer.classList.add('hover');
        }
    });

    musicPlayer.addEventListener('mouseleave', function () {
        // Hide the hover effect
        hoverEffect.style.transform = 'scale(0)';

        // Remove the 'hover' class when the mouse leaves the player
        if (musicPlayer.classList.contains('hover')) {
            musicPlayer.classList.remove('hover');
        }
    });
});