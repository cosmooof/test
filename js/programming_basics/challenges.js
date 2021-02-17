// Форматированное время

const formattedTime = (num) => {
  let hr = 0;
  let min = num;

  while (min > 59) {
    min -= 60;
    hr += 1;
  }

  if (hr.toString().length < 2 && min.toString().length < 2) {
    return `${0}${hr}:${0}${min}`;
  } else if (hr.toString().length < 2 && min.toString().length === 2) {
    return `${0}${hr}:${min}`;
  } else if (hr.toString().length === 2 && min.toString().length < 2) {
    return `${hr}:${0}${min}`;
  }

  return `${hr}:${min}`;
}

console.log(formattedTime(1504));