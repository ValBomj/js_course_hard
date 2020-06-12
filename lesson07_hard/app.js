"use strict";

const week = ['воскресенье', 'Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

for (let i = 0; i < week.length; i++) {
  let now = new Date();
  if (i === 0 || i === 6) {
    document.write('<i>' + week[i] + '</i>' + '<br>');
  } else if (i == now.getDay()) {
    document.write('<b>' + week[i] + '</b>' + '<br>');
  } else {
    document.write(week[i] + '<br>');
  }
}