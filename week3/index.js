renderMainPage();

function gameStartEvent() {
    hide(document.getElementById('title'));
    hide(document.getElementById('startButton'))
    .then(() => {
        clearPage();
        renderCombinationDecisionPage();
    })
}

function numberInputEvent(number) {

}

function numberEraseEvent() {

}

function numberClearEvent() {
    
}