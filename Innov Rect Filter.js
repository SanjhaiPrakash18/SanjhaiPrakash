document.addEventListener('DOMContentLoaded', function () {
    const searchPrompts = document.querySelectorAll('.search-prompts-aoi');
    const searchBar = document.querySelector('.innov-search-bar');
    const innovRectangles = document.querySelectorAll('.innov-rectangle');
    const backButton = document.querySelector('.thin-line-back-button');

    // Function to reset the styles of innov rectangles
    function resetInnovRectangles() {
        innovRectangles.forEach(rectangle => {
            rectangle.style.backgroundColor = '#fcfcfc';
            rectangle.style.color = '#000000';
            rectangle.querySelector('.innov-label').style.border = ''; // Remove border styling
        });
    }

    // Event listener for search prompts
    searchPrompts.forEach(prompt => {
        prompt.addEventListener('click', function () {
            // Set the text of the clicked search prompt to the search bar
            searchBar.value = this.textContent.trim();

            // Simulate web browser searching delay
            setTimeout(() => {
                // Determine the action based on the selected search prompt
                if (this.textContent.toLowerCase().includes('analyze')) {
                    innovRectangles.forEach(rectangle => {
                        const label = rectangle.querySelector('.innov-label').textContent.trim();
                        if (label === 'Analyze') {
                            rectangle.style.backgroundColor = '#000000';
                            rectangle.style.color = '#ffffff';
                            rectangle.querySelector('.innov-label').style.border = '2px solid #ffffff'; // Change border color to white
                        } else {
                            rectangle.style.backgroundColor = '#fcfcfc';
                            rectangle.style.color = '#000000';
                        }
                    });
                } else if (this.textContent.toLowerCase().includes('automate')) {
                    innovRectangles.forEach(rectangle => {
                        const label = rectangle.querySelector('.innov-label').textContent.trim();
                        if (label === 'Automate') {
                            rectangle.style.backgroundColor = '#000000';
                            rectangle.style.color = '#ffffff';
                            rectangle.querySelector('.innov-label').style.border = '2px solid #ffffff'; // Change border color to white
                        } else {
                            rectangle.style.backgroundColor = '#fcfcfc';
                            rectangle.style.color = '#000000';
                        }
                    });
                } else if (this.textContent.toLowerCase().includes('design')) {
                    innovRectangles.forEach(rectangle => {
                        const label = rectangle.querySelector('.innov-label').textContent.trim();
                        if (label === 'Design & Develop') {
                            rectangle.style.backgroundColor = '#000000';
                            rectangle.style.color = '#ffffff';
                            rectangle.querySelector('.innov-label').style.border = '2px solid #ffffff'; // Change border color to white
                        } else {
                            rectangle.style.backgroundColor = '#fcfcfc';
                            rectangle.style.color = '#000000';
                        }
                    });
                } else {
                    resetInnovRectangles();
                }
            }, 800); // Delay for 800ms to simulate searching effect
        });
    });

    // Event listener for the back button
    backButton.addEventListener('click', function () {
        searchBar.value = ''; // Clear the search bar
        resetInnovRectangles(); // Reset innov rectangles to default styles
    });
});
