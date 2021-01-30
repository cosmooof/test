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

