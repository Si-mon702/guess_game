
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
    guessButton.textContent = "Guess!";

    restartButton.style.display = "none";

    guessInput.focus();
}

// Handle Guess button
guessButton.addEventListener("click", function () {

    const value = guessInput.value.trim();

    // Do nothing if empty or not a number
    if (value === "" || isNaN(value)) {
        return;
    }

    const guess = Number(value);

    // Do nothing if not an integer between 1 and 20
    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
        return;
    }

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

    // Check if all attempts are used
    if (attempts === maxAttempts && guess !== targetNumber) {
        resultDisplay.textContent = "YOU LOSE! The number was " + targetNumber;
        resultDisplay.style.color = "red";

        endGame();
    }

    // Clear input and focus again
    guessInput.value = "";
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
restartButton.textContent = "Restart";

// Restart button starts the first game
restartGame();
