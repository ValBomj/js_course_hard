'use strict';
function foo (argument) {
  if (typeof(argument) !== 'string') {
    console.log('Не строка');
  } else if (argument.length >= 30) {
    console.log(argument.trim().slice(0, 30) + '...');
  } else {
    console.log(argument);
  }

  // Вариант через тернарные операторы
  typeof(argument) !== 'string' ? console.log('Не строка') : argument.length >= 30 ? console.log(argument.trim().slice(0, 30) + '...') : console.log(argument);
}
  
  foo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, amet.');