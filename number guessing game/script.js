
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attempts = 10;

document.getElementById('checkButton').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('userGuess').value);
    const feedback = document.getElementById('feedback');
    const chances = document.getElementById('chances');

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts--;
    console.log(attempts);
    
    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! ${userGuess} is correct! You guessed it in ${10 - attempts} attempts.`;
        endGame();
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Your number is too low.";
    } else {
        feedback.textContent = "Your number is too high.";
    }

    if (attempts === 0) {
        feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
        endGame();
    } else {
        chances.textContent = `You have ${attempts} chances left.`;
    }

   
});

function endGame() {
    document.getElementById('userGuess').disabled = true;
    document.getElementById('checkButton').disabled = true;
    document.getElementById('restartButton').style.display = 'inline';
}

document.getElementById('restartButton').addEventListener('click', function() {
    attempts = 10;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('userGuess').disabled = false;
    document.getElementById('checkButton').disabled = false;
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('feedback').textContent = "Make your guess!";
    document.getElementById('chances').textContent = `You have ${attempts} chances.`;
    document.getElementById('userGuess').value = '';
});
