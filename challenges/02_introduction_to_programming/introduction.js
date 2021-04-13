// // Форматированное время
//
// const formattedTime = (num) => {
//   let hr = 0;
//   let min = num;
//
//   while (min > 59) {
//     min -= 60;
//     hr += 1;
//   }
//
//   if (hr.toString().length < 2 && min.toString().length < 2) {
//     return `${0}${hr}:${0}${min}`;
//   } else if (hr.toString().length < 2 && min.toString().length === 2) {
//     return `${0}${hr}:${min}`;
//   } else if (hr.toString().length === 2 && min.toString().length < 2) {
//     return `${hr}:${0}${min}`;
//   }
//
//   return `${hr}:${min}`;
// }
//
// console.log(formattedTime(1504));

// Счастливый билет
/*
const isHappyTicket = (num) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  switch (num.length % 2) {
    case 0:
      const firstNum = [], secondNum = [];
      for (let i = 0; i < num.length / 2; i += 1) {
        firstNum.push(Number(num[i]));
      }
      for (let i = num.length / 2; i < num.length; i += 1) {
        secondNum.push(Number(num[i]));
      }
      return firstNum.reduce(reducer) === secondNum.reduce(reducer);
  }
} */
