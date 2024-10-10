document.addEventListener('DOMContentLoaded', function () {
    var textElement = document.getElementById('typewriter-text');
    var cursorElement = document.getElementById('cursor');
    var typewriterwordeffect = document.getElementById('typewriterwordeffect');

    if (!typewriterwordeffect) {
        console.error('typewriterwordeffect element not found!');
        return;
    }

    var textContent = "Hi, I'm Sanjhai\nWelcome To My ";
    textElement.innerHTML = '';

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
            startWordCycling();
        }
    }

    function startWordCycling() {
        var words = ["Portfolio!", "Showcase!", "Handle!", "Gallery!"];
        var currentIndex = 0;
        var cycleInterval = 3500; // Time to display each word
        var wordElement = document.createElement('span');

        wordElement.style.fontSize = '58px';
        wordElement.style.fontWeight = '900';
        wordElement.style.letterSpacing = '-4.8px';
        wordElement.style.color = '#003F3C';
        wordElement.style.display = 'inline-block';
        wordElement.style.position = 'relative';
        wordElement.style.top = '70px';
        wordElement.style.left = '2px';
        wordElement.style.paddingRight = '8px';
        wordElement.style.paddingTop = '0px';

        typewriterwordeffect.appendChild(wordElement);

        function cycleWords() {
            wordElement.classList.remove('cycling-word');
            void wordElement.offsetWidth; // Trigger reflow to restart animation
            wordElement.classList.add('cycling-word');

            wordElement.textContent = words[currentIndex];
            currentIndex = (currentIndex + 1) % words.length;
        }

        cycleWords(); // Initial call
        setInterval(cycleWords, cycleInterval);
    }

    setTimeout(function () {
        typeWriterEffect(0);
    }, 2000);
});