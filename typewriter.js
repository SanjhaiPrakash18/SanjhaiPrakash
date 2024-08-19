// Function to type out text in the typewriter effect
var textElement = document.getElementById('typewriter-text');
var textContent = "Hi, I'm Sanjhai\nWelcome To My ";
textElement.innerHTML = '';
var cursorElement = document.getElementById('cursor');
var typewriterwordeffect = document.getElementById('typewriterwordeffect');

function typeWriterEffect(index) {
    if (index < textContent.length) {
        if (textContent.charAt(index) === '\n') {
            textElement.innerHTML += '<br>';
        } else {
            var colorClass = index < 16 ? 'green-text' : 'black-text';
            var highlightClass = textContent.substring(index, index + 10) === "Portfolio" ? 'highlight' : '';
            textElement.innerHTML += `<span class="${colorClass} ${highlightClass}">${textContent.charAt(index)}</span>`;
        }

        index++;
        setTimeout(function () {
            typeWriterEffect(index);
        }, 100);
    } else {
        // Start word cycling effect
        startWordCycling();
    }
}

function startWordCycling() {
    var words = ["Portfolio!", "Showcase!", "Handle!", "Gallery!"];
    var currentIndex = 0;
    var cycleInterval = 3500; // Time to display each word
    var wordElement = document.createElement('span');

    // Apply styling to the word element
    wordElement.style.fontSize = '58px'; // Adjusted to match your earlier request
    wordElement.style.fontWeight = '900';
    wordElement.style.letterSpacing = '-4.8px';
    wordElement.style.color = '#77DD86';
    wordElement.style.display = 'inline-block';
    wordElement.style.position = 'relative'; // Use relative positioning for custom positioning
    wordElement.style.top = '10px'; // Adjust as needed to move the word down
    wordElement.style.left = '2px'; // Adjust as needed to move the word left

    typewriterwordeffect.appendChild(wordElement);

    function cycleWords() {
        wordElement.classList.remove('cycling-word'); // Remove animation class if already applied
        void wordElement.offsetWidth; // Trigger reflow to restart animation
        wordElement.classList.add('cycling-word'); // Add animation class

        wordElement.textContent = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
    }

    cycleWords(); // Initial call
    setInterval(cycleWords, cycleInterval);

    // Show cursor after cyclic word effect is complete
    setTimeout(function () {
        setInterval(function () {
            cursorElement.style.visibility = (cursorElement.style.visibility === 'visible') ? 'hidden' : 'visible';
        }, 500);
    }, cycleInterval * words.length);
}

setTimeout(function () {
    typeWriterEffect(0);
}, 2000);
