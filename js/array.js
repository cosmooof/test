// Задачи из JS: Массивы / hexlet
// Синтаксис
/*
const getWeekends = (str = 'default') => {
  if (str === 'long' || str === 'default') {
    return ['saturday', 'sunday'];
  }

  return ['sat', 'sun'];
}

console.log(getWeekends());
*/
// Модификация
/*
const swap = (items) => {
  if (items.length < 2) {
    return items;
  }
  const lastIndex = items.length - 1;
  const last = items[lastIndex];
  items[lastIndex] = items[0];
  items[0] = last;

  return items;
};

console.log(swap(['one', 'two', 'three']));
*/
// Проверка существования значения
/*
const cities = ['moscow', 'london', 'berlin', 'porto'];

const get = (arr, index, defaultValue = null) => {
  if (index >= arr.length || index < 0) {
    return defaultValue;
  }

  return arr[index];
};
*/
// Цикл for
/*const names = ['john', 'smith', 'karl'];

const addPrefix = (arr, str) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result[i] = `${str} ${arr[i]}`;
  }

  return result;
}

console.log(addPrefix(names, 'Mr'));*/
// Ссылки
/*const names = ['john', 'smith', 'karl'];

const reverse = (arr) => {
  const tempArr = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    tempArr.push(arr[i]);
  }

  for (let i = 0; i < tempArr.length; i += 1) {
    arr.shift(i);
    arr.push(tempArr[i]);
  }
}*/
// Агрегация
/*const coll1 = [2, 0, 17, 3, 9, 15, 4];

const calculateSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(calculateSum(coll1));*/
// Цикл for...of
/*
const temperatures2 = [36, 37.4, 39, 41, 36.6];

const calculateAverage = (arr) => {
  const itemsCount = arr.length;

  if (itemsCount === 0) {
    return null;
  }

  let sum = 0;
  for (const item of arr) {
    sum += item;
  }

  return sum / itemsCount;
}

console.log(calculateAverage(temperatures2));*/
// Удаление элементов массива
/*
const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const result = [];
  const remainder = Math.abs(coll[0] % 2);

  for (const item of coll) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }

  return result;
};
*/
// Управляющие инструкции
/*
const getTotalAmount = (arr, name) => {
  let sum = 0;

  for (let item of arr) {
    if (item.slice(0, 3) === name) {
      sum += Number(item.slice(3));
    }
  }

  return sum;
}
*/
// Вложенные массивы
/*const getSuperSeriesWinner = (scores) => {
  let result = 0;
  for (const score of scores) {
    result += Math.sin(score[0] - score[1]);
  }

  if (result > 0) {
    return 'canada';
  }

  if (result < 0) {
    return 'ussr';
  }

  return null;
}*/
// Генерация строки в цикле
/*const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const parts = [];

  for (const item of definitions) {
    const name = item[0];
    const description = item[1];
    parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
  }

  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;

  return result;
}*/
// Обработка строк через преобразование в массив
/*const makeCensored = (text, stopWords) => {
  const words = text.split(' ');

  const result = [];
  for (const word of words) {
    const newWord = stopWords.includes(word) ? '$#%!' : word;
    result.push(newWord);
  }

  return result.join(' ');
}*/
// Вложенные циклы
/*var _ = require('lodash'); // Подключаем библиотеку Lodash

const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = _.uniq(coll1);
  const uniqColl2 = _.uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
      }
    }
  }

  return count;
};*/
// Теория Множеств
/*
const countUniqChars = (text) => {
  const uniqChars = [];

  for (const char of text) {
    if (!uniqChars.includes(char)) {
      uniqChars.push(char);
    }
  }

  return uniqChars.length;
};*/
// Сортировка массивов
/*const bubbleSort = (coll) => {
  let stepsCount = coll.length - 1;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < stepsCount; i += 1) {
      if (coll[i] > coll[i + 1]) {
        const temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;

        swapped = true;
      }
    }
    stepsCount -= 1;
  } while (swapped);

  return coll;
}*/
// Стек
/*let isBracketStructureBalanced;
isBracketStructureBalanced = (symbols) => {
  // проверяем, не является ли строка пустой, если да то возвращаем ошибку
  if (symbols.length !== 1) {
    const stack = [];

    for (let symbol of symbols) {
      // проверяем, является ли текущий символ - открывающим
      if (openingSymbols.indexOf(symbol) >= 0) {
        // если он открывающий, то добавляем его в стэк
        stack.push(symbol);

        // если нет то проверяем, является ли текущий символ - закрывающим
      } else if (closingSymbols.indexOf(symbol) >= 0) {
        // если символ закрывающий, проверяем, что стэк не пустой
        if (!stack.length) {
          continue;
        }
        const lastIndex = stack[stack.length - 1];
        if (openingSymbols.indexOf(lastIndex) === closingSymbols.indexOf(symbol)) {
          // если находим, то убираем последний символ
          stack.pop();
        } else if (openingSymbols.indexOf(lastIndex) !== closingSymbols.indexOf(symbol)) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  return false;
};*/
// Big O
/*
const getIntersectionOfSortedArrays = (arr1, arr2) => {
  arr1.sort(function compareNumbers(a, b) {
    return a - b;
  })
  arr2.sort(function compareNumbers(a, b) {
    return a - b;
  })

  const result = [];

  for (const item of arr1) {
    if (arr2.includes(item)) {
      result.push(item);
    }
  }

  return result;
};*/
// Деструктуризация
/*const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }

  let [nearestLocation] = locations;
  const [, nearestPoint] = nearestLocation;
  let lowestDistance = getDistance(currentPoint, nearestPoint);

  for (const location of locations) {
    const [, point] = location;
    const distance = getDistance(currentPoint, point);
    if (distance < lowestDistance) {
      lowestDistance = distance;
      nearestLocation = location;
    }
  }

  return nearestLocation;
};*/
// Rest-оператор и деструктуризация
/*
const getMax = (coll) => {
  if (coll.length === 0) {
    return null;
  }

  let [max, ...rest] = coll;
  for (const value of rest) {
    if (value > max) {
      max = value;
    }
  }

  return max;
};*/
