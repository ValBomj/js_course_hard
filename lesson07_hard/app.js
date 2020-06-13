"use strict";

// Создаю массив с днями недели
const week = ['ВоскресеньЕ', 'ПонедЕльник', 'ВтоРник', 'СреДа', 'ЧеТверг', 'ПятнИца', 'СубботА'];

// Перевожу getDay() из числа в слово
let currentDay;
const now = new Date().getDay();
if (now === 0) {
  const currentDay = 'воскресенье';
} else if (now === 1) {
  currentDay = 'понедельник';
} else if (now === 2) {
  currentDay = 'вторник';
} else if (now === 3) {
  currentDay = 'среда';
} else if (now === 4) {
  currentDay = 'четверг';
} else if (now === 5) {
  currentDay = 'пятница';
} else if (now === 6) {
  currentDay = 'суббота';
}

// Перебираю элементы массива
week.forEach(function(item, i, array) {

  // Создаю элемент с тегом Р и вписываю в него item (день недели из массива)
  const elem = document.createElement('p');
  elem.innerHTML = item;
  // Привожу item к нижнему регистру для более точной проверки 
  const lowerElem = elem.innerHTML.toLowerCase();

  // Проверяю item на: Сегодняшний день, выходной, и выходной если он сегодня
  if (lowerElem === currentDay && lowerElem === 'суббота' || lowerElem === currentDay && lowerElem === 'воскресенье') {
    elem.style.cssText = 'font-weight: 700; font-style: italic;';
  } else if (lowerElem === currentDay) {
    elem.style.fontWeight = 700;
  } else if (lowerElem === 'суббота' || lowerElem === 'воскресенье') {
    elem.style.fontStyle = 'italic';
  }

  // Добавляю элемент на страницу
  document.body.append(elem)
});
