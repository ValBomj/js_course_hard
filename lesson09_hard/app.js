"use strict";

// Склонение слова в зависимости от number (число)
const timeDeclination = function (number, arr) {  
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
function addZero (date) {
  if (date >= 0 && date <= 9) {
    return '0' + date;
  } else {
    return date;
  }
}

const body = document.querySelector('body');
const dateFormatA = document.createElement('p');
const dateFormatB = document.createElement('p');
body.appendChild(dateFormatA);
body.appendChild(dateFormatB);

const hour = ['час', 'часа', 'часов'];
const minute = ['минута', 'минуты', 'минут'];
const second = ['секунда', 'секунды', 'секунд'];

const inter = setInterval(function() {
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
  // Часы
  const hours = todayA.getHours();
  // Минуты 
  const minutes = todayA.getMinutes();
  // Секунды
  const seconds = todayA.getSeconds();

  dateFormatA.textContent = 'Сегодня ' + day + ', ' + date + ' ' +  newMonth + ' ' + year + ' года, ' + timeDeclination(hours, hour) + timeDeclination(minutes, minute) + timeDeclination(seconds, second);
  dateFormatB.textContent = addZero(date) + '.' + addZero(monthB) + '.' + addZero(year) + ' - ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);

}, 1000);
