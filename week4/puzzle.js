const consoleType = getURLParam('console');
const puzzle = puzzleConfig[consoleType];
const puzzleState = Array(puzzle.row * puzzle.column).fill(false);
let currentGame = null;
let currentGameChip = null;
let currentPiece = null;
let mousedown = false;
let mouseOffsetX = 0;
let mouseOffsetY = 0;
let mouseCurrentX = 0;
let mouseCurrentY = 0;

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
  puzzleElement.className = 'puzzle';

  const frameElement = document.getElementById('frame-' + consoleType);
  const gameConsoleElement = document.getElementById('console');
  frameElement.insertBefore(puzzleElement, gameConsoleElement);

  // create piece holders
  for (let i = 0; i < puzzle.row; i++) {
    for (let j = 0; j < puzzle.column; j++) {
      const pieceHolder = document.createElement('div');
      pieceHolder.className = 'puzzle-piece-holder';
      pieceHolder.dataset.pieceNumber = puzzle.row * i + j;

      pieceHolder.ondragover = (e) => {};
      pieceHolder.ondrop = (e) => {};

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
}

function createPuzzlePieces() {
  const conveyer = document.getElementById('conveyer');
  const title = new Image();
  title.src = currentGame.title_image_location;

  title.onload = () => {
    for (let i = 0; i < puzzle.row; i++) {
      for (let j = 0; j < puzzle.column; j++) {
        const piece = document.createElement('canvas');
        piece.width = currentGame.title_image_width / puzzle.column;
        piece.height = currentGame.title_image_height / puzzle.row;
        piece.draggable = true;
        piece.className = 'puzzle-piece';
        piece.dataset.pieceNumber = puzzle.row * i + j;
        piece.style.aspectRatio = 1;

        if (puzzle.console_screen_width != null) {
          piece.style.width =
            'calc(' + puzzle.console_screen_width + ' / ' + puzzle.column + ')';
        } else {
          piece.style.height =
            'calc(' + puzzle.console_screen_height + ' / ' + puzzle.row + ')';
        }

        piece.ondragstart = () => {
          currentPiece = piece;
        };

        piece.ondragend = () => {
          currentPiece = null;
        };

        conveyer.appendChild(piece);
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
  };
}

function getImage(imgLocation) {}
