function parseHTML(elementString) {
    const container = document.createElement('template');
    container.innerHTML = elementString;
    return container.content;
}

function show(element, delay) {
    return new Promise((resolve) => {
        function onAnimationEnd() {
            element.removeEventListener('transitionend', onAnimationEnd);
            resolve();
        }

        element.addEventListener('transitionend', onAnimationEnd);
        wait(delay)
        .then(() => {
            element.style.opacity = 1;
        });
    });
}

function hide(element, delay = 20) {
    return new Promise((resolve) => {
        function onAnimationEnd() {
            element.removeEventListener('transitionend', onAnimationEnd);
            resolve();
        }

        element.addEventListener('transitionend', onAnimationEnd);
        wait(delay)
        .then(() => {
            element.style.opacity = 0;
        });
    });
}

function hideAll(elements, delay = 20) {
    return new Promise((resolve) => {
        elements.foreach(element => {
            // TODO: implement hiding
        })
    })
}

function clearPage() {
    page().innerHTML = "";
}

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms)
        }, ms);
    });
}