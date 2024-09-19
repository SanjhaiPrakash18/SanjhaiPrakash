document.addEventListener('DOMContentLoaded', function () {
    // Function to handle scroll event and change header and navigation link colors
    function handleScroll() {
        var header = document.querySelector("header");
        var logo = document.querySelector("header h1");

        if (window.scrollY > 0) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    }

    // Add scroll event to call the handleScroll function
    window.addEventListener("scroll", handleScroll);

    // Function to handle GIF navigation change
    const gifs = document.querySelectorAll('.image-container img');
    let currentIndex = 0;

    function showGif(index) {
        gifs.forEach((gif, i) => {
            if (i === index) {
                gif.classList.add('active');
            } else {
                gif.classList.remove('active');
            }
        });
    }

    function showPreviousGif() {
        currentIndex = (currentIndex - 1 + gifs.length) % gifs.length;
        showGif(currentIndex);
    }

    function showNextGif() {
        currentIndex = (currentIndex + 1) % gifs.length;
        showGif(currentIndex);
    }

    // Add event listeners for GIF navigation buttons
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', showPreviousGif);
    nextButton.addEventListener('click', showNextGif);

    // Show the first GIF when the page loads
    showGif(currentIndex);

    // Function to handle chatbot responses
    function chatbotResponse(section) {
        var response = "Hi, welcome to my portfolio website";

        switch (section) {
            case "ABOUT":
                response = "I'm a business analytics analyst intern with 8 months of internship experience. I owe my expertise in data analysis and business intelligence. My skillset involves data analysis, data modelling, data visualization, data management, workflow automation and ui/ux";
                break;
            case "SERVICES":
                response = "I provide services on two platforms named Metricalist and Fiverr. In Metricalist I sell Power BI Dashboard templates and I perform end to end projects in Fiverr platform.";
                break;
            case "RESUME":
                response = "You can view my resume at the following link: [Insert Resume Link]";
                break;
            case "CONTACT":
                response = "Feel free to contact me at [Insert Contact Information]";
                break;
        }

        return response;
    }

    // Function to send user message and get chatbot response
    function sendMessage() {
        var userInput = document.getElementById("userInput").value;
        var chatbox = document.getElementById("chatbox");

        // Display user message with custom styling
        chatbox.innerHTML += '<div class="user-message">' + userInput + '</div>';

        // Get chatbot response based on user input
        var chatbotResponseText = chatbotResponse(userInput.toUpperCase());

        // Display chatbot response with custom styling
        chatbox.innerHTML += '<div class="chatbot-message">' + chatbotResponseText + '</div>';

        // Clear input field
        document.getElementById("userInput").value = "";

        // Scroll to the bottom of chatbox
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Function to toggle the chatbox visibility
    function toggleChatbox() {
        var chatbox = document.getElementById('chatbox');
        chatbox.classList.toggle('open');
    }

    // Function to minimize the chatbox
    function minimizeChatbox() {
        var chatbox = document.getElementById('chatbox');
        chatbox.classList.toggle('minimized');
    }

    function displayMessage(section) {
        var message = ""; // Initialize an empty message
        var promptPillText = ""; // Variable to store the prompt pill text

        // Get the current date and time in the desired format
        var currentDate = new Date();
        var options = { weekday: 'short', month: 'short', day: 'numeric', year: currentDate.getFullYear() < 2024 ? 'numeric' : undefined, hour: 'numeric', minute: 'numeric', hour12: true };
        var currentTime = currentDate.toLocaleString('en-US', options);

        // Switch statement to determine the message based on the selected section
        switch (section) {
            case "Can you tell me about yourself?":
                message = "Hello, I'm Sanjhai.<br><br>" +
                    "With over 9 months of internship experience, including 6 months as a Business Analytics Analyst at Livspace and 3 months as a Power BI Developer at NamaSYS Analytics, I bring valuable expertise to the table.<br><br>" +
                    "As a Freelance Business Intelligence Solution Provider at Metricalist, based in the UAE, I innovated the Customer Segmentation Dashboard, revolutionizing CRM analytics, and delivered solutions without active marketing efforts.<br><br>" +
                    "My specialties include data analysis, data visualization, business intelligence, data management, data flow automation, workflow automation, web development and ui/ux.<br><br>" +
                    "I possess technical proficiency in Google Sheets, Google Apps Script, Microsoft Excel, Microsoft Power BI, Microsoft PowerPoint, Microsoft Word, SQL, Tableau, Python, Figma, HTML, CSS, and JavaScript.<br><br>" +
                    "Explore my portfolio for insights into my expertise and how I can add value to your projects.";
                promptPillText = "Can you tell me about yourself?";
                break;
            case "What is your educational background?":
                message = "<b>1. Bachelor's Degree in Biotechnology (B.Tech):</b><br><br>" +
                    "- University: Sastra Deemed University, Tanjore<br>" +
                    "- Year of Graduation: 2022<br>" +
                    "- CGPA: <b>6.6724</b> out of <b>10</b><br><br>" +
                    "<b>2. 12th Grade Education:</b><br><br>" +
                    "- School: St. James Matriculation Hr. Sec. School, Trichy<br>" +
                    "- Year of Completion: 2018<br>" +
                    "- Percentage: <b>88.41%</b><br><br>" +
                    "<b>3. 10th Grade Education:</b><br><br>" +
                    "- School: St. James Matriculation Hr. Sec. School, Trichy<br>" +
                    "- Year of Completion: 2016<br>" +
                    "- Percentage: <b>87.8%</b>";
                promptPillText = "What is your educational background?";
                break;
            case "What is your professional experience?":
                message = "I have over 9 months of internship experience, including 6 months as a Business Analytics Analyst at Livspace and 3 months as a Power BI Developer at NamaSYS Analytics.";
                promptPillText = "What is your professional experience?";
                break;
            case "What are your key skills and areas of specialization?":
                message = "I specialize in data analysis, data visualization, business intelligence, data management, data flow automation, workflow automation, web development, and UI/UX. <br><br>My key skills include proficiency in Google Sheets, Google Apps Script, Microsoft Excel, Microsoft Power BI, Microsoft PowerPoint, Microsoft Word, SQL, Tableau, Python, Figma, HTML, CSS, and JavaScript.";
                promptPillText = "What are your key skills and areas of specialization?";
                break;
            case "Can I see samples of your work?":
                message = "Yes, you can see my work samples in the portfolio section of my website.<br><br>" +
                    "My portfolio consists of 6 main projects showcasing a range of skills across various technologies, including Microsoft Excel, Microsoft Power BI, SQL, HTML, CSS, Javascript and Figma.<br><br>" +
                    "For a clear view of my projects, please visit the Portfolio section on my website.<br><br>" +
                    "These projects are hosted on the Maven Analytics web platform, where users are redirected for further exploration.<br>";
                promptPillText = "Can I see samples of your work?";
                break;
            case "What services do you offer?":
                message = "Currently, I offer Business Intelligence solutions to clients worldwide.<br><br>" +
                    "I have expanded my services into the areas of web development and UI/UX design.<br><br>" +
                    "I am the creator of a product called the Customer Segmentation Dashboard Template, developed using Microsoft Power BI.<br><br>" +
                    "This template is categorized under CRM (Customer Relationship Management) on the website Metricalist and is priced at <b>$10</b>.<br><br>" +
                    "Users can purchase it through the Services section on my website, which redirects to the Metricalist website.";
                promptPillText = "What services do you offer?";
                break;
            case "Can I view your resume?":
                message = "Please click on this below link to view or download my resume. <a href='https://drive.google.com/file/d/1TotwCJhwQ0HIyl8PWZWni3aPub3RL3Xa/view?usp=drive_link' target='_blank'>Resume</a>";
                promptPillText = "Can I view your resume?";
                break;
            case "How can I contact you?":
                message = "Visitors, including recruiters and clients, can contact me through the following methods:<br><br>Email: <a href='mailto:sanjhaiprakash18@gmail.com'>sanjhaiprakash18@gmail.com</a><br><br>Contact Number: <a href='tel:+919003933044'>+91 90039 33044</a><br><br>I also have a contact form available at the bottom of this website for visitors to reach out to me.";
                promptPillText = "How can I contact you?";
                break;
            default:
                message = "Sorry, I don’t have an answer for that question.";
                promptPillText = "Sorry, I don’t have an answer for that question.";
                break;
        }

        // Create and show prerequisite message
        var prerequisiteMessageContainer = document.createElement('div');
        prerequisiteMessageContainer.classList.add('chat-message-prerequisite');
        prerequisiteMessageContainer.innerHTML = promptPillText;

        var chatContainer = document.querySelector('.chat-container');
        chatContainer.appendChild(prerequisiteMessageContainer);

        // Scroll to ensure the prerequisite message is visible
        scrollToBottom();

        // Show typing indicator after a short delay
        setTimeout(() => {
            var typingIndicatorContainer = document.createElement('div');
            typingIndicatorContainer.classList.add('typing-indicator');
            typingIndicatorContainer.id = 'typing-indicator';

            var typingDots = document.createElement('div');
            typingDots.classList.add('typing-dots');
            typingDots.innerHTML = '<div></div><div></div><div></div>';

            typingIndicatorContainer.appendChild(typingDots);

            chatContainer.appendChild(typingIndicatorContainer);

            // Show the typing indicator and then reveal the message
            setTimeout(() => {
                typingIndicatorContainer.style.display = 'none'; // Hide typing indicator

                var newMessageContainer = document.createElement('div');
                newMessageContainer.classList.add('chat-message');
                newMessageContainer.innerHTML = message;

                // Create a new element for the time
                var timeElement = document.createElement('div');
                timeElement.classList.add('message-time');
                timeElement.textContent = currentTime;

                // Style the time element
                timeElement.style.fontSize = '0.8em'; // Smaller font size
                timeElement.style.color = '#636363'; // Different text color
                timeElement.style.textAlign = 'right'; // Align to the right

                // Append the time element to the message container
                newMessageContainer.appendChild(timeElement);

                chatContainer.appendChild(newMessageContainer);

                // Scroll to bottom after adding the message
                scrollToBottom();

                // Display prompt pills after a short delay to ensure message is visible
                setTimeout(() => {
                    displayPromptPills();
                }, 500); // Adjust delay if needed

            }, 3000); // Duration of typing indicator

        }, 500); // Delay before showing typing indicator
    }



    // Function to display prompt pills below the message
    function displayPromptPills() {
        var chatContainer = document.querySelector('.chat-container');

        // Create a container for prompt pills
        var promptPillsContainer = document.createElement('div');
        promptPillsContainer.classList.add('prompt-pills-container');
        promptPillsContainer.innerHTML = `
        <div class="prompt-pill" onclick="displayMessage('Can you tell me about yourself?')">Can you tell me about yourself?</div>
        <div class="prompt-pill" onclick="displayMessage('What is your educational background?')">What is your educational background?</div>
        <div class="prompt-pill" onclick="displayMessage('What is your professional experience?')">What is your professional experience?</div>
        <div class="prompt-pill" onclick="displayMessage('What are your key skills and areas of specialization?')">What are your key skills and areas of specialization?</div>
        <div class="prompt-pill" onclick="displayMessage('Can I see samples of your work?')">Can I see samples of your work?</div>
        <div class="prompt-pill" onclick="displayMessage('What services do you offer?')">What services do you offer?</div>
        <div class="prompt-pill" onclick="displayMessage('Can I view your resume?')">Can I view your resume?</div>
        <div class="prompt-pill" onclick="displayMessage('How can I contact you?')">How can I contact you?</div>
    `;

        chatContainer.appendChild(promptPillsContainer);

        // Ensure the prompt pills are visible and have a sliding effect
        var promptPills = document.querySelectorAll('.prompt-pill');
        setTimeout(() => {
            promptPills.forEach(pill => {
                pill.classList.add('visible');
            });
        }, 100); // Small delay to ensure pills appear after message
    }

    function scrollToBottom() {
        var chatContainer = document.querySelector('.chat-container');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Event listener for the scroll event on the chat container
    document.querySelector('.chat-container').addEventListener('scroll', function () {
        var chatContainer = document.querySelector('.chat-container');
        var scrollToBottomButton = document.getElementById('scroll-to-bottom');

        var threshold = 50; // You can adjust this value as needed
        var isAtBottom = chatContainer.scrollHeight - chatContainer.scrollTop - threshold <= chatContainer.clientHeight;

        scrollToBottomButton.style.display = isAtBottom ? 'none' : 'block';
    });

    // Event listener for the scroll-to-bottom button click
    document.getElementById('scroll-to-bottom').addEventListener('click', function () {
        scrollToBottom();
    });



    // Add event listener to the bot logo to toggle the chatbox
    var botLogo = document.querySelector('.robot-logo');
    var chatbox = document.getElementById('chatbox');

    botLogo.addEventListener('click', toggleChatbox);

    // Add event listener to minimize the chatbox
    var minimizeButton = document.querySelector('.minimize-button');
    minimizeButton.addEventListener('click', minimizeChatbox);

    // Select all project containers
    const projectContainers = document.querySelectorAll('.project-container');

    // Select all filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');

    // Set "All" button as active by default
    const allButton = document.getElementById('all-projects-button');
    allButton.classList.add('active');
    allButton.style.color = '#FFFFFF';
    allButton.style.backgroundColor = '#1DBF73';

    // Function to filter projects based on the selected label
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLabel = this.getAttribute('technology-label');

            if (selectedLabel === 'All') {
                window.location.reload(); // Reload the page when the "All" button is clicked
            } else {
                projectContainers.forEach(container => {
                    const labels = container.querySelectorAll('.technology-label');

                    // If a specific label is selected, only display projects with that label
                    const showProject = Array.from(labels).some(label => label.textContent === selectedLabel);
                    container.style.display = showProject ? 'block' : 'none';
                });

                // Add or remove the "active" class from the clicked button
                filterButtons.forEach(btn => {
                    if (btn === button) {
                        btn.classList.add('active');
                        btn.style.color = '#FFFFFF'; // Set text color to white
                        btn.style.backgroundColor = '#77DD86'; // Set background color
                    } else {
                        btn.classList.remove('active');
                        btn.style.color = ''; // Reset text color
                        btn.style.backgroundColor = ''; // Reset background color
                    }
                });
            }
        });
    });

    // Function to handle click event on the "All Projects" button and reload the page
    var allProjectsButton = document.getElementById('all-projects-button');
    if (allProjectsButton) {
        allProjectsButton.addEventListener('click', function () {
            location.reload(); // Reload the page when the "All Projects" button is clicked
        });
    }

    // Add event listener to close button to toggle chatbox visibility
    var closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', toggleChatbox);

    // Add event listener to minimize button to toggle chatbox minimized state
    var minimizeButton = document.querySelector('.minimize-button');
    minimizeButton.addEventListener('click', minimizeChatbox);

    // Select all prompt pills
    const promptPills = document.querySelectorAll('.prompt-pill');

    // Add event listeners to the prompt pills
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('prompt-pill')) {
            var section = event.target.textContent.trim(); // Get the text content of the clicked pill
            displayMessage(section); // Display the message based on the selected pill
        }
    });

    // Add scroll event listener to adjust navigation link margin when the header is fixed
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        var navLinks = document.querySelectorAll('header nav ul li');

        if (window.scrollY > 0) {
            header.classList.add('fixed-header');
            // Adjust the margin of navigation links to accommodate for the fixed header
            navLinks.forEach(function (link) {
                link.style.marginRight = '15px'; // Adjust the value as needed
            });
        } else {
            header.classList.remove('fixed-header');
            // Reset the margin of navigation links when the header is not fixed
            navLinks.forEach(function (link) {
                link.style.marginRight = '10px'; // Reset to the original value
            });
        }
    });

    // Function to type search placeholder
    const placeholderElement = document.querySelector('.search-input');
    const placeholderText = "sanjhaiprakash18.github.io/SanjhaiPrakash/";
    let index = 0;
    let cursorVisible = true; // Flag to track cursor visibility

    function typeSearchPlaceholder() {
        if (index <= placeholderText.length) { // Modified condition to include the last character
            let cursor = (index < placeholderText.length) ? '' : (cursorVisible ? '|' : ''); // Toggle blinking cursor
            placeholderElement.setAttribute('placeholder', placeholderText.slice(0, index) + cursor);
            index++;
        } else {
            index = 0; // Reset index to start over the loop
            setTimeout(typeSearchPlaceholder, 5000); // Delay of 5 seconds before starting next loop
            cursorVisible = true; // Reset cursor visibility for the next loop
            return; // Exit function to prevent immediate recursion
        }
        cursorVisible = !cursorVisible; // Toggle cursor visibility
        placeholderElement.style.color = '#000000'; // Set text color to black
        setTimeout(typeSearchPlaceholder, 170); // Modified delay for smoother animation
    }

    typeSearchPlaceholder();
});

