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
