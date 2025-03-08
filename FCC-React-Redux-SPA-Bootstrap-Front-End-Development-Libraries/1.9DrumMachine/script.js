// Function to play sound and update display
function playSound(id) {
    const audio = document.getElementById(id); // This should match the ID of the audio element
    if (audio) { // Check if the audio element exists
        audio.currentTime = 0; // Rewind to the start
        audio.play();
        document.getElementById('display').innerText = id.replace('-', ' '); // Update display text

        // Add a class to create a visual effect
        const drumPad = document.querySelector(`.drum-pad[id="${id}"]`);
        drumPad.classList.add('active');
        
        // Remove the class after a short delay
        setTimeout(() => {
            drumPad.classList.remove('active');
        }, 100); // Adjust the duration as needed
    } else {
        console.error(`Audio element with ID ${id} not found.`);
    }
}

// Event listener for keyboard presses
document.addEventListener('keydown', (event) => {
    const keyMap = {
        'Q': 'Heater-1',
        'W': 'Heater-2',
        'E': 'Heater-3',
        'A': 'Heater-4',
        'S': 'Clap',
        'D': 'Open-HH',
        'Z': 'Kick-n-Hat',
        'X': 'Kick',
        'C': 'Closed-HH'
    };
    const drumPadId = keyMap[event.key.toUpperCase()];
    if (drumPadId) {
        playSound(drumPadId);
    }
});
