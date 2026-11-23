
// Get HTML elements
const guessInput = document.getElementById("guess-value");
const guessButton = document.getElementById("guess-btn");
const restartButton = document.getElementById("restart-btn");
const attemptDisplay = document.getElementById("attempt");
const resultDisplay = document.getElementById("result");

// Game variables
let targetNumber;
let attempts = 0;
const maxAttempts = 5;

// Start or restart the game
function restartGame() {
    targetNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 0;

    guessInput.value = "";
    attemptDisplay.textContent = "0";
    resultDisplay.textContent = "";

    guessButton.style.display = "inline-block";
    restartButton.style.display = "none";

    guessInput.focus();
}

// Handle Guess button
guessButton.addEventListener("click", function () {

    const value = guessInput.value.trim();

    // Check empty or non-number
    if (value === "" || isNaN(value)) {
        return;
    }

    const guess = Number(value);

    attempts++;

    // Update attempt display
    attemptDisplay.textContent = attempts;

    // Compare guess with target number
    if (guess === targetNumber) {

        resultDisplay.textContent = "YOU WIN!";
        resultDisplay.style.color = "green";

        endGame();

    } else if (guess > targetNumber) {

        resultDisplay.textContent = guess + " is too high";
        resultDisplay.style.color = "red";

    } else {

        resultDisplay.textContent = guess + " is too low";
        resultDisplay.style.color = "blue";
    }

    // Check if player used all attempts
    if (attempts === maxAttempts && guess !== targetNumber) {

        resultDisplay.textContent = "YOU LOSE!";
        resultDisplay.style.color = "red";

        endGame();

        guessInput.value = "0";

    } else if (guess !== targetNumber) {

        guessInput.value = "";
    }

    guessInput.focus();
});

// End the game
function endGame() {
    guessButton.style.display = "none";
    restartButton.style.display = "inline-block";
    restartButton.textContent = "Restart";
}

// Restart button
restartButton.addEventListener("click", restartGame);

// Initial game state
guessInput.value = "";
attemptDisplay.textContent = "0";
resultDisplay.textContent = "";

guessButton.style.display = "none";
restartButton.style.display = "inline-block";