document.addEventListener('DOMContentLoaded', function () {
    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        const description = item.dataset.description;
        const backContent = item.querySelector('.back p');
        backContent.textContent = description;
    });
});

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    const line = document.querySelector(".vertical-line");
    const dotColor = "#77DD86"; // Dot color
    const outerLineColor = "#1bdf73"; // Outer line color
    const dotSize = "20px"; // New size for the enlarged dot
    const outerLineWidth = "1px"; // Increased outer line width

    // Calculate the positions of each dot
    const dotPositions = Array.from(dots).map(dot => dot.getBoundingClientRect().top + window.scrollY);

    let isFirstScroll = true; // Flag to track the first scroll

    function updateLinePosition() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const sensitivity = 0.8; // Adjust sensitivity here (0.8 means 80% of window height)

        dotPositions.forEach((dotPosition, index) => {
            const dotTop = dotPosition - windowHeight * sensitivity;
            const dotBottom = dotPosition + windowHeight * sensitivity;

            if (scrollPosition >= dotTop && scrollPosition <= dotBottom) {
                const lineHeight = ((index + 1) / dots.length) * 100 + "%";

                if (isFirstScroll && index === 0) {
                    line.style.height = "0";
                } else {
                    line.style.height = lineHeight;
                    updateDotStyle(index);
                }
            }
        });

        isFirstScroll = false; // Update flag after the first scroll
    }

    function updateDotStyle(dotIndex) {
        dots.forEach((dot, index) => {
            if (index === dotIndex) {
                dot.classList.add("blink-animation"); // Add blink animation class
                dot.style.width = dotSize; // Enlarge dot size
                dot.style.height = dotSize; // Enlarge dot size
                dot.style.backgroundColor = dotColor;
                dot.style.boxShadow = `0 0 10px ${dotColor}`;
                dot.style.border = `${outerLineWidth} solid ${outerLineColor}`; // Adjust outer line width and color
                dot.style.borderRadius = "50%"; // Make sure it's a circle
                const infoDiv = document.getElementById(`exp-info${dotIndex + 1}`);
                if (infoDiv) {
                    infoDiv.style.display = "block";
                }
            } else {
                dot.classList.remove("blink-animation"); // Remove blink animation class
                dot.style.width = ""; // Reset dot size
                dot.style.height = ""; // Reset dot size
                dot.style.backgroundColor = "#EFEFEF";
                dot.style.boxShadow = "none";
                dot.style.border = "none"; // Reset border
                const infoDiv = document.getElementById(`exp-info${index + 1}`);
                if (infoDiv) {
                    infoDiv.style.display = "none"; // Hide info rectangle for non-blinking dots
                }
            }
        });
    }
    function handleScroll() {
        requestAnimationFrame(updateLinePosition);
    }
    window.addEventListener("scroll", handleScroll);
    updateLinePosition();
});

