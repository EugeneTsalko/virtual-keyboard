import dataEn from './dataEn.js';
import dataRu from './dataRu.js';

//

const { body } = document;

const buildNode = (element = 'div', innerHTML = '', ...classes) => {
  const node = document.createElement(element);
  node.classList.add(...classes);
  node.classList.add(...classes);
  node.innerHTML = innerHTML;
  return node;
};

// отрисовка лэйаута

(function buildPage() {
  const wrapper = buildNode('div', '', 'wrapper');
  body.append(wrapper);
  const textarea = buildNode('textarea', '', 'textarea');
  textarea.setAttribute('autofocus', '');
  textarea.setAttribute('disabled', '');
  wrapper.append(textarea);
  const keyboard = buildNode('div', '', 'keyboard');
  wrapper.append(keyboard);
  const footer = buildNode('div', 'To change language press ctrl + alt or click eng/ru button on virtual keyboard. Created on Windows 10.', 'footer');
  wrapper.append(footer);
}());

const keyboard = document.querySelector('.keyboard');

// отрисовка кнопок клавиатуры

function buildKeys(data) {
  for (let i = 0; i < data.length; i += 1) {
    const row = buildNode('div', '', 'keyboard-row');
    keyboard.append(row);
    for (let j = 0; j < data[i].length; j += 1) {
      const key = buildNode('div', data[i][j].key, 'key');
      key.setAttribute('data-code', `${data[i][j].code}`);
      row.append(key);
    }
  }
}

(function buildFullPage() {
  if (localStorage.lang === 'ru') {
    buildKeys(dataRu);
  } else {
    localStorage.lang = 'en';
    buildKeys(dataEn);
  }
}());

// стили

const backSpace = document.querySelector('[data-code="Backspace"]');
backSpace.classList.add('backspace');
const tab = document.querySelector('[data-code="Tab"]');
tab.classList.add('alter');
const enter = document.querySelector('[data-code="Enter"]');
enter.classList.add('enter');
const shiftLeft = document.querySelector('[data-code="ShiftLeft"]');
shiftLeft.classList.add('alter');
const shiftRight = document.querySelector('[data-code="ShiftRight"]');
shiftRight.classList.add('alter');
const cntrlLeft = document.querySelector('[data-code="ControlLeft"]');
cntrlLeft.classList.add('alter');
const cntrlRight = document.querySelector('[data-code="ControlRight"]');
cntrlRight.classList.add('alter');
const altLeft = document.querySelector('[data-code="AltLeft"]');
altLeft.classList.add('alter');
const altRight = document.querySelector('[data-code="AltRight"]');
altRight.classList.add('alter');
const space = document.querySelector('[data-code="Space"]');
space.classList.add('space');
const capsLock = document.querySelector('[data-code="CapsLock"]');
const langSwitch = document.querySelector('[data-code="lang"]');

// анимация и нажатие с клавиатуры

document.addEventListener('keydown', (e) => e.preventDefault()); // фикс таба, альта и тд

function toggleClass(event) {
  const elem = document.querySelector(`[data-code="${event.code}"]`);
  if (elem) {
    elem.classList.add('pressed');
  }
}

function toggleClassOff(event) {
  const elem = document.querySelector(`[data-code="${event.code}"]`);
  if (elem) {
    elem.classList.remove('pressed');
  }
}

document.addEventListener('keydown', toggleClass);
document.addEventListener('keyup', toggleClassOff);

// анимация и нажатие с мыши

const keys = document.querySelectorAll('.key');
keys.forEach((element) => element.addEventListener('mousedown', (event) => event.target.classList.add('pressed')));
keys.forEach((element) => element.addEventListener('mouseup', (event) => event.target.classList.remove('pressed')));
keys.forEach((element) => element.addEventListener('mouseout', (event) => event.target.classList.remove('pressed')));

// печать

const textarea = document.querySelector('.textarea');

