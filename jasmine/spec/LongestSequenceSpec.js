it('returns h as the letter with the longest sequence', () => {
  expect(longestSequence('dghhhmhmx')).toEqual({ h: 3 });
});

it('returns k as the letter with the longest sequence', () => {
  expect(longestSequence('dhkkhhKKKt')).toEqual({ k: 3 });
});
