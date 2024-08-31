// varibles used 
let randomNumber;
let attempts = 0;
const min = 1;
const max = 100;

const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const attemptCount = document.getElementById('attempt-count');
const restartBtn = document.getElementById('restart-btn');

// Function to start or restart the game
function startGame() {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;
    feedback.textContent = '';
    attemptCount.textContent = attempts;
    guessInput.value = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
    console.log(`Random number: ${randomNumber}`); // For debugging
}
// is input valid 
function validateInput(guess) {
    if (isNaN(guess) || guess < min || guess > max) {
        feedback.textContent = `Please enter a number between ${min} and ${max}.`;
        feedback.classList.add('error');
        return false;
    }
    feedback.classList.remove('error');
    return true;
}
// This is main function 
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (!validateInput(userGuess)) {
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;

    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        guessInput.disabled = true;
        submitBtn.disabled = true;
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Your guess is too high. Try again!';
    } else {
        feedback.textContent = 'Your guess is too low. Try again!';
    }

    guessInput.value = '';
}

//Buttons 
submitBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', startGame);
//Lets start the game 
startGame();
