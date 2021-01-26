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

// const square = (num) => num ** 2;
// const sumOfSquares = (a, b) => square(a) + square(b);
// const squareSumOfSquares = (a, b) => sumOfSquares(a, b) ** 2;
// console.log(squareSumOfSquares(-3, 7));

// Модули

/*
import getTriangleArea from './myMathModule.js'; // connect module 1

const getSumArea = (n) => getTriangleArea(n, (square(n) / 2)); // sum
export default getSumArea; // export default module
*/




// const mathTriangleArea = (a, b, y) => {
//     const degToRad = (deg) => deg * Math.PI / 180;
//     const area = 1 / 2 * a ** 2 * (Math.sin(degToRad(b)) * Math.sin(degToRad(y))) / Math.sin(degToRad(180 - (b + y)));
//     return area;
// };

// console.log(mathTriangleArea(3, 60, 60));

// const isEven = num => num % 2 === 0;
// console.log(isEven(17));





const smallestDivisor = (num) => {

    const iter = (num) = {
        let acc = 2;

        if (num === 1) {
            return num;
        } else if ((num / acc) === 1) {
            return num;
        }
    }

    return smallestDivisor(num % 2);
}

console.log(smallestDivisor(15));


