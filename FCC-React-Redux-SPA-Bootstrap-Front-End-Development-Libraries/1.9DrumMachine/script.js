// Function to play sound and update display
function playSound(key) {
    const audio = document.getElementById(key);
    if (audio) {
        audio.currentTime = 0; // Rewind to the start
        audio.play();
        
        // Find the parent drum-pad to get its ID for display
        const drumPad = audio.parentNode;
        document.getElementById('display').innerText = drumPad.id;
        
        // Add a class to create a visual effect
        drumPad.classList.add('active');
        
        // Remove the class after a short delay
        setTimeout(() => {
            drumPad.classList.remove('active');
        }, 100); // Adjust the duration as needed
    } else {
        console.error(`Audio element with ID ${key} not found.`);
    }
}

// Event listener for keyboard presses
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if ('QWEASDZXC'.includes(key)) {
        playSound(key);
    }
});
