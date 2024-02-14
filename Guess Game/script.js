let rndm = parseInt(Math.random() * 100) + 1;
console.log(rndm);


const submit = document.querySelector('.guessSubmit')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowORHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // check whether the guess is valid or not
    if (isNaN(guess)) {
        alert('Please enter a valid number!')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        if (numGuess >= 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${rndm}`)
            endGame()
        } else {
            prevGuess.push(guess)
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // check the guess
    if (guess == rndm) {
        displayMessage(`You guessed it right.`)
        endGame()
    } else if (guess < rndm) {
        displayMessage(`Number is too low`)

    } else if (guess > rndm) {
        displayMessage(`Number is too high`)
    }

}

function displayGuess(guess) {
    // display guess
    userInput.value = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message) {
    // display message
    lowORHi.innerHTML = `<h2>${message}</h2>`

}

function endGame() {
    // used to end game
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    // used to start new game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.style.cursor = 'pointer';
    newGameButton.style.border = '2px solid #333';

    newGameButton.addEventListener('click', (e) => {
        e.preventDefault()
        newGameButton.style.cursor = 'pointer';
        rndm = parseInt(Math.random() * 100) + 1;
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        playGame = true;
    })
}





