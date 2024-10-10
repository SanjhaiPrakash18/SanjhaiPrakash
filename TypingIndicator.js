let chatboxOpened = false;

function toggleChatWindow() {
    const chatbox = document.getElementById('chatbox');
    console.log('Chatbox opened:', chatboxOpened);

    if (!chatboxOpened) {
        // Open the chatbox quickly
        chatbox.style.transition = 'none'; // Disable transitions for immediate opening
        chatbox.style.display = 'block';
        chatboxOpened = true;

        // Reset chat state immediately
        resetChatState();

        // Re-enable transitions and start typing indicator after a short delay
        setTimeout(() => {
            chatbox.style.transition = ''; // Re-enable transitions
            revealTypingIndicator1();
        }, 50); // Short delay to ensure chatbox opens before typing indicator starts
    } else {
        // Close the chatbox
        chatbox.style.transition = 'none'; // Disable transitions for immediate closing
        chatbox.style.display = 'none';
        chatboxOpened = false;
        resetChatState(); // Reset the chat state when closing
    }
}

function resetChatState() {
    console.log('Resetting chat state');
    // Hide messages and typing indicators
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    const typingIndicator1 = document.getElementById('typing-indicator1');
    const typingIndicator2 = document.getElementById('typing-indicator2');
    const robotLogo1 = document.getElementById('robot-logo1');
    const robotLogo2 = document.getElementById('robot-logo2');
    const pills = document.querySelectorAll('.prompt-pill');

    // Ensure messages and typing indicators are completely hidden
    message1.style.display = 'none';
    message2.style.display = 'none';
    typingIndicator1.style.display = 'none';
    typingIndicator2.style.display = 'none';
    robotLogo1.style.opacity = '0';
    robotLogo2.style.opacity = '0';

    // Reset prompt pills
    pills.forEach(pill => {
        pill.style.opacity = '0';
        pill.style.transform = 'translateY(50px)';
        pill.classList.remove('visible');
    });
}

function revealTypingIndicator1() {
    console.log('Revealing typing indicator 1');
    const typingIndicator1 = document.getElementById('typing-indicator1');
    const robotLogo1 = document.getElementById('robot-logo1');
    typingIndicator1.style.display = 'flex';
    robotLogo1.style.opacity = '1'; // Show the robot logo during typing animation

    setTimeout(() => {
        typingIndicator1.style.display = 'none';
        revealMessage1();
    }, 3000); // Duration of the typing indicator
}

function revealMessage1() {
    console.log('Revealing message 1');
    const message1 = document.getElementById('message1');
    message1.style.display = 'block';
    message1.style.opacity = '1';

    setTimeout(() => {
        revealTypingIndicator2();
    }, 2500); // Delay before showing the second typing indicator
}

function revealTypingIndicator2() {
    console.log('Revealing typing indicator 2');
    const typingIndicator2 = document.getElementById('typing-indicator2');
    const robotLogo2 = document.getElementById('robot-logo2');
    typingIndicator2.style.display = 'flex';
    robotLogo2.style.opacity = '1'; // Show the robot logo during typing animation

    setTimeout(() => {
        typingIndicator2.style.display = 'none';
        revealMessage2();
    }, 3000); // Duration of the typing indicator
}

function revealMessage2() {
    console.log('Revealing message 2');
    const message2 = document.getElementById('message2');
    message2.style.display = 'block';
    message2.style.opacity = '1';

    setTimeout(() => {
        showPromptPills(); // Call this only after message2 has appeared
    }, 2500); // Delay before showing prompt pills
}

function showPromptPills() {
    console.log('Showing prompt pills');
    const pills = document.querySelectorAll('.prompt-pill');

    pills.forEach(pill => {
        pill.style.opacity = '0';
        pill.style.transform = 'translateY(50px)';
        pill.classList.remove('visible');
    });

    pills.forEach((pill, index) => {
        setTimeout(() => {
            pill.style.opacity = '1';
            pill.classList.add('visible');
        }, index * 100); // Staggered appearance of prompt pills
    });
}

// Add event listener to an element to use the toggleChatWindow function
const chatboxToggleButton = document.getElementById('chatbox-toggle-btn');

if (chatboxToggleButton) {
    chatboxToggleButton.addEventListener('click', toggleChatWindow);
}
