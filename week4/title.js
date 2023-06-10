const gameboyIcon = document.getElementById('gameboy-small');
const dsliteIcon = document.getElementById('dslite-small');
const switchIcon = document.getElementById('switch-small');

gameboyIcon.onmouseover = () => {
  gameboyIcon.src = LOCATION_GAMEBOY_ICON_HIGHLIGHTED;
  console.log('Mouse Over: ' + 'gameboy');
};
gameboyIcon.onmouseout = () => {
  gameboyIcon.src = LOCATION_GAMEBOY_ICON;
  console.log('Mouse Leave: ' + 'gameboy');
};
gameboyIcon.onclick = () => {
  location.href = LOCATION_PUZZLE_PAGE + '?console=gameboy';
};

dsliteIcon.onmouseover = () => {
  dsliteIcon.src = LOCATION_DSLITE_ICON_HIGHLIGHTED;
  console.log('Mouse Over: ' + 'dslite');
};
dsliteIcon.onmouseout = () => {
  dsliteIcon.src = LOCATION_DSLITE_ICON;
  console.log('Mouse Leave: ' + 'dslite');
};
dsliteIcon.onclick = () => {
  location.href = LOCATION_PUZZLE_PAGE + '?console=dslite';
};

switchIcon.onmouseover = () => {
  switchIcon.src = LOCATION_SWITCH_ICON_HIGHLIGHTED;
  console.log('Mouse Over: ' + 'switch');
};
switchIcon.onmouseout = () => {
  switchIcon.src = LOCATION_SWITCH_ICON;
  console.log('Mouse Leave: ' + 'switch');
};
switchIcon.onclick = () => {
  location.href = LOCATION_PUZZLE_PAGE + '?console=switch';
};