//Function for animating notification icon
function animateNotificationIcon() {
    const notificationIcon = document.querySelector('.notification-icon');
    notificationIcon.classList.add('waving');
}

// Function to close the notification box
function closeNotification() {
    var notificationBox = document.getElementById('notificationBox');
    notificationBox.classList.remove('active');
}

// Function to simulate typing effect
function typeMessage(message, element, delay, callback) {
    let index = 0;
    element.textContent = ''; // Clear the text content before typing

    const interval = setInterval(function () {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
        } else {
            clearInterval(interval);
            if (callback) callback(); // Call the callback function after typing is done
        }
    }, delay);
}

// Function to initiate the typing effect with a loop
function startTypingLoop() {
    const notificationBox = document.getElementById('notificationBox');
    const notificationMessage = document.getElementById('notificationMessage');
    const notificationSubMessage = document.getElementById('notificationSubMessage');
    const message = "Hello and welcome to my portfolio! How may I assist you today?";
    const subMessage = "Get clarified early!";

    notificationBox.classList.add('active');

    // Typing main message
    typeMessage(message, notificationMessage, 50, function () {
        // Typing sub-message after the main message is completed
        setTimeout(function () {
            typeMessage(subMessage, notificationSubMessage, 50);
        }, 500); // Adjust the delay for sub-message

        // After both messages are typed, start the loop again after 10 seconds
        setTimeout(startTypingLoop, 500000); // 500-second interval
    });
}

