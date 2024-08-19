function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const videoContainer = document.querySelector('.Analyze-video-container');
    if (isElementInViewport(videoContainer)) {
        videoContainer.classList.add('expanded');
    } else {
        videoContainer.classList.remove('expanded');
    }
}

// Handle scroll events
window.addEventListener('scroll', handleScroll);

// Handle initial load
window.addEventListener('load', handleScroll);