import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();

// BEGIN (write your solution here)
assert.deepStrictEqual(take([1, 2, 3]), [1]);
assert.deepStrictEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepStrictEqual(take([1, 2, 3], 5), [1, 2, 3]);
assert.deepStrictEqual(take([1, 2, 3], 0), []);
// END
