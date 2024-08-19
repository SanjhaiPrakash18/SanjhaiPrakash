document.addEventListener('DOMContentLoaded', () => {
    const sectionsWrapper = document.querySelector('.sections-wrapper');
    const sections = document.querySelectorAll('.InterestSection');
    let currentIndex = 0;

    function updateSection(index) {
        const totalSections = sections.length;
        if (index < 0 || index >= totalSections) return;

        const offset = -index * 100; // Move the sections horizontally
        sectionsWrapper.style.transform = `translateX(${offset}%)`;

        // Update active filter
        document.querySelectorAll('.AOIFilterOption').forEach((filter, i) => {
            filter.classList.toggle('active', i === index);
        });

        currentIndex = index;
    }

    function handleScroll(event) {
        if (event.deltaY > 0) {
            // Scroll down
            if (currentIndex < sections.length - 1) {
                updateSection(currentIndex + 1);
            }
        } else {
            // Scroll up
            if (currentIndex > 0) {
                updateSection(currentIndex - 1);
            }
        }
    }

    document.addEventListener('wheel', handleScroll);

    // Optional: Update section based on URL hash on page load
    const hash = window.location.hash;
    if (hash) {
        const index = Array.from(sections).findIndex(section => section.id === hash.substring(1));
        if (index >= 0) {
            updateSection(index);
        }
    }
});
