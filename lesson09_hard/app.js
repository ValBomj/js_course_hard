"use strict";

const todayA = new Date();
const day = todayA.toLocaleString('ru', {weekday: 'long'});
const date = todayA.getDate();
const month = todayA.toLocaleString('ru', {month: 'long'});
const newMonth = month.slice(0, month.length - 1) + 'я';
const year = todayA.getFullYear();
const hours = todayA.getHours();

function curentHour(time){
  if (time === 1 || time === 21) {
    return ' час ';
  } else if (time >= 2 && time <= 4 || time === 22 || time === 23) {
    return ' часа ';
  } else if (time >= 5 && time < 21 || time === 0) {
    return ' часов ';
  }
}

const minutes = todayA.getMinutes();

function curentMinutes(time){
  if (time === 1 || time === 21 || time === 31 || time === 41 || time === 51) {
    return ' минута ';
  } else if (time >= 2 && time <= 4 || time >= 22 && time <= 24 || time >= 32 && time <= 34 || time >= 42 && time <= 44 || time >= 52 && time <= 54) {
    return ' минуты ';
  } else if (time === 0 || time >= 5 && time <= 20 || time >= 25 && time <= 30 || time >= 35 && time <= 40 || time >= 45 && time <= 50 || time >= 55 && time <= 60) {
    return ' минут ';
  }
}

const seconds = todayA.getSeconds();

function curentSeconds(time){
  if (time === 1 || time === 21 || time === 31 || time === 41 || time === 51) {
    return ' секунда ';
  } else if (time >= 2 && time <= 4 || time >= 22 && time <= 24 || time >= 32 && time <= 34 || time >= 42 && time <= 44 || time >= 52 && time <= 54) {
    return ' секунды ';
  } else if (time === 0 || time >= 5 && time <= 20 || time >= 25 && time <= 30 || time >= 35 && time <= 40 || time >= 45 && time <= 50 || time >= 55 && time <= 60) {
    return ' секунд ';
  }
}



const todayB = new Date();
const dayB = todayB.getDay();
const monthB = todayB.getMonth();
const yearB = todayB.getFullYear();

const hoursB = todayB.getHours();
const minutesB = todayB.getMinutes();
const secondsB = todayB.getSeconds();

function newDate(date) {
  if (date < 10) {
    return '0' + date;
  } else {
    return date;
  }
}

const dateA = 'Сегодня ' + day + ', ' + date + ' ' +  newMonth + ' ' + year + ' года, ' + hours + curentHour(hours) + minutes + curentMinutes(minutes) + seconds + curentSeconds(seconds);
const dateB = newDate(dayB) + '.' + newDate(monthB) + '.' + newDate(yearB) + ' - ' + newDate(hoursB) + ':' + newDate(minutesB) + ':' + newDate(secondsB);

setInterval(function() {
  console.log(dateA);
  console.log(dateB);
}, 1000);

