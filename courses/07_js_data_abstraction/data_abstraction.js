// Точки на координатной плоскости
/*const calculateDistance = (point1, point2) => {
  const deltaX = point2[0] - point1[0];
  const deltaY = point2[1] - point1[1];

  return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
};*/
// Семантика массивов
/*const getMidpoint = (point1, point2) => {
  const x = (point1.x + point2.x) / 2;
  const y = (point1.y + point2.y) / 2;

  return { x, y };
}*/
// Создание абстракции
/*const makeSegment = (beginPoint, endPoint) => {
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
}*/
// Интерфейсы
/*
const getAngle = (point) => point.angle;
const getRadius = (point) => point.radius;

const getX = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));
const getY = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));
*/
