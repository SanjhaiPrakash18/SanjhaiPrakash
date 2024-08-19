// Select the main navigation and the element to hide
const mainNav = document.querySelector('.main-nav');
const getBiSolutionRect = document.querySelector('.get-bi-solution-rect');

// Function to handle the scroll event
function handleScroll() {
    if (window.scrollY > mainNav.clientHeight) {
        getBiSolutionRect.classList.add('hide-on-scroll');
    } else {
        getBiSolutionRect.classList.remove('hide-on-scroll');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case the page is loaded with scroll position
handleScroll();
