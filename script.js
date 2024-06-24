let currentNumber = 0;
let history = [];
let historyIndex = -1;

const numberElement = document.getElementById('number');
const progressBar = document.getElementById('progress-bar');

function updateUI() {
    numberElement.textContent = currentNumber;
    progressBar.style.width = (currentNumber / 150) * 100 + '%';
}

function addToHistory() {
    history = history.slice(0, historyIndex + 1);
    history.push(currentNumber);
    historyIndex++;
}

document.getElementById('increment-btn').addEventListener('click', () => {
    if (currentNumber < 150) {
        currentNumber++;
        addToHistory();
        updateUI();
    }
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    if (currentNumber > 0) {
        currentNumber--;
        addToHistory();
        updateUI();
    }
});

document.getElementById('undo-btn').addEventListener('click', () => {
    if (historyIndex > 0) {
        historyIndex--;
        currentNumber = history[historyIndex];
        updateUI();
    }
});

document.getElementById('redo-btn').addEventListener('click', () => {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        currentNumber = history[historyIndex];
        updateUI();
    }
});

// Initialize
addToHistory();
updateUI();
