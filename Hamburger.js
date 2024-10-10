// Get elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeIcon = document.getElementById('closeIcon');

// Redirect to the new page when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    window.location.href = 'mobile-menu.html'; // Redirect to the mobile menu page
});


// Close the mobile menu when the close icon is clicked
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Remove 'active' class to hide the menu
});
