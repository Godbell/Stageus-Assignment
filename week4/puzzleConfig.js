const CONSOLE_SIZE = '70vmin';
const puzzleConfig = {
  gameboy: {
    row: 4,
    column: 4,
    console_image_location: 'img/console/gameboy.png',
    console_screen_width: null,
    console_screen_height: CONSOLE_SIZE + ' * 0.3636',
    games: [
      {
        name: 'POKEMON',
        chip_image_location: 'img/chip/chip_gameboy_pokemon.png',
        chip_highlighted_image_location:
          'img/chip/chip_gameboy_pokemon_highlighted.png',
        title_image_location: 'img/game_title/gameboy_pokemon.png',
        title_complete_image_location:
          'img/game_title/gameboy_pokemon_complete.gif',
        title_image_width: 461,
        title_image_height: 461,
      },
    ],
  },
  dslite: {
    row: 4,
    column: 4,
    console_image_location: 'img/console/dslite_closed.png',
    console_image_semiopened_location: 'img/console/dslite_semiopened.png',
    console_image_opened_location: 'img/console/dslite.png',
    console_screen_width: null,
    console_screen_height: CONSOLE_SIZE + ' * 0.3636', //'29.088vmin', // 80vmin(frame) * 100%(console) * 36.36%(puzzle)
    games: [
      {
        name: 'KIRBY',
        chip_image_location: 'img/chip/chip_dslite_kirby.png',
        chip_highlighted_image_location:
          'img/chip/chip_dslite_kirby_highlighted.png',
        title_image_location: 'img/game_title/dslite_kirby.png',
        title_complete_image_location:
          'img/game_title/dslite_kirby_complete.gif',
        title_image_width: 429,
        title_image_height: 322,
      },
      {
        name: 'MARIO',
        chip_image_location: 'img/chip/chip_dslite_mario.png',
        chip_highlighted_image_location:
          'img/chip/chip_dslite_mario_highlighted.png',
        title_image_location: 'img/game_title/dslite_mario.png',
        title_complete_image_location:
          'img/game_title/dslite_mario_complete.gif',
        title_image_width: 640,
        title_image_height: 360,
      },
      {
        name: 'POKEMON',
        chip_image_location: 'img/chip/chip_dslite_pokemon.png',
        chip_highlighted_image_location:
          'img/chip/chip_dslite_pokemon_highlighted.png',
        title_image_location: 'img/game_title/dslite_pokemon.png',
        title_complete_image_location:
          'img/game_title/dslite_pokemon_complete.gif',
        title_image_width: 189,
        title_image_height: 189,
      },
    ],
  },
  switch: {
    row: 4,
    column: 8,
    console_image_location: 'img/console/switch.png',
    console_screen_width: CONSOLE_SIZE + ' * 0.6882', // 80vmin(frame) * 100%(console) * 68.82%(puzzle)
    console_screen_height: null,
    games: [
      {
        name: 'ANICROSS',
        chip_image_location: 'img/chip/chip_switch_anicross.png',
        chip_highlighted_image_location:
          'img/chip/chip_switch_anicross_highlighted.png',
        title_image_location: 'img/game_title/switch_anicross.png',
        title_complete_image_location:
          'img/game_title/switch_anicross_complete.gif',
        title_image_width: 654,
        title_image_height: 327,
      },
    ],
  },
};
