const consoleType = getURLParam('console');
const puzzle = puzzleConfig[consoleType];
let puzzleState = Array(puzzle.row * puzzle.column).fill(false);
let currentGame = null;
let currentGameChip = null;
let currentPiece = null;

initStage();
createChips();

function getURLParam(paramNameToFind) {
  // ...://location/to/the/page ? paramNameToFind=value&other=value
  const queryString = window.location.href.split('?')[1];

  // paramNameToFind=value & other=value
  const params = queryString.split('&');

  for (let param of params) {
    // paramNameToFind = value
    const paramName = param.split('=')[0];
    const paramValue = param.split('=')[1];

    if (paramName == paramNameToFind) return paramValue;
  }

  console.error('could not find param: ' + paramNameToFind);
}

function createChips() {
  const conveyer = document.getElementById('conveyer');
  for (let game of puzzle.games) {
    const chipImage = document.createElement('img');
    chipImage.src = game.chip_image_location;
    chipImage.className = consoleType + '-chip';
    chipImage.id = game.name;
    ///*
    chipImage.ondragstart = () => {
      currentGameChip = chipImage;
    };
    chipImage.ondragend = () => {
      currentGameChip = null;
    };
    chipImage.onmouseover = () => {
      chipImage.src = game.chip_highlighted_image_location;
    };
    chipImage.onmouseleave = () => {
      chipImage.src = game.chip_image_location;
    };
    chipImage.draggable = true;
    conveyer.appendChild(chipImage);
  }
}

function initStage() {
  document.getElementById('console').src = puzzle.console_image_location;
  const frame = document.getElementsByClassName('frame')[0];
  frame.id = 'frame-' + consoleType;

  frame.ondrop = (e) => {
    if (currentGameChip == null) return;
    initGame();
  };
  frame.ondragover = (e) => {
    console.log('calling ondragover event');
    e.preventDefault();
    e.stopPropagation();
  };
}

function initGame() {
  console.log('call initgame by dropping chip');

  currentGame = puzzle.games.filter((gameName) => {
    return gameName.name == currentGameChip.id;
  })[0];

  if (consoleType == 'dslite') {
    const gameConsole = document.getElementById('console');
    setTimeout(() => {
      gameConsole.src = puzzle.console_image_semiopened_location;
      setTimeout(() => {
        gameConsole.src = puzzle.console_image_opened_location;
      }, 500);
    }, 500);
  }

  const frame = document.getElementsByClassName('frame')[0];
  frame.ondrop = null;
  frame.draggable = false;

  removeChips();
  createPuzzleElement();
  createPuzzlePieces();
}

function createPuzzleElement() {
  const puzzleElement = document.createElement('div');
  puzzleElement.id = 'puzzle-' + consoleType;
  puzzleElement.className = 'puzzle ' + consoleType + '-grid';

  const frameElement = document.getElementById('frame-' + consoleType);
  const gameConsoleElement = document.getElementById('console');
  frameElement.insertBefore(puzzleElement, gameConsoleElement);

  // create piece holders
  for (let i = 0; i < puzzle.row; i++) {
    for (let j = 0; j < puzzle.column; j++) {
      const pieceHolder = document.createElement('div');
      pieceHolder.className = 'puzzle-piece-holder';
      pieceHolder.dataset.pieceNumber = puzzle.column * i + j;

      pieceHolder.ondragover = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
      pieceHolder.ondrop = (e) => {
        if (currentPiece == null) return;

        if (pieceHolder.childNodes.length == 0) {
          pieceHolder.appendChild(currentPiece);
        } else {
          changePiece(
            currentPiece.dataset.pieceNumber,
            pieceHolder.children[0].dataset.pieceNumber
          );
        }

        checkState();
      };

      puzzleElement.appendChild(pieceHolder);
    }
  }

  return puzzleElement;
}

function removeChips() {
  const chips = document.querySelectorAll('[class*="-chip"]');
  for (let chip of chips) {
    chip.remove();
  }
  document.getElementById('conveyer').remove();
}

