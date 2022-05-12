const dataEn = [
  [ // row 1 en
    {
      key: '`', caps: '`', shift: '~', code: 'Backquote',
    },
    {
      key: '1', caps: '1', shift: '!', code: 'Digit1',
    },
    {
      key: '2', caps: '2', shift: '@', code: 'Digit2',
    },
    {
      key: '3', caps: '3', shift: '#', code: 'Digit3',
    },
    {
      key: '4', caps: '4', shift: '$', code: 'Digit4',
    },
    {
      key: '5', caps: '5', shift: '%', code: 'Digit5',
    },
    {
      key: '6', caps: '6', shift: '^', code: 'Digit6',
    },
    {
      key: '7', caps: '7', shift: '&', code: 'Digit7',
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
      key: 'q', caps: 'Q', shift: 'Q', code: 'KeyQ',
    },
    {
      key: 'w', caps: 'W', shift: 'W', code: 'KeyW',
    },
    {
      key: 'e', caps: 'E', shift: 'E', code: 'KeyE',
    },
    {
      key: 'r', caps: 'R', shift: 'R', code: 'KeyR',
    },
    {
      key: 't', caps: 'T', shift: 'T', code: 'KeyT',
    },
    {
      key: 'y', caps: 'Y', shift: 'Y', code: 'KeyY',
    },
    {
      key: 'u', caps: 'U', shift: 'U', code: 'KeyU',
    },
    {
      key: 'i', caps: 'I', shift: 'I', code: 'KeyI',
    },
    {
      key: 'o', caps: 'O', shift: 'O', code: 'KeyO',
    },
    {
      key: 'p', caps: 'P', shift: 'P', code: 'KeyP',
    },
    {
      key: '[', caps: '[', shift: '{', code: 'BracketLeft',
    },
    {
      key: ']', caps: ']', shift: '}', code: 'BracketRight',
    },
    {
      key: '\\', caps: '\\', shift: '|', code: 'Backslash',
    },
  ],
  [// row 3 en
    {
      key: 'capslock', caps: 'capslock', shift: 'capslock', code: 'CapsLock',
    },
    {
      key: 'a', caps: 'A', shift: 'A', code: 'KeyA',
    },
    {
      key: 's', caps: 'S', shift: 'S', code: 'KeyS',
    },
    {
      key: 'd', caps: 'D', shift: 'D', code: 'KeyD',
    },
    {
      key: 'f', caps: 'F', shift: 'F', code: 'KeyF',
    },
    {
      key: 'g', caps: 'G', shift: 'G', code: 'KeyG',
    },
    {
      key: 'h', caps: 'H', shift: 'H', code: 'KeyH',
    },
    {
      key: 'j', caps: 'J', shift: 'J', code: 'KeyJ',
    },
    {
      key: 'k', caps: 'K', shift: 'K', code: 'KeyK',
    },
    {
      key: 'l', caps: 'L', shift: 'L', code: 'KeyL',
    },
    {
      key: ';', caps: ';', shift: ':', code: 'Semicolon',
    },
    {
      key: '\'', caps: '\'', shift: '"', code: 'Quote',
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
      key: 'z', caps: 'Z', shift: 'Z', code: 'KeyZ',
    },
    {
      key: 'x', caps: 'X', shift: 'X', code: 'KeyX',
    },
    {
      key: 'c', caps: 'C', shift: 'C', code: 'KeyC',
    },
    {
      key: 'v', caps: 'V', shift: 'V', code: 'KeyV',
    },
    {
      key: 'b', caps: 'B', shift: 'B', code: 'KeyB',
    },
    {
      key: 'n', caps: 'N', shift: 'N', code: 'KeyN',
    },
    {
      key: 'm', caps: 'M', shift: 'M', code: 'KeyM',
    },
    {
      key: ',', caps: ',', shift: '<', code: 'Comma',
    },
    {
      key: '.', caps: '.', shift: '>', code: 'Period',
    },
    {
      key: '/', caps: '/', shift: '?', code: 'Slash',
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
      key: 'eng', caps: 'eng', shift: 'eng', code: 'lang',
    },
  ],
];

export default dataEn;
