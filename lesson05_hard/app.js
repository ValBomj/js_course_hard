"use strict";

// Задание 1
const arr = ['423123124124', '342341241', '43461351', '21235246234', '235135', '3621542135', '24523526'];

for (let i = 0; i < arr.length; i++) {
  const option = arr[i];
  if (option.slice(0, 1) === '2' || option.slice(0, 1) === '4') {
    console.log(option);
  }
}

// Задание 2
function isPrime(number) {
  if (number < 2) {
    return 'Число должно быть больше 1';
  } else if (number === 2) {
    return 'Простое число';
  }

  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return 'Составное число';
    }
    i +=1;
  }
  
  console.log('Простое число ' + number + '; \nДелители этого числа 1 и ' + number); 
}

for (let i = 1; i < 100; i++) {
  isPrime(i);
}

