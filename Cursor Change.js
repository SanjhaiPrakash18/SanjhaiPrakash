const rect = document.querySelector('.upd-exp-rounded-rect');
const cursorContainer = document.querySelector('.custom-cursor-container');

// Adjust the sensitivity multiplier
const sensitivityMultiplier = 1.2;

rect.addEventListener('mousemove', (e) => {
    const rectBounds = rect.getBoundingClientRect();

    // Apply sensitivity multiplier
    const x = (e.clientX - rectBounds.left) * sensitivityMultiplier;
    const y = (e.clientY - rectBounds.top) * sensitivityMultiplier;

    cursorContainer.style.left = `${x}px`;
    cursorContainer.style.top = `${y}px`;
    cursorContainer.style.display = 'flex';
});

rect.addEventListener('mouseleave', () => {
    cursorContainer.style.display = 'none';
});