// Show the notification box and start the typing loop after a delay
setTimeout(startTypingLoop, 2000); // Initial delay before starting the loop


const titles = [
    "Home",
    "Companies I Worked",
    "About Me",
    "Work Experience",
    "Areas Of Interests",
    "Portfolio",
    "Services",
    "Pricing",
    "Contact Me"
];

const images = [
    "Home Page Lat Player.png",
    "Companies Music Lat.png",
    "About Me Lat.png",
    "Exp Lat.png",
    "AOI Upd.png",
    "Portfolio Lat.png",
    "Service Lat.png",
    "Pricing Pic.png",
    "Contact Me Log.png"
];

// Function to update the music title and music image
function updateMusicTitle() {
    const musicTitle = document.querySelector('.music-title');
    const musicImage = document.querySelector('.music-image');
    let currentIndex = titles.indexOf(musicTitle.textContent);
    currentIndex = (currentIndex + 1) % titles.length;
    musicTitle.textContent = titles[currentIndex];
    musicImage.src = images[currentIndex];
}

// Function to change the music title and image every 2 seconds
function animateMusicTitle() {
    setInterval(updateMusicTitle, 1300);
}

// Start the animation
animateMusicTitle();

function startCounting(element, targetNumber) {
    let currentNumber = 0;
    const frames = 100; // Number of frames for the animation
    const increment = (targetNumber - currentNumber) / frames;

    function updateNumber() {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            cancelAnimationFrame(animationFrame);
        } else {
            animationFrame = requestAnimationFrame(updateNumber);
        }
        element.textContent = Math.round(currentNumber); // Round the current number for display
    }

    let animationFrame = requestAnimationFrame(updateNumber);
}

