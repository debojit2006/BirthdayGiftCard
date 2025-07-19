document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need to control
    const startOverlay = document.getElementById('start-overlay');
    const bgMusic = document.getElementById('bg-music');
    const revealBtn = document.getElementById('reveal-btn');
    const modal = document.getElementById('photo-modal');
    const closeModalBtn = document.querySelector('.close-btn');

    // Set initial volume for the music
    bgMusic.volume = 0.3;

    // Function to start everything
    function startExperience() {
        startOverlay.style.display = 'none';
        bgMusic.play().catch(error => {
            console.error("Background music failed to play:", error);
        });
    }

    // Function to show the photo modal
    function showPhoto() {
        bgMusic.pause(); // Pause music to focus on the photo
        modal.style.display = 'block';
    }

    // Function to hide the photo modal
    function hidePhoto() {
        modal.style.display = 'none';
        bgMusic.play(); // Resume music
    }

    // Event Listeners
    startOverlay.addEventListener('click', startExperience);
    revealBtn.addEventListener('click', showPhoto);
    closeModalBtn.addEventListener('click', hidePhoto);

    // Also close the modal if the user clicks on the dark background
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hidePhoto();
        }
    });
});
