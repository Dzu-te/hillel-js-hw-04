'use strict';

// #1 Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length
// Функцію треба покласти в файл functions.js та імпортувати за допомогою import

import { generateKey } from './functions.js'

// Check:
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i - випадкові символи з набору characters
//
const numbersOnly = '0123456789';
const numberKey = generateKey(25, numbersOnly);
console.log(numberKey); // 3847501826482930485728394 - випадкові символи з набору numbersOnly

// ============================================

// #2 Дано масив з елементами різних типів.
// Створити функцію average яка приймає масив та вираховує середнє арифметичне числових елементів
// або елементів, які можуть бути приведені до number (включно з 0 та '5')
// Заборонено використовувати for. Користуватися тільки методами масиву.

// function average(mixed) {

//   function getNumSum(acc, char) {
//     if (!isNaN(char) && typeof + char === 'number') {
//       return acc + Number(char);
//     }
//     return acc;
//   }

//   function getNumCount(acc, ch) {
//     if (!isNaN(char) && typeof + char === 'number') {
//       return acc + 1;
//     }
//     return acc;
//   }

//   let sum = mixed.reduce(getNumSum, 0);
//   let count = mixed.reduce(getNumCount, 0);

//   return count === 0 ? 0 : sum / count;
// }

// function average(mixed) {

//   let { sum, count } = mixed.reduce((acc, char) => {

//     const num = Number(char);
//     if (!isNaN(num)) {
//       acc.sum += num;
//       acc.count += 1;
//     }
//     return acc;


//   }, { sum: 0, count: 0 })
//   console.log('sum & count:', sum, count)
//   return count === 0 ? 0 : sum / count;
// }

function average(mixed) {

  const makeNumFromChar = char => Number(char);
  const filterNan = num => !isNaN(num);
  const countSum = element => sum += element;
  let sum = 0;

  const numArr = mixed.map(makeNumFromChar).filter(filterNan);
  numArr.forEach(countSum);

  return !numArr.length ? 0 : sum / numArr.length;
}

// Check:
console.log(average(['hello', 12, 'hi', 3, 4, 'another hell', 1, '5', 7, 'end', 0, 'you again?', 8])); // 5
console.log(average([34, 'call me', 23, 'no, call me!', '11', 48, null, 51, {}, 37, undefined, 20, [], 26])); // 25

// ============================================

// #3 Написати рекурсивну функцію showDeepArray, яка проходить по вложених масивах і виводить усі цифри підряд.
// кожна цифра у своєму рядку
// Заборонено використовувати for та [].flat()

function showDeepArray(deep) {

  if (!Array.isArray(deep)) {
    return;
  }

  deep.forEach(element => {
    if (Array.isArray(element)) {
      showDeepArray(element);
    } else {
      console.log(element);
    }
  })
}


const myArray = [1, 2, 3, [31, 32, 33], 4, 5, 6, 7, [71, 72, [721, 722, 723, [7231, 7232, 7233], 724]], 8, 9];
showDeepArray(myArray);

// Має вивести:
// 1
// 2
// 3
// 31
// 32
// 33
// 4
// 5
// 6
// 7
// 71
// 72
// 721
// 722
// 723
// 7231
// 7232
// 7233
// 724
// 8
// 9