const PAGE_MAX = document.getElementsByTagName('article').length;
const PAGE_WIDTH = 500;

let currentPageIndex = 0;
applyPagePositions();

function goLeftPage() {
  if (currentPageIndex == 0) return;
  currentPageIndex -= 1;
  applyPagePositions();
}

function goRightPage() {
  if (currentPageIndex == PAGE_MAX - 1) return;
  currentPageIndex += 1;
  applyPagePositions();
}

function applyPagePositions() {
  const pages = document.getElementsByTagName('article');
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.left = PAGE_WIDTH * (-currentPageIndex + i) + 'px';
  }
}
