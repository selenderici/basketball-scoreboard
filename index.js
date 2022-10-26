let scoreHome = document.getElementById("score-home")
let scoreGuess = document.getElementById("score-guess")
let score1 = 0
let score2 = 0

function add1HomePoint() {
    score1 += 1
    scoreHome.textContent = score1
}

function add2HomePoint() {
    score1 += 2
    scoreHome.textContent = score1
}

function add3HomePoint() {
    score1 += 3
    scoreHome.textContent = score1
}


function add1GuessPoint() {
    score2 += 1
    scoreGuess.textContent = score2
}

function add2GuessPoint() {
    score2 += 2
    scoreGuess.textContent = score2
}

function add3GuessPoint() {
    score2 += 3
    scoreGuess.textContent = score2
}

function newGame() {
    scoreHome.textContent = 0
    scoreGuess.textContent = 0
    score1 = 0
    score2 = 0
}