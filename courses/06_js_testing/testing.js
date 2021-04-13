const _ = require('lodash');

// Зачем и как писать тесты?
/*
if (get({ kiln: 'oil'}, 'kiln') !== 'oil') {
  throw new Error('Функция работает неверно!');
}
if (get({}, 'kiln', 'air') !== 'air') {
  throw new Error('Функция работает неверно!');
}
if (get({ kiln: 'oil'}, 'kiln', 'air') !== 'oil') {
  throw new Error('Функция работает неверно!');
} */
// Asserts
/* assert.deepStrictEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepStrictEqual(take([1, 2]), [1]);
assert.deepStrictEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepStrictEqual(take(['one', 'two', 'three'], 0), []);
assert.deepStrictEqual(take([]), []); */
// power-assert
/*
assert(indexOf(['one', 'two', 8], 'two') === 1);
assert(indexOf([1, 8, 9, 3, 9], 9) === 2);
assert(indexOf([1, 8, 9, 3, 9], 9, 3) === 4);
assert(indexOf([], 9) === -1); */
// jest
/*
expect(without([], 3)).toEqual([]);
expect(without([3, 8, 9, 8, 10], 8, 10)).toEqual([3, 9]); */
