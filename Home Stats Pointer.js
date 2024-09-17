document.addEventListener('DOMContentLoaded', function () {
    const rectangles = document.querySelectorAll('.Home-stats-rounded-rectangle');

    rectangles.forEach(function (rectangle) {
        rectangle.addEventListener('mousemove', function (event) {
            const rect = rectangle.getBoundingClientRect();
            const x = event.clientX - rect.left; // Mouse X position relative to the rectangle
            const y = event.clientY - rect.top;  // Mouse Y position relative to the rectangle

            // Use rgba for #fafaff with reduced opacity (e.g., 0.5 for 50% opacity)
            rectangle.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(250, 250, 255, 0.1) 1%, #000000 50%)`;
        });

        rectangle.addEventListener('mouseleave', function () {
            rectangle.style.background = '#77DD86'; // Reset to the original background color
        });
    });
});
