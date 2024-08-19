document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.typewrite-text');
    const texts = ["Sanjhai's Web Development Services"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 110; // Typing speed in milliseconds
    const pause = 3000; // Pause duration at the end of each text

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, pause);
            } else {
                setTimeout(type, speed / 2);
            }
        } else {
            textElement.textContent = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(type, pause);
            } else {
                setTimeout(type, speed);
            }
        }
    }

    type(); // Start typing effect
});