import dataEn from './dataEn.js';
import dataRu from './dataRu.js';

//

const { body } = document;

const buildNode = (element, innerHTML = '', ...classes) => {
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

(function () {
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

// анимация и нажатие с клавиатуры

document.addEventListener('keydown', (event) => {
  // console.log(event.code);
  document.querySelector(`[data-code="${event.code}"]`).classList.add('pressed');
});
document.addEventListener('keyup', (event) => {
  document.querySelector(`[data-code="${event.code}"]`).classList.remove('pressed');
});

// анимация и нажатие с мыши

const keys = document.querySelectorAll('.key');
keys.forEach((element) => element.addEventListener('mousedown', (event) => event.target.classList.add('pressed')));
keys.forEach((element) => element.addEventListener('mouseup', (event) => event.target.classList.remove('pressed')));
keys.forEach((element) => element.addEventListener('mouseout', (event) => event.target.classList.remove('pressed')));

// печать

const textarea = document.querySelector('.textarea');

const clickKey = (event) => {
  textarea.focus();
  // console.log(event.target);
  textarea.value += event.target.innerHTML;
};

const typeKey = (event) => {
  textarea.focus();
  textarea.value += document.querySelector(`[data-code="${event.code}"]`).innerHTML;
};

keys.forEach((element) => element.addEventListener('click', clickKey));
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

function changeLang() {
  const cntrl = document.querySelector('[data-code="ControlLeft"]');
  const alt = document.querySelector('[data-code="AltLeft"]');
  if (cntrl.classList.contains('pressed')) {
    if (alt.classList.contains('pressed')) {
      if (localStorage.lang === 'en') {
        localStorage.lang = 'ru';
        // console.log(localStorage.lang);
        changeKeys(dataRu);
      } else if (localStorage.lang === 'ru') {
        localStorage.lang = 'en';
        // console.log(localStorage.lang);
        changeKeys(dataEn);
      }
    }
  }
}
// const langSwitch = document.querySelector('[data-code="lang"]');
document.addEventListener('keydown', changeLang);
// langSwitch.addEventListener('click', changeLang);

// капслок
const capsLock = document.querySelector('[data-code="CapsLock"]');
capsLock.classList.add('capslock');
function capsLockOn() {
  let data;
  if (localStorage.lang === 'en') {
    data = dataEn;
  } else if (localStorage.lang === 'ru') {
    data = dataRu;
  }
  if (capsLock.classList.contains('active')) {
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
    changeKeys(data);
  }
}
capsLock.addEventListener('click', (e) => e.target.classList.toggle('active'));
capsLock.addEventListener('click', capsLockOn);
// ['click', 'keydown'].forEach((event) => capsLock.addEventListener(event, capsLockOn));

// document.addEventListener('keydown', (event) => {
//   textarea.value += document.querySelector(`[data-code="${event.code}"]`).innerHTML;
// });

// РЕАЛИЗОВАТЬ ОТСУТСВИЕ ПЕЧАТИ НА УПРАВЛЯЮЩИХ КЛАВИШАХ
// РЕАЛИЗОВАТЬ ШИФТ 2 ШТУКИ
// РЕАЛИЗОВАТЬ БЭКСПЕЙС
// РЕАЛИЗОВАТЬ ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ПО КНОПКЕ НА ВИРТ КЛАВЕ
// РЕАЛИЗОВАТЬ ЭНТЕР
// РЕАЛИЗОВАТЬ ТАБ
// РЕАЛИЗОВАТЬ ХЕДЕР ФУТЕР ТЕКСТ
