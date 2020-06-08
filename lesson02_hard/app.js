const num = 266219;

// число в строку
const numString = num.toString();

// строку в массив 
const arr = numString.split('');

// перемножаем все цыфры числа
const result = arr.reduce(function(mult, current) {
  return mult * current;
}, 1);

// выводим результат перемножения
console.log( result ); 

// возводим результат в 3 степень
const pow = result ** 3;

// результат возведения в степень переводим в строку
const powString = pow.toString();


console.log(powString.slice(0, 2));


