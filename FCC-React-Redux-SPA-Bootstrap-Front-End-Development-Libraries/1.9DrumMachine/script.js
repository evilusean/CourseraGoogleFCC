// Function to play sound and update display
function playSound(id) {
    const audio = document.getElementById(id);
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    document.getElementById('display').innerText = id.replace('-', ' '); // Update display text
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
