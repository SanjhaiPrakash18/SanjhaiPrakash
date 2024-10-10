document.addEventListener('DOMContentLoaded', function () {
    const rectangles = document.querySelectorAll('.target-audience');
    const rotations = [ /* Array of rotation values in degrees */];

    // Apply rotation values to each rectangle
    rectangles.forEach((rectangle, index) => {
        rectangle.style.setProperty('--rotate', `${rotations[index]}deg`);
    });

    // Function to handle the visibility of rectangles based on intersection
    function handleIntersection(entries) {
        entries.forEach(entry => {
            const rectangle = entry.target;
            if (entry.isIntersecting) {
                rectangle.classList.remove('hidden');
                rectangle.classList.add('visible');
            } else {
                rectangle.classList.remove('visible');
                rectangle.classList.add('hidden');
            }
        });
    }

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Adjust this value based on when you want the effect to trigger
    });

    // Observe each rectangle
    rectangles.forEach(rectangle => {
        observer.observe(rectangle);
    });

    // Function to start the animation cycle
    function startAnimationCycle() {
        rectangles.forEach((rectangle, index) => {
            setTimeout(() => {
                rectangle.classList.remove('hidden');
                rectangle.classList.add('visible');
            }, index * 500); // Stagger appearance
        });

        setTimeout(() => {
            slideDownRectangles();
        }, 40000); // 40000ms after rectangles are visible
    }

    function slideDownRectangles() {
        let delay = 0;
        rectangles.forEach((rectangle) => {
            setTimeout(() => {
                rectangle.classList.remove('visible');
                rectangle.classList.add('hidden');
            }, delay);
            delay += 500; // Delay between hiding each rectangle
        });

        setTimeout(() => {
            rectangles.forEach((rectangle, index) => {
                setTimeout(() => {
                    rectangle.classList.remove('hidden');
                    rectangle.classList.add('visible');
                }, index * 500);
            });
            setTimeout(() => {
                slideDownRectangles();
            }, 40000); // 40000ms for visible state
        }, delay);
    }

    // Start the animation cycle
    startAnimationCycle();
});