// Example usage:
const portfolioStatsElement = document.getElementById('portfolio-stats');
startCounting(portfolioStatsElement, 15); // Start counting animation for portfolio stats

// JavaScript to trigger animation
document.addEventListener("DOMContentLoaded", function () {
    // Get all circles
    var circles = document.querySelectorAll(".circle");

    // Function to trigger animation on each circle
    function animateCircles() {
        circles.forEach(function (circle, index) {
            setTimeout(function () {
                circle.classList.add("active");
                // Find the arrow-down element within this circle
                var arrow = circle.querySelector(".arrow-down");
                if (arrow) {
                    // Delay the appearance of the arrow by 300 milliseconds
                    setTimeout(function () {
                        arrow.style.opacity = 1;
                        arrow.style.transform = "translateX(-50%) scale(1)";
                    }, 300); // Adjust timing as needed
                }
            }, index * 1000); // Adjust timing as needed
        });
    }

    // Trigger animation when page loads
    animateCircles();

    // Define interval for looping animation
    var interval = 5000; // Adjust interval duration as needed (in milliseconds)

    // Set up interval for looping animation
    setInterval(function () {
        // Reset animation by removing 'active' class from all circles
        circles.forEach(function (circle) {
            circle.classList.remove("active");
            // Reset arrow appearance
            var arrow = circle.querySelector(".arrow-down");
            if (arrow) {
                arrow.style.opacity = 0;
                arrow.style.transform = "translateX(-50%) scale(0)";
            }
        });

        // Trigger animation again after a short delay
        setTimeout(animateCircles, 500); // Adjust delay as needed
    }, interval);
});
/*document.addEventListener("DOMContentLoaded", function () {
    const dottedRectangles = document.querySelectorAll('.dotted-rectangle');
    const animationDuration = 0.5; // Duration of the animation in seconds

    function popUpNextRectangle(index) {
        // Show the current rectangle
        dottedRectangles[index].style.animation = `popUp ${animationDuration}s forwards`;

        // Hide the rectangle after animation completes
        setTimeout(function () {
            dottedRectangles[index].style.animation = 'none';
            // Call the function recursively to show the next rectangle
            const nextIndex = (index + 1) % dottedRectangles.length; // Wrap around to the beginning if reached the end
            setTimeout(function () {
                popUpNextRectangle(nextIndex);
            }, 500); // Delay before showing the next rectangle
        }, animationDuration * 6000); // Wait for the animation to complete before hiding
    }

    // Start the animation loop
    popUpNextRectangle(0);
});*/

