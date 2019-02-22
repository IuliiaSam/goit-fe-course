'use strict';

  // Создайте скрипт секундомера.  
  // По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  // Изначально в HTML есть разметка:
  
  // <div class="stopwatch">
  //   <p class="time js-time">00:00.0</p>
  //   <button class="btn js-start">Start</button>
  //   <button class="btn js-take-lap">Lap</button>
  //   <button class="btn js-reset">Reset</button>
  // </div>
  // <ul class="laps js-laps"></ul>
  
  // Добавьте следующий функционал:
  
  // - При нажатии на кнопку button.js-start, запускается таймер, который считает время со старта и до текущего момента времени, обновляя содержимое элемента p.js-time новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
  //   Подсказка: так как необходимо отображать только сотни миллисекунд, интервал достаточно повторять не чаще чем 1 раз в 100 мс.

let startValue;
let currentValue;
let pausedValue;
let interval;
let timerIsActive = false;
let lapArray = [];

let hundredMilliseconds;
let seconds;
let minutes;

const btnStart = document.querySelector('.js-start');
const btnLap = document.querySelector('.js-take-lap');
const btnReset = document.querySelector('.js-reset');
const timerDisplay = document.querySelector('.js-time');
const laps = document.querySelector('.laps');


btnStart.addEventListener('click', launchTimer);

function launchTimer() {
  timerIsActive ? startValue = pausedValue : startValue = 0;
  currentValue = startValue;
  timerIsActive = true;
  btnStart.textContent = 'Pause';
  btnStart.removeEventListener('click', launchTimer);
  btnStart.addEventListener('click', pauseTimer);
  btnReset.addEventListener('click', resetTimer);
  interval = setInterval( function() {
    currentValue += 100;
    hundredMilliseconds = Math.floor(currentValue % 1000 / 100);
    seconds = Math.floor(currentValue / 1000 % 60);
    minutes = Math.floor(currentValue / 1000 / 60 % 60);
    seconds.length === 2? seconds : seconds = '0'+seconds;
    minutes.length === 2? minutes : minutes = '0'+minutes;
    timerDisplay.textContent = `${minutes}:${seconds}.${hundredMilliseconds}`;
  }, 100)
};


//   - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', а функционал при клике превращается в оставновку секундомера без сброса значений времени.
    
//     Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.

//   - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени с 6 секунд, а не с 16. 
  
//     Подсказка: сохраните время секундомера на момент паузы и используйте его при рассчете текущего времени после возобновления таймера отнимая это значение от времени запуска таймера.

function pauseTimer() {
  pausedValue = currentValue;
  clearInterval(interval);
  btnStart.textContent = 'Continue';
  btnStart.removeEventListener('click', pauseTimer);
  btnStart.addEventListener('click', launchTimer);
};


//   - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка button.js-reset должна быть активна (на нее можно кликнуть), в противном случае disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.

function resetTimer () {
  timerIsActive = false;
  timerDisplay.textContent = '00:00.0';
  clearInterval(interval);
  btnStart.textContent = 'Start';
  btnStart.removeEventListener('click', pauseTimer);
  btnStart.addEventListener('click', launchTimer);
  laps.innerHTML = '';
}


//   - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x

btnLap.addEventListener('click', lapTimer);

function lapTimer() {
  lapArray.push(`${minutes}:${seconds}.${hundredMilliseconds}`);
  laps.innerHTML+=(`<li class='lap-items'>${minutes}:${seconds}.${hundredMilliseconds}</li>`);
}