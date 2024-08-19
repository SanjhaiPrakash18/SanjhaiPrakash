document.addEventListener("DOMContentLoaded", function () {
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const symbols = document.querySelectorAll(".symbol");
    const homeSection = document.getElementById("home");

    // Event listener for scrolling
    window.addEventListener("scroll", function () {
        if (isInViewport(homeSection)) {
            symbols.forEach(symbol => {
                symbol.classList.add("fly-in");
            });
        }
    });

    // Initial check in case the section is already in view
    if (isInViewport(homeSection)) {
        symbols.forEach(symbol => {
            symbol.classList.add("fly-in");
        });
    }
});
