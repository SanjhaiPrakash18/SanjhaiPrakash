function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    document.getElementById('current-date-time').textContent = dateTimeString;
}

// Call the function to update date and time
updateDateTime();

// Optional: Update the time every second
setInterval(updateDateTime, 1000);