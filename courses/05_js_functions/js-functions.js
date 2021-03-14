var _ = require('lodash');
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
