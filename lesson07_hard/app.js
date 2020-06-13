"use strict";

// Создаю массив с днями недели
const week = ['ВоскресеньЕ', 'ПонедЕльник', 'ВтоРник', 'СреДа', 'ЧеТверг', 'ПятнИца', 'СубботА'];

const date = new Date();
const day = date.toLocaleString('ru', {weekday: 'long'});


// Перебираю элементы массива
week.forEach(function(item, i, array) {

  // Создаю элемент с тегом Р и вписываю в него item (день недели из массива)
  const elem = document.createElement('p');
  elem.textContent = item;

  // Привожу item к нижнему регистру для более точной проверки 
  const lowerElem = elem.textContent.toLowerCase();

  if (lowerElem === day) {
    elem.classList.add('bold');

    if (lowerElem === 'суббота' || lowerElem === 'воскресенье') {
      elem.classList.add('italic');
    }
  } else if (lowerElem === 'суббота' || lowerElem === 'воскресенье') {
    elem.classList.add('italic');
  }

  // Добавляю элемент на страницу
  document.body.appendChild(elem);
});