function togglePopup(popupId, offset = -1100) {
    var popup = document.getElementById(popupId);
    var body = document.querySelector('body');
    if (popup.style.display === "flex") {
        popup.style.display = "none";
        body.classList.remove('popup-open');
    } else {
        popup.style.display = "flex";
        body.classList.add('popup-open');
        // Scroll to the about section with a slight offset
        var aboutSection = document.getElementById('about');
        var scrollPosition = aboutSection.offsetTop - offset;
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // JavaScript to increment numbers from 0 to the target number
    function animateValue(id, start, end, duration, delay) {
        var obj = document.getElementById(id);
        var range = end - start;
        var increment = end > start ? 1 : -1;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var current = start + (progress / duration) * range;
            obj.textContent = Math.floor(current);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                // Reset start time and current value for looping
                startTime = null;
                current = start;
                setTimeout(function () {
                    window.requestAnimationFrame(step);
                }, delay);
            }
        }

        window.requestAnimationFrame(step);
    }

    // Call the function for each number with desired end values
    animateValue("portfolio-stats-number", 0, 6, 1000, 5000); // Adjust duration and delay as needed
    animateValue("experience-stats-number", 0, 2, 1000, 5000);
    animateValue("service-stats-number", 0, 1, 1000, 5000);
    animateValue("customers-stats-number", 0, 10, 1000, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    var messageBoxes = document.querySelectorAll(".homedesign-message-box");

    function playAnimation() {
        // Show the first message box after a delay
        setTimeout(function () {
            messageBoxes[0].classList.add("visible");
        }, 1000); // Delay for the first message box

        // Show the second message box after a delay
        setTimeout(function () {
            messageBoxes[1].classList.add("visible");
        }, 2000); // Delay for the second message box

        // Hide the message boxes after they have been visible for 5 seconds
        setTimeout(function () {
            messageBoxes.forEach(function (box) {
                box.classList.remove("visible");
            });
        }, 7000); // Total time for both messages to be visible

        // Call playAnimation again after a total delay of 8 seconds
        setTimeout(playAnimation, 8000);
    }

    // Start the animation loop
    playAnimation();
});

