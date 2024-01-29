const sum = require('./index');

test('sum function exists', () => {
  expect(sum(1)(2)(3)()).toBeDefined();
});

test('sum sums a string', () => {
  expect(sum(1)(2)(3)()).toEqual(6);
});

test('sum sums a string', () => {
  expect(sum(1)(2)(3)(4)()).toEqual(10);
});