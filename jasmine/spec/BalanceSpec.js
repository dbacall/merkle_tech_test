it('returns 10201 after 2 months', () => {
  expect(balance(10000, 1, 20000, 1, 2)).toEqual(10201);
});

it('returns 25904.5 after 2 months', () => {
  expect(balance(25000, 2, 20000, 1, 2)).toEqual(25904.5);
});

it('returns 20597.96 after 2 months', () => {
  expect(balance(19800, 2, 20000, 1, 2)).toEqual(20597.96);
});