document.addEventListener("DOMContentLoaded", function () {
    var homeStatsSection = document.getElementById("home-stats");

    function revealHomeStats() {
        var homeStatsPosition = homeStatsSection.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (homeStatsPosition < screenHeight * 0.75) {
            homeStatsSection.classList.add("visible");
            window.removeEventListener("scroll", revealHomeStats);
        }
    }

    window.addEventListener("scroll", revealHomeStats);
    revealHomeStats(); // Call the function on page load to handle page reloads
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        const companiesSection = document.getElementById('companies');
        if (isInViewport(companiesSection) && !companiesSection.classList.contains('visible')) {
            companiesSection.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById('about');
    const containerToAnimate = aboutSection.querySelector('.row');

    // Initially hide the container
    containerToAnimate.style.opacity = '0';

    function revealElementsOnScroll() {
        if (isElementInViewport(containerToAnimate) && !containerToAnimate.classList.contains('fade-in')) {
            containerToAnimate.classList.add('fade-in');
            // Remove event listener once elements are revealed
            window.removeEventListener('scroll', revealElementsOnScroll);
        }
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Reveal elements on scroll
    window.addEventListener('scroll', revealElementsOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll('.interests-row');

    function revealRow() {
        rows.forEach(row => {
            const rowTop = row.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (rowTop < windowHeight * 0.9) {
                row.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', revealRow);
    revealRow(); // Trigger once on page load
});

window.addEventListener('scroll', revealProjects);

function revealProjects() {
    var projects = document.querySelectorAll('.project-container');

    projects.forEach(function (project) {
        if (isElementInViewport(project.parentElement)) { // Checking if parent container is in viewport
            project.style.opacity = 1;
            project.style.transform = 'translateY(0)';
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

document.addEventListener("DOMContentLoaded", function () {
    var contactSection = document.getElementById('contact');
    var formOverlay = document.querySelector('#contact .form-overlay');
    var row = document.querySelector('#contact .row');
    var socialLinks = document.querySelector('#contact .social-links');

    function revealElement(element) {
        element.classList.add('reveal');
    }

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% of the element is visible
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                revealElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(formOverlay);
    observer.observe(row);
    observer.observe(socialLinks);
});

document.addEventListener("DOMContentLoaded", function () {
    var revealText = document.getElementById("reveal-text");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function revealIfVisible() {
        if (isElementInViewport(revealText)) {
            revealText.classList.add("visible");
            window.removeEventListener("scroll", revealIfVisible);
        }
    }

    window.addEventListener("scroll", revealIfVisible);
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.service-reveal');

    function revealSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            // Calculate the delay based on the index of the section
            const index = Array.from(sections).indexOf(section);
            const delay = index * 150; // Adjust the delay time as needed

            if (sectionTop < window.innerHeight && sectionBottom >= 0) {
                setTimeout(() => {
                    section.classList.add('active');
                    section.classList.add('revealed'); // Add revealed class when section is revealed
                }, delay);
            } else {
                // Check if the section has been revealed before removing the active class
                if (!section.classList.contains('revealed')) {
                    section.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', revealSection);
    revealSection(); // Call revealSection on page load
});

// JavaScript code for filtering projects
const projectContainers = document.querySelectorAll('.project-container');
const filterButtons = document.querySelectorAll('.filter-button');
const allButton = document.getElementById('all-projects-button');
allButton.classList.add('active');
allButton.style.color = '#FFFFFF';
allButton.style.backgroundColor = '#1DBF73';

// Function to update margin for all project containers
function updateProjectMargin(marginValue) {
    projectContainers.forEach(container => {
        container.style.margin = marginValue;
    });
}

// Initial margin setup
updateProjectMargin('20px');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const selectedLabel = this.getAttribute('data-technology');

        if (selectedLabel === 'ALL') {
            projectContainers.forEach(container => {
                container.classList.remove('hidden'); // Show all projects
            });
            updateProjectMargin('20px'); // Reset margin for all projects
        } else {
            projectContainers.forEach(container => {
                const labels = container.querySelectorAll('.technology-label, .technology-label-two');
                const showProject = Array.from(labels).some(label => label.textContent === selectedLabel);
                if (showProject) {
                    container.classList.remove('hidden');
                } else {
                    container.classList.add('hidden');
                }
            });

            // Update margin for visible projects
            updateProjectMargin('20px');
        }

        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Select the section that contains the ad rectangles
const section = document.querySelector('.section');

// Options for the intersection observer
const options = {
    root: null, // viewport
    rootMargin: '0px', // no margin
    threshold: 0.5 // when 50% of the section is visible
};

// Create a new intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If section is intersecting (i.e., at least 50% visible)
            entry.target.classList.add('show'); // Add class to show ad rectangles
        } else {
            // If section is not intersecting
            entry.target.classList.remove('show'); // Remove class to hide ad rectangles
        }
    });
}, options);

// Observe the section
observer.observe(section);

// JavaScript to handle scroll detection and update active filter
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.InterestSection');
    const filterOptions = document.querySelectorAll('.AOIFilterOption');

    function setActiveFilter(sectionId) {
        // Remove active class from all filter options
        filterOptions.forEach(option => option.classList.remove('active'));

        // Add active class to the corresponding filter option
        const activeOption = document.querySelector(`.AOIFilterOption[data-filter="${sectionId}"]`);
        if (activeOption) {
            activeOption.classList.add('active');
        }
    }

    function handleScroll() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust this value based on your layout
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        setActiveFilter(currentSectionId);
    }

    // Initial call to set active filter on page load
    setActiveFilter(sections[0].getAttribute('id'));

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
});

function animateLiquid() {
    const container = document.querySelector('.livspace-new-expe-container');
    const finalText = document.getElementById('final-text');

    container.classList.add('clicked');
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/sanjhaiprakash/details/experience/', '_blank');
        setTimeout(() => {
            container.classList.add('reset');
            container.classList.remove('clicked');
            finalText.style.opacity = 0;
            setTimeout(() => {
                container.classList.remove('reset');
                finalText.style.opacity = 1;
            }, 2000); // delay to match the reverse transition duration
        }, 1000); // delay to start the reverse transition after opening the link
    }, 2000); // delay to match the initial transition duration
}

function animateLiquidnamasys() {
    const container = document.querySelector('.namasys-new-expe-container');
    const finalText = document.getElementById('namasysfinal-text');

    container.classList.add('clicked');
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/sanjhaiprakash/details/experience/', '_blank');
        setTimeout(() => {
            container.classList.add('reset');
            container.classList.remove('clicked');
            finalText.style.opacity = 0;
            setTimeout(() => {
                container.classList.remove('reset');
                finalText.style.opacity = 1;
            }, 2000); // delay to match the reverse transition duration
        }, 1000); // delay to start the reverse transition after opening the link
    }, 2000); // delay to match the initial transition duration
}


function animateLiquidyoshops() {
    const container = document.querySelector('.yoshops-new-expe-container');
    const finalText = document.getElementById('yoshopsfinal-text');

    container.classList.add('clicked');
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/sanjhaiprakash/details/experience/', '_blank');
        setTimeout(() => {
            container.classList.add('reset');
            container.classList.remove('clicked');
            finalText.style.opacity = 0;
            setTimeout(() => {
                container.classList.remove('reset');
                finalText.style.opacity = 1;
            }, 2000); // delay to match the reverse transition duration
        }, 1000); // delay to start the reverse transition after opening the link
    }, 2000); // delay to match the initial transition duration
}

