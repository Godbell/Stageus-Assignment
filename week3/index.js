let playerCombination = [];
let opponentCombination = [];
loadMainPage();

function gameStartEvent() {
    hide(document.getElementById('title'));
    hide(document.getElementById('startButton'))
    .then(() => {
        clearPage();
        loadCombinationDecisionPage();
    })
}

function numberInputEvent(number) {
    const inputField = document.getElementById('number-input');
    const numpad = document.getElementById('numpad');
    
    if (playerCombination.length < 3) {
        renderLargeNumber(number, inputField);
        playerCombination.push(number);
    }

    if (playerCombination.length == 3)
    {
        hide(numpad)
        .then(() => {
            numpad.remove();
            renderCombinationConfirmMenu();
            const confirmButton = document.getElementById('confirm');
            confirmButton.style.opacity = 0;
            show(confirmButton);
        });
    }
}

function numberEraseEvent() {
    if (playerCombination.length > 0) {
        playerCombination.pop();
    }
}

function numberClearEvent() {
    
}

function decisionCancelEvent() {
    
}