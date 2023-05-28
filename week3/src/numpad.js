// requires render.js for number input feature
// requires loader.js

function initNumpad(
  inputCallback,
  clearCallback,
  eraseCallback,
  confirmCallback
) {
  // configure number input action
  const numberButtonElements = document.getElementsByClassName("number-button");
  for (let numberButtonElement of numberButtonElements) {
    numberButtonElement.addEventListener("click", () => {
      const numberElements = document.getElementsByClassName("large-number");
      if (numberElements.length >= 3) {
        showInstruction();
        return;
      }

      const numbers = Array.from(numberElements).map((number) =>
        parseInt(number.innerHTML)
      );
      const newNumber = parseInt(numberButtonElement.innerHTML);
      if (numbers.includes(newNumber)) {
        showInstruction();
        return;
      }

      const inputField = document.getElementById("input-field");
      renderLargeNumber(newNumber, inputField);

      // runs custom action
      inputCallback(newNumber);
    });
  }

  // configure clear action
  const clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", () => {
    const numberElements = Array.from(
      document.getElementsByClassName("large-number")
    );
    for (let numberElement of numberElements) {
      numberElement.remove();
    }

    // runs custom action
    clearCallback();
  });

  // configure erasing action
  const eraseButton = document.getElementById("erase-button");
  eraseButton.addEventListener("click", () => {
    const numberElements = document.getElementsByClassName("large-number");
    if (numberElements.length == 0) return;

    const lastNumberElement = numberElements[numberElements.length - 1];
    lastNumberElement.remove();

    // runs custom action
    eraseCallback();
  });

  // configure enter button press action
  const enterButton = document.getElementById("enter-button");
  const enterEvent = () => {
    // ensure running only once
    const numberElements = document.getElementsByClassName("large-number");
    if (numberElements.length < 3) {
      showInstruction();
      return;
    }

    enterButton.removeEventListener("click", enterEvent);
    unloadFadeElement(document.getElementById("numpad"))
      .then(loadConfirmMenu)
      .then(() =>
        // init confirm menu after loading it
        // init numpad after numpad apprears again by cancellation
        initConfirmMenu(confirmCallback, () =>
          initNumpad(
            inputCallback,
            clearCallback,
            eraseCallback,
            confirmCallback
          )
        )
      );
  };
  enterButton.addEventListener("click", enterEvent);
}

function initConfirmMenu(confirmCallback, cancelCallback) {
  const confirmButton = document.getElementById("confirm");
  const confirmEvent = () => {
    confirmButton.removeEventListener("click", confirmEvent);
    confirmCallback();
  };
  confirmButton.addEventListener("click", confirmEvent);

  const cancelButton = document.getElementById("cancel");
  const cancelEvent = () => {
    cancelButton.removeEventListener("click", cancelEvent);
    unloadFadeElement(document.getElementById("confirm-menu"))
      .then(loadNumpad)
      .then(cancelCallback);
  };
  cancelButton.addEventListener("click", cancelEvent);
}
