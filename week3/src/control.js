function frame() {
  return document.getElementsByTagName("main")[0];
}

function parseHTML(elementString) {
  const container = document.createElement("template");
  container.innerHTML = elementString;
  return container.content;
}

function fadeIn(element, delay) {
  return new Promise((resolve) => {
    const onAnimationEnd = () => {
      element.removeEventListener("transitionend", onAnimationEnd);
      resolve();
    };

    element.addEventListener("transitionend", onAnimationEnd);
    wait(delay).then(() => {
      element.style.opacity = 1;
    });
  });
}

function fadeOut(element, delay = 20) {
  return new Promise((resolve) => {
    const onAnimationEnd = () => {
      element.removeEventListener("transitionend", onAnimationEnd);
      resolve();
    };

    element.addEventListener("transitionend", onAnimationEnd);
    wait(delay).then(() => {
      element.style.opacity = 0;
    });
  });
}

function fadeOutAll(elements, delay = 20) {
  let promises = [];
  for (let element of elements) {
    promises.push(
      new Promise((resolve) => {
        fadeOut(element, delay).then(resolve);
      })
    );
  }

  return new Promise((resolve) => {
    Promise.all(promises).then(resolve);
  });
}

function clearPage() {
  let elements = Array.from(frame().children);
  for (let element of elements) {
    element.remove();
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}
