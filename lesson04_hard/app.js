'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


// Проверяю переданый аргумент на number и на boolean
function foo (argument) {
  if (isNumber(argument)  || typeof(argument) === 'boolean' && typeof(argument) === 'boolean' ) {
    console.log('Не строка');
  } else if (argument.trim().length >= 30) {
    console.log(argument.trim().slice(0, 30) + '...');
  } else {
    console.log(argument.trim());
  }

  // Вариант через тернарные операторы
  isNumber(argument) || typeof(argument) === 'boolean' && typeof(argument) === 'boolean' ? console.log('Не строка') : argument.trim().length >= 30 ? console.log(argument.trim().slice(0, 30) + '...') : console.log(argument);
}
  
  foo('Lorem, ipsum dolor sit amet consectetur adipisicing elit.');