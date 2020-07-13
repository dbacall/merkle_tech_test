it('returns a string truncated to 8 characters', () => {
  let str = 'it should end before here';
  expect(truncateString(str, 8)).toEqual('it shoul...');
});

it('returns a string truncated to 10 characters', () => {
  let str = 'it should end before here';
  expect(truncateString(str, 10)).toEqual('it should ...');
});

it('returns full string', () => {
  let str = 'it should end at the end';
  expect(truncateString(str, str.length)).toEqual('it should end at the end');
});

it('returns true if racecar', () => {
  expect(palindromeChecker('racecar')).toEqual(true);
});

it('returns true if racecr', () => {
  expect(palindromeChecker('racecr')).toEqual(false);
});
