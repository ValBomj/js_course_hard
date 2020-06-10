'use strict';
const lang = 'ru';

// Задание номер один с использованием if 
if (lang === 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, wednesday, thursday, friday, saturday, sunday');
};


// Задание номер один с использованием switch
switch (lang) {
  case 'ru' : 
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
  case 'en': 
    console.log('Monday, Tuesday, wednesday, thursday, friday, saturday, sunday');
    break;
}

// Задание номер один с использованием тернарных операторов
const langArr = [
  ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
  ['Monday, Tuesday, wednesday, thursday, friday, saturday, sunday']
]
lang === 'ru' ? console.log(langArr[0].toString()) : console.log(langArr[1].toString());;



// Задание номер два с использованием нескольких тернарных операторов
const namePerson = 'Артем';

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');;

