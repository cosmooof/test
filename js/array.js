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
