function render(elementString, parent = frame()) {
  const element = parseHTML(elementString);
  parent.appendChild(element);
}

function renderTitleTransparent() {
  const id = "title";
  render(
    `<h1 id="${id}" class="text fade">
  Baseball
</h1>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderStartButtonTransparent() {
  const id = "start-button";
  render(
    `<button id="${id}" class="text fade" onclick="gameStartEvent()">
  start
</button>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderDecisionNoticeTransparent() {
  const id = "decision-notice";
  render(
    `<div id="${id}" class="fade">
  <h1 id="decision-notice-text" class="text">
    Decide your Secret Number
  </h1>
  <div class="help">
    ?
    <span id="help-tooltip" class="tooltip">
      Secret Number must contain 3 numbers without duplication.
    </span>
  </div>
</div>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderInputFieldTransparent() {
  const id = "input-field";
  render(`<div id="${id}" class="fade">
  <span id="toast-tooltip" class="tooltip fade">
    Secret Number must contain 3 numbers without duplication.
  </span>
</div>`);

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderLargeNumber(number, field) {
  render(`<span class="text large-number">${number.toString()}</span>`, field);
}

function renderNumpadTransparent() {
  const id = "numpad";
  render(
    `<div id="${id}" class="fade">
  <div class="numpad-row">
    <button class="numpad-button number-button">1</button>
    <button class="numpad-button number-button">2</button>
    <button class="numpad-button number-button">3</button>
  </div>
  <div class="numpad-row">
    <button class="numpad-button number-button">4</button>
    <button class="numpad-button number-button">5</button>
    <button class="numpad-button number-button">6</button>
  </div>
  <div class="numpad-row">
    <button class="numpad-button number-button">7</button>
    <button class="numpad-button number-button">8</button>
    <button class="numpad-button number-button">9</button>
  </div>
  <div class="numpad-row">
    <button id="clear-button" class="numpad-button">C</button>
    <button id="erase-button" class="numpad-button"><</button>
    <button id="enter-button" class="numpad-button">↵</button>
  </div>
</div>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderConfirmMenuTransparent() {
  const id = "confirm-menu";
  render(
    `<div id="${id}" class="fade">
  <button id="confirm" class="text">Confirm</button>
  <button id="cancel" class="text">No, I've changed my mind</button>
</div>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderOpponentDecisionNoticeTransparent() {
  const id = "opponent-decision-notice";
  render(
    `<h1 id="${id}" class="text fade">
  Your opponent decides Secret Number
</h1>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderGuessNoticeTransparent() {
  const id = "guess-notice";
  render(
    `<h1 id="${id}" class="text fade">
  Make your guess
</h1>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderGuessProcessNoticeTransparent(guess) {
  const id = "guess-process-notice";
  render(
    `<h1 id="${id}" class="text fade">
  You guess <span class="large-number">${guess.join("")}</span>...
</h1>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderGuessResultNoticeTransparent(result) {
  const id = "guess-result-notice";
  render(
    `<h1 id="${id}" class="text fade">
  It's <span class="large-number">${result[0]}</span> Strikes and <span class="large-number">${result[1]}</span> Balls
</h1>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderLogTransparent() {
  const id = "log";
  render(``);

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderOpponentGuessNoticeTransparent() {
  const id = "opponent-guess-notice";
  render(
    `<h1 id="${id}" class="text fade">
  Your opponent guesses your Secret Number
</h1>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderOpponentGuessProcessNoticeTransparent(guess) {
  const id = "opponent-guess-process-notice";
  render(
    `<h1 id="${id}" class="text fade">
  Your opponent guesses <span class="large-number">${guess.join("")}</span>...
</h1>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderVictoryNoticeTransparent() {
  const id = "victory-notice";
  render(`<h1 id="${id}" class="text fade">You've won!</h1>`);

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderDefeatNoticeTransparent() {
  const id = "defeat-notice";
  render(`<h1 id="${id}" class="text fade">You've been defeated...</h1>`);

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderAnswerRevealTransparent(secretNumber) {
  const id = "answer-reveal";
  render(
    `<h2 id="${id}" class="text fade">Your opponent's Secret Number was ${secretNumber.join(
      " "
    )}</h2>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderGuessTimesNoticeTransparent(guessTimes) {
  const id = "guess-times";
  render(
    `<h2 id="${id}" class="text fade">You've made it with ${guessTimes} guesses</h2>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}

function renderPlayAgainButton() {
  const id = "play-again";
  render(
    `<button id="${id}" class="text fade" onclick="gameStartEvent()">
  Play Again?
</button>`
  );

  const rendered = document.getElementById(id);
  rendered.style.opacity = 0;
  return rendered;
}
