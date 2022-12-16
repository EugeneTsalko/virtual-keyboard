const dataRu = [
  [ // row 1 ru
    {
      key: 'ё', caps: 'Ё', shift: 'Ё', code: 'Backquote',
    },
    {
      key: '1', caps: '1', shift: '!', code: 'Digit1',
    },
    {
      key: '2', caps: '2', shift: '"', code: 'Digit2',
    },
    {
      key: '3', caps: '3', shift: '№', code: 'Digit3',
    },
    {
      key: '4', caps: '4', shift: ';', code: 'Digit4',
    },
    {
      key: '5', caps: '5', shift: '%', code: 'Digit5',
    },
    {
      key: '6', caps: '6', shift: ':', code: 'Digit6',
    },
    {
      key: '7', caps: '7', shift: '?', code: 'Digit7',
    },
    {
      key: '8', caps: '8', shift: '*', code: 'Digit8',
    },
    {
      key: '9', caps: '9', shift: '(', code: 'Digit9',
    },
    {
      key: '0', caps: '0', shift: ')', code: 'Digit0',
    },
    {
      key: '-', caps: '-', shift: '_', code: 'Minus',
    },
    {
      key: '=', caps: '=', shift: '+', code: 'Equal',
    },
    {
      key: 'backspace', caps: 'backspace', shift: 'backspace', code: 'Backspace',
    },
  ],
  [ // row 2 en
    {
      key: 'tab', caps: 'tab', shift: 'tab', code: 'Tab',
    },
    {
      key: 'й', caps: 'Й', shift: 'Й', code: 'KeyQ',
    },
    {
      key: 'ц', caps: 'Ц', shift: 'Ц', code: 'KeyW',
    },
    {
      key: 'у', caps: 'У', shift: 'У', code: 'KeyE',
    },
    {
      key: 'к', caps: 'К', shift: 'К', code: 'KeyR',
    },
    {
      key: 'е', caps: 'Е', shift: 'Е', code: 'KeyT',
    },
    {
      key: 'н', caps: 'Н', shift: 'Н', code: 'KeyY',
    },
    {
      key: 'г', caps: 'Г', shift: 'Г', code: 'KeyU',
    },
    {
      key: 'ш', caps: 'Ш', shift: 'Ш', code: 'KeyI',
    },
    {
      key: 'щ', caps: 'Щ', shift: 'Щ', code: 'KeyO',
    },
    {
      key: 'з', caps: 'З', shift: 'З', code: 'KeyP',
    },
    {
      key: 'х', caps: 'Х', shift: 'Х', code: 'BracketLeft',
    },
    {
      key: 'ъ', caps: 'Ъ', shift: 'Ъ', code: 'BracketRight',
    },
    {
      key: '\\', caps: '\\', shift: '/', code: 'Backslash',
    },
  ],
  [// row 3 en
    {
      key: 'capslock', caps: 'capslock', shift: 'capslock', code: 'CapsLock',
    },
    {
      key: 'ф', caps: 'Ф', shift: 'Ф', code: 'KeyA',
    },
    {
      key: 'ы', caps: 'Ы', shift: 'Ы', code: 'KeyS',
    },
    {
      key: 'в', caps: 'В', shift: 'В', code: 'KeyD',
    },
    {
      key: 'а', caps: 'А', shift: 'А', code: 'KeyF',
    },
    {
      key: 'п', caps: 'П', shift: 'П', code: 'KeyG',
    },
    {
      key: 'р', caps: 'Р', shift: 'Р', code: 'KeyH',
    },
    {
      key: 'о', caps: 'О', shift: 'О', code: 'KeyJ',
    },
    {
      key: 'л', caps: 'Л', shift: 'Л', code: 'KeyK',
    },
    {
      key: 'д', caps: 'Д', shift: 'Д', code: 'KeyL',
    },
    {
      key: 'ж', caps: 'Ж', shift: 'Ж', code: 'Semicolon',
    },
    {
      key: 'э', caps: 'Э', shift: 'Э', code: 'Quote',
    },
    {
      key: 'enter', caps: 'enter', shift: 'enter', code: 'Enter',
    },
  ],
  [// row 4 en
    {
      key: 'shift', caps: 'shift', shift: 'shift', code: 'ShiftLeft',
    },
    {
      key: 'я', caps: 'Я', shift: 'Я', code: 'KeyZ',
    },
    {
      key: 'ч', caps: 'Ч', shift: 'Ч', code: 'KeyX',
    },
    {
      key: 'с', caps: 'С', shift: 'С', code: 'KeyC',
    },
    {
      key: 'м', caps: 'М', shift: 'М', code: 'KeyV',
    },
    {
      key: 'и', caps: 'И', shift: 'И', code: 'KeyB',
    },
    {
      key: 'т', caps: 'Т', shift: 'Т', code: 'KeyN',
    },
    {
      key: 'ь', caps: 'Ь', shift: 'Ь', code: 'KeyM',
    },
    {
      key: 'б', caps: 'Б', shift: 'Б', code: 'Comma',
    },
    {
      key: 'ю', caps: 'Ю', shift: 'Ю', code: 'Period',
    },
    {
      key: '.', caps: '.', shift: ',', code: 'Slash',
    },
    {
      key: '▲', caps: '▲', shift: '▲', code: 'ArrowUp',
    },
    {
      key: 'shift', caps: 'shift', shift: 'shift', code: 'ShiftRight',
    },
  ],
  [ // row 5 en
    {
      key: 'ctrl', caps: 'ctrl', shift: 'ctrl', code: 'ControlLeft',
    },
    {
      key: 'alt', caps: 'alt', shift: 'alt', code: 'AltLeft',
    },
    {
      key: 'space', caps: 'space', shift: 'space', code: 'Space',
    },
    {
      key: 'alt', caps: 'alt', shift: 'alt', code: 'AltRight',
    },
    {
      key: 'ctrl', caps: 'ctrl', shift: 'ctrl', code: 'ControlRight',
    },
    {
      key: '◄', caps: '◄', shift: '◄', code: 'ArrowLeft',
    },
    {
      key: '▼', caps: '▼', shift: '▼', code: 'ArrowDown',
    },
    {
      key: '►', caps: '►', shift: '►', code: 'ArrowRight',
    },
    {
      key: 'ru', caps: 'ru', shift: 'ru', code: 'lang',
    },
  ],
];

export default dataRu;