const typeKey = (event) => {
  textarea.focus();
  if (event.code === 'Space' || event.target === space) {
    textarea.value += ' ';
  } else if (event.code === 'Tab' || event.target === tab) {
    textarea.value += '    ';
  } else if (event.code === 'Enter' || event.target === enter) {
    textarea.value += '\n';
  } else if (event.code === 'Backspace' || event.target === backSpace) {
    textarea.value = textarea.value.slice(0, -1);
  } else if (
    ['CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'AltLeft', 'AltRight', 'ControlRight'].includes(event.code)
    || [capsLock, shiftLeft, shiftRight, cntrlLeft, cntrlRight, altLeft, altRight, langSwitch]
      .includes(event.target)) {
    textarea.value += '';
  } else if (event.code !== undefined) {
    const element = document.querySelector(`[data-code="${event.code}"]`);
    if (element) {
      textarea.value += document.querySelector(`[data-code="${event.code}"]`).innerHTML;
    }
  } else {
    textarea.value += event.target.innerHTML;
  }
};

keys.forEach((element) => element.addEventListener('click', typeKey));
document.addEventListener('keydown', typeKey);

// смена языка

function changeKeys(data) {
  const values = [];
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].length; j += 1) {
      values.push(data[i][j].key);
    }
    for (let n = 0; n < values.length; n += 1) {
      keys[n].textContent = values[n];
    }
  }
}

function changeLang(event) {
  if (cntrlLeft.classList.contains('pressed') || event.target === langSwitch) {
    if (altLeft.classList.contains('pressed') || event.target === langSwitch) {
      if (localStorage.lang === 'en') {
        localStorage.lang = 'ru';
        changeKeys(dataRu);
      } else if (localStorage.lang === 'ru') {
        localStorage.lang = 'en';
        changeKeys(dataEn);
      }
    }
  }
}

document.addEventListener('keydown', changeLang);
langSwitch.addEventListener('click', changeLang);

// капслок

let capsStatus = false;
capsLock.classList.add('capslock');
function capsLockOn(event) {
  if (event.target === capsLock || event.code === 'CapsLock') {
    let data;
    if (localStorage.lang === 'en') {
      data = dataEn;
    } else if (localStorage.lang === 'ru') {
      data = dataRu;
    }
    capsLock.classList.toggle('active');
    if (capsLock.classList.contains('active')) {
      capsStatus = true;
      const values = [];
      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].length; j += 1) {
          values.push(data[i][j].caps);
        }
        for (let n = 0; n < values.length; n += 1) {
          keys[n].textContent = values[n];
        }
      }
    } else {
      capsStatus = false;
      changeKeys(data);
    }
  }
}

capsLock.addEventListener('click', capsLockOn);
document.addEventListener('keydown', capsLockOn);

// шифт

function shiftOn(event) {
  if (event.target === shiftLeft || event.target === shiftRight || event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    let data;
    if (localStorage.lang === 'en') {
      data = dataEn;
    } else if (localStorage.lang === 'ru') {
      data = dataRu;
    }

    if (capsStatus === false) {
      const values = [];
      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].length; j += 1) {
          values.push(data[i][j].shift);
        }
        for (let n = 0; n < values.length; n += 1) {
          keys[n].textContent = values[n];
        }
      }
    } else {
      const values = [];
      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].length; j += 1) {
          values.push(data[i][j].shift.toLowerCase());
        }
        for (let n = 0; n < values.length; n += 1) {
          keys[n].textContent = values[n];
        }
      }
    }
  }
}

function shiftOff(event) {
  if (event.target === shiftLeft || event.target === shiftRight || event.code === 'ShiftRight' || event.code === 'ShiftLeft') {
    let data;
    if (localStorage.lang === 'en') {
      data = dataEn;
    } else if (localStorage.lang === 'ru') {
      data = dataRu;
    }
    if (capsStatus === false) {
      changeKeys(data);
    } else {
      const values = [];
      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].length; j += 1) {
          values.push(data[i][j].caps);
        }
        for (let n = 0; n < values.length; n += 1) {
          keys[n].textContent = values[n];
        }
      }
    }
  }
}
shiftLeft.addEventListener('mousedown', shiftOn);
shiftRight.addEventListener('mousedown', shiftOn);
document.addEventListener('keydown', shiftOn);
document.addEventListener('keyup', shiftOff);
shiftLeft.addEventListener('mouseup', shiftOff);
shiftRight.addEventListener('mouseup', shiftOff);
shiftLeft.addEventListener('mouseout', shiftOff);
shiftRight.addEventListener('mouseout', shiftOff);
