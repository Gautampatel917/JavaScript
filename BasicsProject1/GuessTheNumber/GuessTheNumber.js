let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')

let userInput = document.querySelector('.guessField');
let guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.querySelector('p')

let prevGuess = []
let numberGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); //stop the default action
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //check the value it's between range
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert('Please enter a number between 1 and 100')
    }
    else {
        prevGuess.push(guess);
        if (numberGuess >= 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
            // console.log(numberGuess);
        }
    }
}

function checkGuess(guess) {
    //check if the guess is correct
    if (guess === randomNumber) {
        displayMessage(`Correct! You guessed the number in ${numberGuess} guesses!`);
    }
    else if (guess < randomNumber) {
        displayMessage(`Too low!`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Too high!`);
    }
    else {
        displayMessage(`You have already guessed ${guess}`);
    }
}

function displayGuess(guess) {
    //display the guess
    userInput.value = '';   //It's cleanup method
    guessSlot.innerHTML += `${guess} `
    numberGuess++
    remaining.innerHTML = `${10 - numberGuess}`
    console.log(numberGuess)
}

function displayMessage(guess) {
    //print the message 
    loOrHi.innerHTML = `<h2>${guess}<h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('display', '')
    p.classList.add('button')
    guessSlot.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame() {
    // for the new game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event){
        let randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numberGuess = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numberGuess}`;
        userInput.removeAttribute('disable')
        startOver.removeChild(p)

        playGame = true;
    })
}
