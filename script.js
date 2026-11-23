
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

    // Do nothing if empty or not a number
    if (value === "" || isNaN(value)) {
        return;
    }

    const guess = Number(value);

    // Do nothing if not an integer
    if (!Number.isInteger(guess)) {
        return;
    }

    attempts++;
    attemptDisplay.textContent = attempts;

    // Correct guess
    if (guess === targetNumber) {

        resultDisplay.textContent = "YOU WIN!";
        resultDisplay.style.color = "green";

        endGame();
        return;
    }

    // Compare guess with target
    if (guess > targetNumber) {
        resultDisplay.textContent = guess + " is too high";
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.textContent = guess + " is too low";
        resultDisplay.style.color = "blue";
    }

    // All five attempts used
    if (attempts >= maxAttempts) {

        resultDisplay.textContent = "YOU LOSE!";
        resultDisplay.style.color = "red";

        // Show 0 in the input field
        guessInput.value = "0";

        endGame();

    } else {

        // Clear input for next attempt
        guessInput.value = "";
        guessInput.focus();
    }
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
