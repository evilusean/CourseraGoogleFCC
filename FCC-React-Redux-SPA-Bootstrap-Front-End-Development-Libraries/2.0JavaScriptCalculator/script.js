// Initialize calculator state
let state = {
    currentValue: '0',
    previousValue: null,
    operator: null,
    waitingForOperand: false,
    decimalAdded: false
};

// Get DOM elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Update display
function updateDisplay() {
    display.textContent = state.currentValue;
}

// Handle number input
function inputDigit(digit) {
    const { currentValue, waitingForOperand } = state;
    
    if (waitingForOperand) {
        state.currentValue = digit;
        state.waitingForOperand = false;
        state.decimalAdded = false;
    } else {
        // Prevent multiple leading zeros
        if (currentValue === '0' && digit === '0') {
            return;
        }
        
        // Replace initial zero
        if (currentValue === '0') {
            state.currentValue = digit;
        } else {
            state.currentValue = currentValue + digit;
        }
    }
}

// Handle decimal point
function inputDecimal() {
    const { currentValue, waitingForOperand, decimalAdded } = state;
    
    if (waitingForOperand) {
        state.currentValue = '0.';
        state.waitingForOperand = false;
        state.decimalAdded = true;
        return;
    }
    
    // Don't add another decimal point if one exists
    if (!decimalAdded) {
        state.currentValue = currentValue + '.';
        state.decimalAdded = true;
    }
}

// Handle operators
function handleOperator(nextOperator) {
    const { currentValue, previousValue, operator, waitingForOperand } = state;
    const inputValue = parseFloat(currentValue);
    
    // Special case for negative numbers after an operator
    if (nextOperator === '-' && waitingForOperand && operator && operator !== '-') {
        state.currentValue = '-';
        state.waitingForOperand = false;
        state.decimalAdded = false;
        return;
    }
    
    // If we already have an operator and get another one (except negative after multiply/divide)
    if (operator && waitingForOperand && currentValue === '-') {
        // Replace the previous operator with the new one
        state.operator = nextOperator;
        return;
    }
    
    // If there's a pending operation, perform it
    if (operator && !waitingForOperand) {
        const result = calculate(previousValue, inputValue, operator);
        state.currentValue = String(result);
        state.previousValue = result;
    } else {
        state.previousValue = inputValue;
    }
    
    state.waitingForOperand = true;
    state.operator = nextOperator;
}

// Perform calculation
function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

// Reset calculator
function resetCalculator() {
    state = {
        currentValue: '0',
        previousValue: null,
        operator: null,
        waitingForOperand: false,
        decimalAdded: false
    };
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const { id, textContent } = button;
        
        // Handle number buttons
        if (/^[0-9]$/.test(textContent)) {
            inputDigit(textContent);
        }
        
        // Handle operators
        else if (['+', '-', '*', '/'].includes(textContent)) {
            handleOperator(textContent);
        }
        
        // Handle decimal point
        else if (id === 'decimal') {
            inputDecimal();
        }
        
        // Handle equals
        else if (id === 'equals') {
            if (state.operator && !state.waitingForOperand) {
                const result = calculate(
                    state.previousValue,
                    parseFloat(state.currentValue),
                    state.operator
                );
                state.currentValue = String(result);
                state.previousValue = result;
                state.operator = null;
                state.waitingForOperand = true;
                state.decimalAdded = state.currentValue.includes('.');
            }
        }
        
        // Handle clear
        else if (id === 'clear') {
            resetCalculator();
        }
        
        updateDisplay();
    });
});

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    const { key } = event;
    
    // Handle number keys
    if (/^[0-9]$/.test(key)) {
        event.preventDefault();
        inputDigit(key);
        updateDisplay();
    }
    
    // Handle operators
    else if (['+', '-', '*', '/'].includes(key)) {
        event.preventDefault();
        handleOperator(key);
        updateDisplay();
    }
    
    // Handle decimal point
    else if (key === '.') {
        event.preventDefault();
        inputDecimal();
        updateDisplay();
    }
    
    // Handle equals and Enter
    else if (key === '=' || key === 'Enter') {
        event.preventDefault();
        if (state.operator && !state.waitingForOperand) {
            const result = calculate(
                state.previousValue,
                parseFloat(state.currentValue),
                state.operator
            );
            state.currentValue = String(result);
            state.previousValue = result;
            state.operator = null;
            state.waitingForOperand = true;
            state.decimalAdded = state.currentValue.includes('.');
            updateDisplay();
        }
    }
    
    // Handle clear (Escape key)
    else if (key === 'Escape') {
        event.preventDefault();
        resetCalculator();
        updateDisplay();
    }
    
    // Handle backspace
    else if (key === 'Backspace') {
        event.preventDefault();
        if (!state.waitingForOperand) {
            if (state.currentValue.length === 1) {
                state.currentValue = '0';
                state.decimalAdded = false;
            } else {
                const newValue = state.currentValue.slice(0, -1);
                state.currentValue = newValue;
                state.decimalAdded = newValue.includes('.');
            }
            updateDisplay();
        }
    }
});

// Initialize display
updateDisplay();
