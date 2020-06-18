"use strict";

const todayA = new Date();
// День недели на русском
const day = todayA.toLocaleString('ru', {weekday: 'long'});
// Число от 1 до 31
const date = todayA.getDate();
// Месяц на русском
const month = todayA.toLocaleString('ru', {month: 'long'});
// Число от 1 до 12
const monthB = todayA.getMonth() + 1;
// Окончание "я" у месяца
const newMonth = month.slice(0, month.length - 1) + 'я';
// Год
const year = todayA.getFullYear();
// Часи
const hours = todayA.getHours();
// Минуты 
const minutes = todayA.getMinutes();
// Секунды
const seconds = todayA.getSeconds();

// Склонение слова в зависимости от number (число)
const univ = function (number, arr) {  
  const options = [2, 0, 1, 1, 1, 2];  
  if (number % 100 >= 5 && number % 100 <= 19) {
    return number + ' ' + arr[2] + ' ';
  } else if (number % 10 <= 4) {
    return number + ' ' + arr[options[number % 10]] + ' ';
  } else {
    return number + ' ' + arr[options[0]] + ' ';
  }
}

// Добавление 0 вначало если число меньше 10
function univ2 (date) {
  if (date > 0 && date <= 9) {
    return '0' + date;
  } else {
    return date;
  }
}

const dateA = 'Сегодня ' + day + ', ' + date + ' ' +  newMonth + ' ' + year + ' года, ' + univ(hours, ['час', 'часа', 'часов' ]) + univ(minutes, ['минута', 'минуты', 'минут']) + univ(seconds, ['секунда', 'секунды', 'секунд']);
const dateB = univ2(date) + '.' + univ2(monthB) + '.' + univ2(year) + ' - ' + univ2(hours) + ':' + univ2(minutes) + ':' + univ2(seconds);

const inter = setInterval(function() {
  const html = document.querySelector('html');
  const dateFormatA = document.createElement('p');
  const dateFormatB = document.createElement('p');

  dateFormatA.textContent = dateA;
  dateFormatB.textContent = dateB;

  html.appendChild(dateFormatA);
  html.appendChild(dateFormatB);
}, 1000);


