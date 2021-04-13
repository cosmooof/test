// Точки на координатной плоскости
/* const calculateDistance = (point1, point2) => {
  const deltaX = point2[0] - point1[0];
  const deltaY = point2[1] - point1[1];

  return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
}; */
// Семантика массивов
/* const getMidpoint = (point1, point2) => {
  const x = (point1.x + point2.x) / 2;
  const y = (point1.y + point2.y) / 2;

  return { x, y };
} */
// Создание абстракции
/* const makeSegment = (beginPoint, endPoint) => {
  return { beginPoint, endPoint };
}

const getMidpointOfSegment = (segment) => {
  let { beginPoint, endPoint } = segment;
  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(endPoint) + getY(beginPoint)) / 2;
  return { x, y };
}

const getBeginPoint = (segment) => {
  let { ...begin } = segment.beginPoint;
  return begin;
}

const getEndPoint = (segment) => {
  let { ...end } = segment.endPoint;
  return end;
} */
// Интерфейсы
/*
const getAngle = (point) => point.angle;
const getRadius = (point) => point.radius;

const getX = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));
const getY = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));
*/
// Уровневое проектирование
/* const makeRectangle = (point, width, height) => {
  return { point, width, height };
}

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => {
  let { width } = rectangle;
  return width;
}

const getHeight = (rectangle) => {
  let { height } = rectangle;
  return height;
}

const containsOrigin = (rectangle) => {
  const startPoint = getStartPoint(rectangle),
        endPoint = { x: (getX(startPoint) + getWidth(rectangle)), y: (getY(startPoint) - getHeight(rectangle)) };
  if (getQuadrant(startPoint) === null) {
    return false;
  }

  return getQuadrant(startPoint) === 2 && getQuadrant(endPoint) === 4;
} */
// Инварианты
/* const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
}

const getLcm = (a, b) => Math.abs(a * b) / getGcd(a, b);

const makeRational = (num, den) => {
  const gcd = getGcd(num, den);
  const numer = num / gcd;
  const denom = den / gcd;
  return { numer, denom };
};

const getNumer = (rat) => rat.numer;
const getDenom = (rat) => rat.denom;

const getCommonDenom = (rat1, rat2) => {
  const lcm = getLcm(getDenom(rat1), getDenom(rat2));
  const lcmRat1 = lcm / getDenom(rat1);
  const lcmRat2 = lcm / getDenom(rat2);

  const numerRat1 = getNumer(rat1) * lcmRat1;
  const denomRat1 = getDenom(rat1) * lcmRat1;

  const numerRat2 = getNumer(rat2) * lcmRat2;
  const denomRat2 = getDenom(rat2) * lcmRat2;

  return {
    numerRat1, denomRat1, numerRat2, denomRat2,
  };
};

const add = (rat1, rat2) => {
  const { numerRat1, denomRat1, numerRat2 } = getCommonDenom(rat1, rat2);
  const numer = numerRat1 + numerRat2;
  const denom = denomRat1;

  return { numer, denom };
};

const sub = (rat1, rat2) => {
  const { numerRat1, denomRat1, numerRat2 } = getCommonDenom(rat1, rat2);
  const numer = numerRat1 - numerRat2;
  const denom = denomRat1;
  if (getGcd(numer, denom) !== 1) {
    const numer = (numerRat1 - numerRat2) / denomRat1;
    const denom = denomRat1 / denomRat1;
    return { numer, denom };
  }
  return { numer, denom };
};

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`; */
