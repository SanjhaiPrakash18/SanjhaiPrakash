document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.uiuxserv-video-container video');
    if (video) {
        video.playbackRate = 3; // Set playback speed to 3x
        video.muted = true; // Ensure the video is muted to comply with autoplay policies
        video.play().catch(function (error) {
            console.error('Error attempting to play the video:', error);
        });
    } else {
        console.error('Video element not found');
    }
});
