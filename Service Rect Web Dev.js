
document.addEventListener('DOMContentLoaded', function () {
    const rectangle = document.querySelector('.service-rectangle web-development');

    rectangle.addEventListener('mousemove', function (event) {
        const rect = rectangle.getBoundingClientRect();
        const x = event.clientX - rect.left; // Mouse X position relative to the rectangle
        const y = event.clientY - rect.top;  // Mouse Y position relative to the rectangle

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        // Calculate translation values based on cursor position
        const translateX = ((x - midX) / midX) * 20; // Adjust 20 to control movement range
        const translateY = ((y - midY) / midY) * -20; // Adjust -20 to control movement range

        // Apply transformation
        rectangle.style.transform = `scale(1.05) translate(${translateX}px, ${translateY}px)`;
    });

    rectangle.addEventListener('mouseleave', function () {
        // Reset transform when the mouse leaves
        rectangle.style.transform = `scale(1) translate(0px, 0px)`;
    });
});

