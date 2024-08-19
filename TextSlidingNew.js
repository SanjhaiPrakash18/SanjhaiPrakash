document.addEventListener('DOMContentLoaded', () => {
    const stickySection = document.getElementById('sticky-section');
    const sentences = Array.from(document.querySelectorAll('.newj-sentence'));
    let lastScrollTop = 0;
    let isSticky = false;
    let isScrolling = false;
    let currentSentenceIndex = 0;
    let scrollDirection = '';
    let scrollCount = 0;

    function updateSentences() {
        if (isElementInViewport(stickySection)) {
            if (!isSticky) {
                stickySection.classList.add('sticky');
                isSticky = true;
            }

            if (scrollDirection === 'down' && !isScrolling) {
                scrollCount++;
                if (scrollCount % 3 === 0) {
                    isScrolling = true; // Prevent additional reveals until the scroll event completes
                    setTimeout(() => {
                        if (currentSentenceIndex < sentences.length) {
                            sentences[currentSentenceIndex].classList.add('revealed');
                            currentSentenceIndex++;
                        }
                        if (currentSentenceIndex >= sentences.length) {
                            // Stop sticky behavior once all sentences are revealed
                            stickySection.classList.remove('sticky');
                            isSticky = false;
                        }
                        isScrolling = false; // Allow next scroll event to trigger reveal
                    }, 30); // Faster reveal, adjust as needed
                }
            } else if (scrollDirection === 'up' && !isScrolling) {
                scrollCount++;
                if (scrollCount % 3 === 0) {
                    isScrolling = true; // Prevent additional decoloring until the scroll event completes
                    setTimeout(() => {
                        if (currentSentenceIndex > 0) {
                            currentSentenceIndex--;
                            sentences[currentSentenceIndex].classList.remove('revealed');
                        }
                        if (currentSentenceIndex === 0) {
                            // Re-enable sticky behavior once all sentences are hidden
                            stickySection.classList.add('sticky');
                            isSticky = true;
                        }
                        isScrolling = false; // Allow next scroll event to trigger hide
                    }, 75); // Faster hide, adjust as needed
                }
            }
        } else {
            // Reset when out of viewport
            if (isSticky) {
                stickySection.classList.remove('sticky');
                isSticky = false;
            }
            resetSentences();
        }
    }

    function resetSentences() {
        sentences.forEach(sentence => sentence.classList.remove('revealed'));
        currentSentenceIndex = 0;
        scrollCount = 0; // Reset scroll count when out of viewport
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            scrollDirection = 'down';
        } else if (scrollTop < lastScrollTop) {
            // Scrolling up
            scrollDirection = 'up';
        }

        updateSentences();
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    // Initial check
    updateSentences();
});
