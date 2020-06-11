'use strict';
const lang = 'ru';

// Задание номер один с использованием if 
if (lang === 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, wednesday, thursday, friday, saturday, sunday');
} else {
  console.log('Введите либо "ru" либо "en"');
}


// Задание номер один с использованием switch
switch (lang) {
  case 'ru' : 
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
  case 'en': 
    console.log('Monday, Tuesday, wednesday, thursday, friday, saturday, sunday');
    break;
  default: 
    console.log('Введите либо "ru" либо "en"');
}

// Задание номер один с использованием тернарных операторов
const langArr = new Map([
  ['ru', 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
  ['en', 'Monday, Tuesday, wednesday, thursday, friday, saturday, sunday']
]);

// lang === 'ru' || lang === 'en' ? console.log(langArr.get(lang)) : console.log('Введите либо "ru" либо "en"');
console.log(langArr.get(lang));






// Задание номер два с использованием нескольких тернарных операторов
const namePerson = 'Артем';

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');;

