let playerSecretNumber = [];
let opponentSecretNumber = [];
let playerGuess = [];
let guessLog = [];
let opponentGuessLog = [];
let opponentGuess = [];

function initGameData() {
  playerSecretNumber = [];
  opponentSecretNumber = generateRandomSecretNumber();
  playerGuess = [];
  guessLog = [];
  opponentGuessLog = [];
  opponentGuess = [];
}

function insertSecretNumber(number) {
  playerSecretNumber.push(number);
}

function popSecretNumber() {
  playerSecretNumber.pop();
}

function clearSecretNumber() {
  playerSecretNumber = [];
}

function insertGuessNumber(number) {
  playerGuess.push(number);
}

function clearGuess() {
  playerGuess = [];
}

function popGuess() {
  playerGuess.pop();
}

function generateRandomSecretNumber() {
  let secretNumber = [];
  for (let i = 0; i < 3; i++) {
    let number = randomInteger(1, 10);
    while (secretNumber.includes(number)) {
      number = randomInteger(1, 10);
    }
    secretNumber.push(number);
  }
  return secretNumber;
}

function setOpponentGuess() {
  let guess = generateRandomSecretNumber();
  while (opponentGuessLog.includes(guess)) {
    guess = generateRandomSecretNumber();
  }
  opponentGuess = guess;
}

function evaluateGuess(guess, answer) {
  let result = [0, 0]; // [strikes, balls]

  for (let guessIndex = 0; guessIndex < 3; guessIndex++) {
    for (let answerIndex = 0; answerIndex < 3; answerIndex++) {
      if (guess[guessIndex] == answer[answerIndex]) {
        if (guessIndex == answerIndex) {
          result[0]++;
        } else {
          result[1]++;
        }
      }
    }
  }

  return result;
}

function recordPlayerGuessAndResult(guess, result) {
  guessLog.push([guess, result]);
}

function recordOpponentGuess(guess) {
  opponentGuessLog.push(guess);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
