document.addEventListener('DOMContentLoaded', function () {
    const rectangles = document.querySelectorAll('.content');

    rectangles.forEach(rectangle => {
        rectangle.addEventListener('mousemove', function (event) {
            const rect = rectangle.getBoundingClientRect();
            const x = event.clientX - rect.left; // Mouse X position relative to the rectangle
            const y = event.clientY - rect.top;  // Mouse Y position relative to the rectangle

            const midX = rect.width / 2;
            const midY = rect.height / 2;

            // Calculate translation and rotation values based on cursor position
            const translateX = ((x - midX) / midX) * 20; // Adjust 20 to control movement range
            const translateY = ((y - midY) / midY) * -20; // Adjust -20 to control movement range
            const rotateX = ((y - midY) / midY) * -10; // Adjust -10 to control tilt range
            const rotateY = ((x - midX) / midX) * 10; // Adjust 10 to control tilt range

            // Apply transformation with smooth transition
            rectangle.style.transition = 'transform 0.3s ease'; // Smooth transition
            rectangle.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px)`;
        });

        rectangle.addEventListener('mouseleave', function () {
            // Reset transform with smooth transition when the mouse leaves
            rectangle.style.transition = 'transform 0.3s ease'; // Smooth transition
            rectangle.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translate(0px, 0px)`;
        });
    });
});
