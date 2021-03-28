var _ = require('lodash'), txtReversed;
// Чистые функции
/*
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const sayPrimeOrNot = (num) => {
  const text = isPrime(num) ? 'yes' : 'no';
  console.log(text);
}*/
// Оператор Rest (упаковка аргументов)
/*
const average = (...num) => {
  const count = num.length;

  if (count === 0) {
    return null;
  }

  return _.sum(num) / count;
}*/
// Оператор Spread (распаковка аргументов)
/*const convert = (...items) => {
  const formattedDates = [];

  for (let item of items) {
    const date = new Date(...item);
    const formattedDate = date.toDateString();
    formattedDates.push(formattedDate);
  }

  return formattedDates;
}*/
// Объекты первого класса
/*const run = (text) => {
  const takeLast = (str, length) => {
    if (str.length === 0 || str.length < length) {
      return null;
    }

    const result = [];
    for (let i = str.length - 1; result.length < length; i -= 1) {
      result.push(str[i]);
    }

    return result.join('');
  };

  return takeLast(text, 4);
};*/
// Функции высшего порядка
/*
const takeOldest = (data, num = 1) => {
  const sorted = _.sortBy(data, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, num);
}*/
// Отображение (map)
/*
const getChildren = (users) => users.flatMap(({ children }) => children);
*/
// Фильтрация (filter)
/*
const getGirlFriends = (users) => {
  return users.flatMap(({ friends }) => friends.filter(({ gender }) => gender === 'female'));
}
*/
// Агрегация (reduce)
/*const groupBy = (objects, key) => objects.reduce((acc, object) => {
  // из каждого объекта берётся значение по ключу
  const groupName = object[key];
  // контейнером группы выступает массив
  const group = acc[groupName] ?? []; // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
  // возвращается новый объект аккумулятора
  return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
  // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
}, {});*/
// Сигналы
/*const getFreeDomainsCount = (emails) => emails
    .map((email) => {
      const [, domain] = email.split('@');
      return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      const count = _.get(acc, domain, 0) + 1;
      return { ...acc, [domain]: count };
    }, {});*/
// Парадигмы программирования
// Моя версия
/*const enlargeArrayImage = (arr) => {
  return arr.reduce((acc, item) => {
    const dublicateValues = item.flatMap(item => [item, item]);
    return acc.concat([dublicateValues, dublicateValues])}, []);
}*/
// Версия учителя
/*const duplicateValues = (items) => items.map((item) => [item + item]);
const enlargeArrayImage = (items) => {
  const horizontallyStretched = items.map(duplicateValues);
  return duplicateValues(horizontallyStretched);
};*/
