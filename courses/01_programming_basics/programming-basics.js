
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





// const smallestDivisor = (num) => {
//
//     const iter = (current, acc) => {
//       if ((current / acc) % 1) {
//         return acc;
//       }
//
//       return acc++;
//     }
//
//     return acc;
// }

/*const smallestDivisor = (num) => {
    const iter = (acc) => {
        if (acc > num / 2) {
            return num;
        } else if (num % acc === 0) {
            return acc;
        }

        return iter(acc + 1);
    }

    return iter(2);
}

console.log(smallestDivisor(15));*/





// const NOD = (a, b) => {
//     if (b === 0) {
//         return a;
//     }
//
//     return NOD(b, a % b);
// }
//
// console.log(NOD(6, 3));

// isPrime - функция для нахождения простого натурального числа
/*const isPrime = (x) => {
    if (x < 2) {
        return false;
    }

    let i = 2;
    while (i < x) {
        if (x % i === 0) {
            return false;
        }

        i++;
    }

    return true;
};

console.log(isPrime(9));*/

// функция которая считает сумму всех натуральных чисел
// const sum = (n, a, b) => {
//     let result = 0;
//
//     for (let i = 1; i < n; i++) {
//         if (i % a === 0 || i % b === 0) {
//             result += i;
//         }
//     }
//
//     return result;
// }



// console.log(9 % 1);

// 2 4 6 8
// 4 8

// 1 2 3 4 5 6 7 8 9

/*
const reverse = (str) => {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    };

    return result;
}
*/

// const calc = (op, one, two) => {
//     switch (op) {
//         case '+':
//             return one + two;
//         case '-':
//             return one - two;
//         case '/':
//             return one / two;
//         case '*':
//             return one * two;
//             break;
//
//         default:
//             return NaN;
//     }
// }

//
// const addDigits = (num) => {
//     const char = String(num); // 2
//     let i = 0;
//     let result = 0;
//
//     while (String(result.length) != 0) {
//         result += Number(char[i]);
//         i++;
//
//         // for (let i = 0; i < char.length; i++) {
//         //     result = result + String(char[i]);
//         // }
//     }
//
//     return result;
//
//     // for (let i = 0; i < char.length; i++) {
//     //     const sum = char[i];
//     //     // result = result + String(char[i]);
//     // }
//
//     // return result;
// }
//
// console.log(addDigits(11));
