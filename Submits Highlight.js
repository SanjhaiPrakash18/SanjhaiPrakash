// Function to trigger the animation
function triggerAnimation() {
    const highlightSpan = document.querySelector('.submits-highlight');
    highlightSpan.classList.add('active');
}

// Trigger animation on page load
window.addEventListener('load', triggerAnimation);