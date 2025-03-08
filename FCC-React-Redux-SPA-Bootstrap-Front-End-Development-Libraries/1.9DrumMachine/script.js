// Function to play sound and update display
function playSound(key) {
    // Get the audio element by its ID
    const audio = document.getElementById(key);
    
    if (audio) {
        // Reset the audio to the beginning
        audio.currentTime = 0;
        
        // Create a promise to play the audio
        const playPromise = audio.play();
        
        // Handle potential play() promise rejection
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Playback started successfully
                console.log(`Playing sound: ${key}`);
            }).catch(error => {
                // Auto-play was prevented or there was an error
                console.error(`Error playing sound: ${error}`);
            });
        }
        
        // Find the parent drum-pad to get its ID for display
        const drumPad = audio.parentNode;
        document.getElementById('display').innerText = drumPad.id;
        
        // Add a class to create a visual effect
        drumPad.classList.add('active');
        
        // Remove the class after a short delay
        setTimeout(() => {
            drumPad.classList.remove('active');
        }, 100);
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

// Make sure all audio elements are loaded and ready
document.addEventListener('DOMContentLoaded', () => {
    // Preload all audio elements
    const audioElements = document.querySelectorAll('audio.clip');
    audioElements.forEach(audio => {
        audio.load();
    });
    
    // Add click event listeners to all drum pads
    const drumPads = document.querySelectorAll('.drum-pad');
    drumPads.forEach(pad => {
        pad.addEventListener('click', () => {
            const key = pad.innerText;
            playSound(key);
        });
    });
});