function createPuzzlePieces() {
  const conveyer = document.createElement('div');
  conveyer.id = 'piece-conveyer';
  conveyer.className = consoleType + '-grid';
  document.body.insertBefore(
    conveyer,
    document.getElementsByClassName('frame')[0]
  );

  const title = new Image();
  title.src = currentGame.title_image_location;

  title.onload = () => {
    for (let i = 0; i < puzzle.row; i++) {
      for (let j = 0; j < puzzle.column; j++) {
        const pieceHolder = document.createElement('div');
        pieceHolder.className = 'puzzle-piece-holder';
        pieceHolder.ondragover = (e) => {
          e.preventDefault();
          e.stopPropagation();
        };
        pieceHolder.ondrop = (e) => {
          if (currentPiece == null) return;

          if (pieceHolder.childNodes.length == 0) {
            pieceHolder.appendChild(currentPiece);
          } else {
            changePiece(
              currentPiece.dataset.pieceNumber,
              pieceHolder.children[0].dataset.pieceNumber
            );
          }

          checkState();
        };

        if (puzzle.console_screen_width != null) {
          pieceHolder.style.width =
            'calc(' + puzzle.console_screen_width + ' / ' + puzzle.column + ')';
          conveyer.style.height =
            'calc(' +
            puzzle.console_screen_width +
            ' * ' +
            puzzle.row / puzzle.column +
            ')';
        } else {
          pieceHolder.style.height =
            'calc(' + puzzle.console_screen_height + ' / ' + puzzle.row + ')';
          conveyer.style.width =
            'calc(' +
            puzzle.console_screen_height +
            ' * ' +
            puzzle.column / puzzle.row +
            ')';
        }

        const piece = document.createElement('canvas');
        piece.width = currentGame.title_image_width / puzzle.column;
        piece.height = currentGame.title_image_height / puzzle.row;
        piece.draggable = true;
        piece.className = 'puzzle-piece';
        piece.dataset.pieceNumber = puzzle.column * i + j;
        piece.style.aspectRatio = 1;

        piece.ondragstart = () => {
          currentPiece = piece;
        };

        piece.ondragend = () => {
          currentPiece = null;
        };

        pieceHolder.appendChild(piece);
        conveyer.appendChild(pieceHolder);
        const canvasContext = piece.getContext('2d');
        canvasContext.drawImage(
          title,
          piece.width * j,
          piece.height * i,
          piece.width,
          piece.height,
          0,
          0,
          piece.width,
          piece.height
        );
      }
    }

    shufflePieces();
  };
}

function checkState() {
  for (let pieceHolderElement of document.querySelectorAll(
    '.puzzle-piece-holder[data-piece-number]'
  )) {
    const isHolderEmpty = pieceHolderElement.childNodes.length == 0;
    const pieceHolderNumber = parseInt(pieceHolderElement.dataset.pieceNumber);

    if (isHolderEmpty) {
      puzzleState[pieceHolderNumber] = false;
    } else if (
      pieceHolderElement.children[0].dataset.pieceNumber == pieceHolderNumber
    ) {
      puzzleState[pieceHolderNumber] = true;
    } else {
      puzzleState[parseInt(pieceHolderNumber)] = false;
    }
  }

  if (!puzzleState.includes(false)) {
    victory();
  }
}

function shufflePieces() {
  const numberOfPieces = puzzleState.length;
  for (let i = 0; i < numberOfPieces - 1; i++) {
    const randomPieceNumber = randomInteger(0, i + 1);
    changePiece(i, randomPieceNumber);
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function changePiece(pieceNumber1, pieceNumber2) {
  const pieceElement1 = document.querySelector(
    '.puzzle-piece[data-piece-number="' + pieceNumber1 + '"]'
  );
  const pieceElement2 = document.querySelector(
    '.puzzle-piece[data-piece-number="' + pieceNumber2 + '"]'
  );

  const pieceHolder1 = pieceElement1.parentNode;
  const pieceHolder2 = pieceElement2.parentNode;

  pieceHolder1.appendChild(pieceElement2);
  pieceHolder2.appendChild(pieceElement1);
}

function victory() {
  const puzzleElement = document.getElementById('puzzle-' + consoleType);
  puzzleElement.style.backgroundColor = 'white';
  const completePuzzleImage = document.createElement('img');

  fadeOutAll(
    document.querySelectorAll(
      '#puzzle-' + consoleType + ' > .puzzle-piece-holder'
    )
  )
    .then(() => {
      for (let pieceHolder of Array.from(puzzleElement.childNodes)) {
        pieceHolder.remove();
      }
      puzzleElement.classList.remove(consoleType + '-grid');

      completePuzzleImage.id = 'complete-puzzle-image';
      completePuzzleImage.src = currentGame.title_complete_image_location;
      puzzleElement.appendChild(completePuzzleImage);
    })
    .then(() => fadeIn(completePuzzleImage));
}

function fadeIn(element, delay) {
  return new Promise((resolve) => {
    const onAnimationEnd = () => {
      element.removeEventListener('transitionend', onAnimationEnd);
      resolve();
    };

    element.addEventListener('transitionend', onAnimationEnd);
    wait(delay).then(() => {
      element.style.opacity = 1;
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

function fadeOut(element, delay = 20) {
  return new Promise((resolve) => {
    const onAnimationEnd = () => {
      element.removeEventListener('transitionend', onAnimationEnd);
      resolve();
    };

    element.addEventListener('transitionend', onAnimationEnd);
    wait(delay).then(() => {
      element.style.opacity = 0;
    });
  });
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}
