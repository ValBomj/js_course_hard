"use strict";

// Задание 1
const nums = ['423123124124', '342341241', '43461351', '21235246234', '235135', '3621542135', '24523526'];

const result = nums.filter(num => num.slice(0,1) === '2' || num.slice(0,1) === '4');

console.log(result);

// Задание 2
for (let i = 2; i <= 100; i++) {
  isPrime(i);
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    console.log(num);
  }
}
