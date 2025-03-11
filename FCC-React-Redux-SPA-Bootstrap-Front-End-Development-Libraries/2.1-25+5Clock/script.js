// Initialize state
let state = {
    breakLength: 5,
    sessionLength: 25,
    timeLeft: 1500, // 25 minutes in seconds
    timer: null,
    isRunning: false,
    isBreak: false
};

// Get DOM elements
const breakLengthDisplay = document.getElementById('break-length');
const sessionLengthDisplay = document.getElementById('session-length');
const timeLeftDisplay = document.getElementById('time-left');
const timerLabel = document.getElementById('timer-label');
const beep = document.getElementById('beep');

// Update display
function updateDisplay() {
    timeLeftDisplay.textContent = formatTime(state.timeLeft);
    breakLengthDisplay.textContent = state.breakLength;
    sessionLengthDisplay.textContent = state.sessionLength;
    timerLabel.textContent = state.isBreak ? "Break" : "Session";
}

// Format time in mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Start/Stop timer
function startStopTimer() {
    if (state.isRunning) {
        clearInterval(state.timer);
        state.isRunning = false;
    } else {
        state.timer = setInterval(() => {
            if (state.timeLeft > 0) {
                state.timeLeft--;
                updateDisplay();
            } else {
                beep.play(); // Ensure this line is executed
                state.isBreak = !state.isBreak;
                state.timeLeft = state.isBreak ? state.breakLength * 60 : state.sessionLength * 60;
                updateDisplay();
            }
        }, 1000);
        state.isRunning = true;
    }
}

// Reset timer
function resetTimer() {
    clearInterval(state.timer);
    state.isRunning = false;
    state.breakLength = 5;
    state.sessionLength = 25;
    state.timeLeft = 1500;
    state.isBreak = false;
    updateDisplay();
}

// Increment/Decrement break length
function changeBreakLength(amount) {
    if (state.breakLength + amount > 0 && state.breakLength + amount <= 60) {
        state.breakLength += amount;
        if (!state.isBreak) {
            state.timeLeft = state.breakLength * 60;
        }
        updateDisplay();
    }
}

// Increment/Decrement session length
function changeSessionLength(amount) {
    if (state.sessionLength + amount > 0 && state.sessionLength + amount <= 60) {
        state.sessionLength += amount;
        if (!state.isBreak) {
            state.timeLeft = state.sessionLength * 60;
        }
        updateDisplay();
    }
}

// Event listeners
document.getElementById('break-decrement').addEventListener('click', () => changeBreakLength(-1));
document.getElementById('break-increment').addEventListener('click', () => changeBreakLength(1));
document.getElementById('session-decrement').addEventListener('click', () => changeSessionLength(-1));
document.getElementById('session-increment').addEventListener('click', () => changeSessionLength(1));
document.getElementById('start_stop').addEventListener('click', startStopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
