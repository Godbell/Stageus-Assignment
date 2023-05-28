// requires control.js for dom control and fades

function unloadPage() {
  let elementsToFadeOut = Array.from(frame().getElementsByClassName("fade"));

  return new Promise((resolve) => {
    fadeOutAll(elementsToFadeOut).then(clearPage).then(resolve);
  });
}

function unloadFadeElement(element) {
  return new Promise((resolve) => {
    fadeOut(element)
      .then(() => {
        element.remove();
      })
      .then(resolve);
  });
}

function loadMainPage() {
  const title = renderTitleTransparent();
  const startButton = renderStartButtonTransparent();

  fadeIn(title, 400).then(() => fadeIn(startButton, 200));
}

function loadSecretNumberDecisionPage() {
  const decisionNotice = renderDecisionNoticeTransparent();
  const inputField = renderInputFieldTransparent();
  const numpad = renderNumpadTransparent();

  fadeIn(decisionNotice)
    .then(() => fadeIn(inputField))
    .then(() => fadeIn(numpad));
}

function showInstruction() {
  const toastTooltip = document.getElementById("toast-tooltip");
  if (toastTooltip.style.visibility == "visible") return;

  return new Promise((resolve) => {
    toastTooltip.style.visibility = "visible";
    wait(3000)
      .then(() => {
        toastTooltip.style.visibility = "hidden";
      })
      .then(resolve);
  });
}

function loadNumpad() {
  const numpad = renderNumpadTransparent();
  fadeIn(numpad);
}

function loadConfirmMenu() {
  const confirmMenu = renderConfirmMenuTransparent();
  fadeIn(confirmMenu);
}

function loadOpponentDecisionPage() {
  const opponentDecisionNotice = renderOpponentDecisionNoticeTransparent();

  fadeIn(opponentDecisionNotice);
}

function loadPlayerGuessPage() {
  const guessNotice = renderGuessNoticeTransparent();
  const inputField = renderInputFieldTransparent();
  const numpad = renderNumpadTransparent();

  fadeIn(guessNotice)
    .then(() => fadeIn(inputField))
    .then(() => fadeIn(numpad));
}

function loadPlayerGuessProcessPage(guess) {
  const guessProcessNotice = renderGuessProcessNoticeTransparent(guess);

  fadeIn(guessProcessNotice);
}

function loadGuessResultPage(result) {
  const guessResultNotice = renderGuessResultNoticeTransparent(result);

  fadeIn(guessResultNotice);
}

function loadOpponentGuessNoticePage() {
  const opponentGuessNotice = renderOpponentGuessNoticeTransparent();

  fadeIn(opponentGuessNotice);
}

function loadOpponentGuessProcessNoticePage(guess) {
  const opponentGuessProcessNotice =
    renderOpponentGuessProcessNoticeTransparent(guess);

  fadeIn(opponentGuessProcessNotice);
}

function loadVictoryPage(guessTimes) {
  const victoryNotice = renderVictoryNoticeTransparent();
  const guessTimesNotice = renderGuessTimesNoticeTransparent(guessTimes);
  const playAgainButton = renderPlayAgainButton();

  fadeIn(victoryNotice)
    .then(() => fadeIn(guessTimesNotice))
    .then(() => fadeIn(playAgainButton));
}

function loadDefeatPage(answer) {
  const defeatNotice = renderDefeatNoticeTransparent();
  const answerReveal = renderAnswerRevealTransparent(answer);
  const playAgainButton = renderPlayAgainButton();

  fadeIn(defeatNotice)
    .then(() => fadeIn(answerReveal))
    .then(() => fadeIn(playAgainButton));
}
