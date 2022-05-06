import data from './data.js';

const { body } = document;

const buildNode = (element, innerHTML, ...classes) => {
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
  wrapper.append(textarea);
  const keyboard = buildNode('div', '', 'keyboard');
  wrapper.append(keyboard);
}());

const keyboard = document.querySelector('.keyboard');
// отрисовка кнопок клавиатуры
(function buildKeys() {
  for (let i = 0; i < data.length; i += 1) {
    const row = buildNode('div', '', 'keyboard-row');
    keyboard.append(row);
    for (let j = 0; j < data[i].length; j += 1) {
      const key = buildNode('div', data[i][j].key, 'key');
      key.setAttribute('data-code', `${data[i][j].code}`);
      row.append(key);
    }
  }
}());
// анимация и нажатие с клавиатуры
document.addEventListener('keydown', (event) => {
  document.querySelector(`[data-code=${event.code}]`).classList.add('pressed');
});
document.addEventListener('keyup', (event) => {
  document.querySelector(`[data-code=${event.code}]`).classList.remove('pressed');
});
// анимация и нажатие с мыши
const keys = document.querySelectorAll('.key');
keys.forEach((element) => element.addEventListener('mousedown', (event) => event.target.classList.add('pressed')));
keys.forEach((element) => element.addEventListener('mouseup', (event) => event.target.classList.remove('pressed')));
keys.forEach((element) => element.addEventListener('mouseout', (event) => event.target.classList.remove('pressed')));
// печать
// const textarea = document.querySelector('.textarea');
// textarea.selectionStart(0, 0);
// window.onload = function() {
//   textarea.setAttribute('autofocus');
// textarea.focus();}
// const type = (event, key, code) => {
//   let cursor = textarea.selectionStart;
//   textarea.focus();
// }
