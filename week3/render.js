function render(elementString, parent = page()) {
    const element = parseHTML(elementString);
    parent.appendChild(element);
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
`<div id="number-input" class="fade"></div>`
    )
}

function renderLargeNumber(number, field) {
    render(
`<span class="text large-number">` + number.toString() + `</span>`
        , field
    )
}

function renderNumpad() {
    render(
`<div id="numpad" class="fade">
    <div class="numpad-row">
        <button class="numpad-button" onclick="numberInputEvent(1)">1</button>
        <button class="numpad-button" onclick="numberInputEvent(2)">2</button>
        <button class="numpad-button" onclick="numberInputEvent(3)">3</button>
    </div>
    <div class="numpad-row">
        <button class="numpad-button" onclick="numberInputEvent(4)">4</button>
        <button class="numpad-button" onclick="numberInputEvent(5)">5</button>
        <button class="numpad-button" onclick="numberInputEvent(6)">6</button>
    </div>
    <div class="numpad-row">
        <button class="numpad-button" onclick="numberInputEvent(7)">7</button>
        <button class="numpad-button" onclick="numberInputEvent(8)">8</button>
        <button class="numpad-button" onclick="numberInputEvent(9)">9</button>
    </div>
    <div class="numpad-row">
        <button class="numpad-button" onclick="numberClearEvent()">C</button>
        <button class="numpad-button" onclick="numberInputEvent(0)">0</button>
        <button class="numpad-button" onclick="numberEraseEvent()"><</button>
    </div>
</div>`
    );
}

function renderCombinationConfirmMenu() {
    render(
`<button id="confirm" class="text fade">
    Confirm
</button>
<button id="cancel" class="text fade">
    No, I've changed my mind
</button>`
    )
}