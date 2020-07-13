it('returns 1', () => {
  expect(secondLowest([4, 3, 1, 1, 2])).toEqual(1);
});

it('returns 2', () => {
  expect(secondLowest([4, 3, 1, 1, 2, 2])).toEqual(2);
});

it('returns 2', () => {
  expect(secondLowest([4, 3, 1, 2])).toEqual(2);
});
