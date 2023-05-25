function loadMainPage() {
    renderTitle();
    renderStartButton();

    const title = document.getElementById('title');
    title.style.opacity = 0;

    const startButton = document.getElementById('startButton');
    startButton.style.opacity = 0;

    const titleAnimationDelay = 400;
    const startButtonAnimationDelay = 600;

    show(title, titleAnimationDelay);
    show(startButton, startButtonAnimationDelay);
}

function loadCombinationDecisionPage() {
    renderDecisionNotice();
    renderNumberInput();
    renderNumpad();

    const decisionNotice = document.getElementById('decision-notice');
    const numberInput = document.getElementById('number-input');
    const numpad = document.getElementById('numpad');

    decisionNotice.style.opacity = 0;
    numberInput.style.opacity = 0;
    numpad.style.opacity = 0;

    show(decisionNotice)
    .then(() => show(numberInput))
    .then(() => show(numpad));
}