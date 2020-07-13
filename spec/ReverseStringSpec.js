it('returns bcba', () => {
  expect(reverseString('abcb')).toEqual('bcba');
});

it('returns tset', () => {
  expect(reverseString('test')).toEqual('tset');
});

it('returns racecar', () => {
  expect(reverseString('racecar')).toEqual('racecar');
});

it('returns an empty string', () => {
  expect(reverseString('')).toEqual('');
});