function animateLiquidsparks() {
    const container = document.querySelector('.sparks-new-expe-container');
    const finalText = document.getElementById('sparksfinal-text');

    container.classList.add('clicked');
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/sanjhaiprakash/details/experience/', '_blank');
        setTimeout(() => {
            container.classList.add('reset');
            container.classList.remove('clicked');
            finalText.style.opacity = 0;
            setTimeout(() => {
                container.classList.remove('reset');
                finalText.style.opacity = 1;
            }, 2000); // delay to match the reverse transition duration
        }, 1000); // delay to start the reverse transition after opening the link
    }, 2000); // delay to match the initial transition duration
}

function animateLiquidbiolim() {
    const container = document.querySelector('.biolim-new-expe-container');
    const finalText = document.getElementById('biolimfinal-text');

    container.classList.add('clicked');
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/sanjhaiprakash/details/experience/', '_blank');
        setTimeout(() => {
            container.classList.add('reset');
            container.classList.remove('clicked');
            finalText.style.opacity = 0;
            setTimeout(() => {
                container.classList.remove('reset');
                finalText.style.opacity = 1;
            }, 2000); // delay to match the reverse transition duration
        }, 1000); // delay to start the reverse transition after opening the link
    }, 2000); // delay to match the initial transition duration
}

function togglePlay() {
    var video = document.getElementById('aboutMeVideo');
    var playButton = document.getElementById('playButton');
    var circleAnimation = document.querySelector('.VC-circle-animation');

    if (video.paused || video.ended) {
        video.play();
        playButton.style.display = 'none'; // Hide the play button when playing
        circleAnimation.style.display = 'none'; // Hide the circle animation when playing
    } else {
        video.pause();
        playButton.style.display = 'flex'; // Show the play button when paused
        circleAnimation.style.display = 'block'; // Show the circle animation when paused
    }
}

