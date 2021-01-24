// const pi = 3.14;
// const R = 5;
// const superR = R ** 2;
//
// const area = pi * superR * 4;
// console.log(area);

/*
* Основы программирования
* Функции
* Урок 8 */
/*
* squares.js
Реализуйте функцию square(), которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел.
Примеры работы функций:

square(5); // 25
square(10); // 100
sumOfSquares(5, 10); // 125
sumOfSquares(10, -9); // 181
squareSumOfSquares(1, 1); // 4
squareSumOfSquares(2, 3); // 169
Обратите внимание на то, что самостоятельно вызывать их не надо. Это делает проверяющая система в файле __tests__/squares.tests.js

Подсказки
Функция square() может быть использована внутри sumOfSquares()
Функция sumOfSquares() может быть использована внутри squareSumOfSquares()*/

const square = (num) => num ** 2;
const sumOfSquares = (a, b) => square(a) + square(b);
const squareSumOfSquares = (a, b) => sumOfSquares(a, b) ** 2;
console.log(squareSumOfSquares(-3, 7));

