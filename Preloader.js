window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const contactSection = document.getElementById('contact-section');
    const steps = document.querySelectorAll('.preloader-step');

    let currentIndex = 0; // Start with the first step

    function updateSteps() {
        steps.forEach((step, index) => {
            if (index < currentIndex) {
                step.classList.remove('passing');
                step.classList.add('finished');
            } else if (index === currentIndex) {
                step.classList.remove('finished');
                step.classList.add('passing');
            } else {
                step.classList.remove('passing', 'finished');
            }
        });
    }

    function nextStep() {
        if (currentIndex < steps.length) {
            updateSteps();
            currentIndex++;
        } else {
            setTimeout(() => {
                if (preloader) preloader.style.display = 'none'; // Hide the preloader
                if (mainContent) mainContent.style.display = 'block'; // Show the main content
                if (contactSection) contactSection.style.display = 'block'; // Show the contact section
            }, 1000); // Adjust this time based on the length of your animation
        }
    }

    // Initialize the steps
    updateSteps();

    // Advance to the next step every 2 seconds (adjust as needed)
    setInterval(nextStep, 300);
});
