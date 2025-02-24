// Calculator Logic
let display = document.getElementById("display");
let memory = 0;
let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');

// Append value to display
function appendToDisplay(value) {
    if (display.textContent === "0" && value !== ".") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Clear the display
function clearDisplay() {
    display.textContent = "0";
}

// Clear the last entry
function clearEntry() {
    if (display.textContent.length === 1) {
        display.textContent = "0";
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

// Calculate the result
function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
        addToHistory(display.textContent); // Add result to history
    } catch (error) {
        display.textContent = "Error";
    }
}

// Toggle the sign of the displayed number
function toggleSign() {
    if (display.textContent !== "0") {
        if (display.textContent.startsWith("-")) {
            display.textContent = display.textContent.slice(1);
        } else {
            display.textContent = "-" + display.textContent;
        }
    }
}

// Calculate percentage
function calculatePercentage() {
    display.textContent = eval(display.textContent) / 100;
}

// Calculate square root
function calculateSquareRoot() {
    display.textContent = Math.sqrt(eval(display.textContent));
}

// Calculate factorial
function calculateFactorial() {
    let num = eval(display.textContent);
    if (num < 0) {
        display.textContent = "Error";
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        display.textContent = result;
    }
}

// Trigonometric Functions
function calculateSin() {
    display.textContent = Math.sin(eval(display.textContent));
}

function calculateCos() {
    display.textContent = Math.cos(eval(display.textContent));
}

function calculateTan() {
    display.textContent = Math.tan(eval(display.textContent));
}

// Logarithmic Functions
function calculateLog() {
    display.textContent = Math.log10(eval(display.textContent));
}

function calculateLn() {
    display.textContent = Math.log(eval(display.textContent));
}

// Memory Functions
function memoryAdd() {
    memory += eval(display.textContent);
}

function memorySubtract() {
    memory -= eval(display.textContent);
}

function memoryRecall() {
    display.textContent = memory;
}

function memoryClear() {
    memory = 0;
}

// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user's preference in localStorage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Load dark mode preference on page load
function loadDarkModePreference() {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
        document.body.classList.add("dark-mode");
    }
}

// Get the digital clock elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Update the digital clock every second
setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Convert to 12 hours time
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}, 1000);

// Load dark mode preference when the page loads
window.onload = loadDarkModePreference;

// History Feature
let history = [];

// Function to add result to history
function addToHistory(result) {
    history.push(result);
    updateHistoryDisplay();
}

// Function to update the history display
function updateHistoryDisplay() {
    const historyDisplay = document.getElementById('history');
    historyDisplay.innerHTML = history.join('<br>'); // Display history
}
