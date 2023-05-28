// requires loader.js
// requires gamebase.js
// requires numpad.js

const PAGE_DISPLAY_TIME = 3000;

function gameStartEvent() {
  initGameData();

  unloadPage()
    .then(loadSecretNumberDecisionPage)
    .then(() =>
      initNumpad(
        insertSecretNumber,
        clearSecretNumber,
        popSecretNumber,
        proceedOpponentDecision
      )
    );
}

function proceedOpponentDecision() {
  unloadPage()
    .then(loadOpponentDecisionPage)
    .then(() => wait(PAGE_DISPLAY_TIME))
    .then(proceedPlayerGuessInput);
}

function proceedPlayerGuessInput() {
  unloadPage()
    .then(loadPlayerGuessPage)
    .then(() =>
      initNumpad(insertGuessNumber, clearGuess, popGuess, proceedPlayerGuess)
    );
}

function proceedPlayerGuess() {
  let guessResult;
  unloadPage()
    .then(() => loadPlayerGuessProcessPage(playerGuess))
    .then(() => wait(PAGE_DISPLAY_TIME))
    .then(unloadPage)
    .then(() => {
      guessResult = evaluateGuess(playerGuess, opponentSecretNumber);
      recordPlayerGuessAndResult(playerGuess, guessResult);
      clearGuess();
    })
    .then(() => loadGuessResultPage(guessResult))
    .then(() => wait(PAGE_DISPLAY_TIME))
    .then(() => {
      if (guessResult[0] == 3) {
        // 3 strikes
        Victory();
      } else {
        proceedOpponentGuess();
      }
    });
}

function proceedOpponentGuess() {
  let guessResult;
  unloadPage()
    .then(loadOpponentGuessNoticePage)
    .then(() => wait(PAGE_DISPLAY_TIME))
    .then(unloadPage)
    .then(() => {
      setOpponentGuess();
      loadOpponentGuessProcessNoticePage(opponentGuess);
    })
    .then(() => wait(PAGE_DISPLAY_TIME))
    .then(unloadPage)
    .then(() => {
      guessResult = evaluateGuess(opponentGuess, playerSecretNumber);
      loadGuessResultPage(guessResult);
    })
    .then(() => wait(PAGE_DISPLAY_TIME))
    .then(() => {
      if (guessResult[0] == 3) Defeat();
      else {
        proceedPlayerGuessInput();
      }
    });
}

function Victory() {
  unloadPage().then(() => loadVictoryPage(guessLog.length));
}

function Defeat() {
  unloadPage().then(() => loadDefeatPage(opponentSecretNumber));
}
