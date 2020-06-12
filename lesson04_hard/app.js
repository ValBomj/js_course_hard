'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


// Проверяю переданый аргумент на number и на boolean
function foo (argument) {
  if (typeof argument !== 'string') {
    console.log('Не строка');
  } else if (argument.trim().length >= 30) {
    console.log(argument.trim().slice(0, 30) + '...');
  } else {
    console.log(argument.trim());
  }

  // Вариант через тернарные операторы
  typeof argument !== 'string' ? console.log('Не строка') : argument.trim().length >= 30 ? console.log(argument.trim().slice(0, 30) + '...') : console.log(argument);
}
  
  foo(123);