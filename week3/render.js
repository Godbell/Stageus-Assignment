function page() {
    return document.getElementsByTagName('main')[0];
}

function render(elementString) {
    const element = parseHTML(elementString);
    page().appendChild(element);
}

function renderMainPage() {
    renderTitle();
    renderStartButton();

    const title = document.getElementById('title');
    title.style.opacity = 0;

    const startButton = document.getElementById('startButton');
    startButton.style.opacity = 0;

    const titleAnimationDelay = 10;
    const startButtonAnimationDelay = 200;

    show(title, titleAnimationDelay);
    show(startButton, startButtonAnimationDelay);
}

function renderCombinationDecisionPage() {
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


function renderTitle() {
    return render(
`<h1 id="title" class="text fade flex-item">
    Baseball
</h1>`
    );
}

function renderStartButton() {
    render(
`<button id="startButton" class="text fade flex-item" onclick="gameStartEvent()">
    start
</button>`
    );
}

function renderDecisionNotice() {
    render(
`<h1 id="decision-notice" class="text fade flex-item">
Decide your combination
</h1>`
    );
}

function renderNumberInput() {
    render(
`<div id="number-input" class="fade">
    <span class="text large-number"> </span>
    <span class="text large-number"> </span>
    <span class="text large-number"> </span>
</div>`
    )
}

function renderNumpad() {
    render(
`<div id="numpad" class="fade">
    <div class="numpad-row">
        <button class="numpad-button" onclick="numberInputEvent(1)">1</button>
        <button class="numpad-button" onclick="numberInputEvent(2)>2</button>
        <button class="numpad-button" onclick="numberInputEvent(3)>3</button>
    </div>
    <div class="numpad-row">
        <button class="numpad-button" onclick="numberInputEvent(4)>4</button>
        <button class="numpad-button" onclick="numberInputEvent(5)>5</button>
        <button class="numpad-button" onclick="numberInputEvent(6)>6</button>
    </div>
    <div class="numpad-row">
        <button class="numpad-button" onclick="numberInputEvent(7)>7</button>
        <button class="numpad-button" onclick="numberInputEvent(8)>8</button>
        <button class="numpad-button" onclick="numberInputEvent(9)>9</button>
    </div>
    <div class="numpad-row">
        <button class="numpad-button" onclick="numberClearEvent()>C</button>
        <button class="numpad-button" onclick="numberInputEvent(0)>0</button>
        <button class="numpad-button" onclick="numberEraseEvent()><</button>
    </div>
</div>`
    );
}