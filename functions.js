const test = (coll = [], ...values) => {
  const result = coll.filter((val) => !values.includes(val));
  return result.length === 0 ? null : result;
}

console.log(test([2, 1, 2, 3], 1, 2));