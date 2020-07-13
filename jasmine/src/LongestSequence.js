var longestSequence = (letters) => {
  var currentSequence = {};
  var letterSequences = [];
  letters
    .toLowerCase()
    .split('')
    .forEach((letter, i) => {
      if (i === 0) {
        currentSequence[letter] = 1;
      } else if (!currentSequence[letter]) {
        letterSequences.push(currentSequence);
        currentSequence = {};
        currentSequence[letter] = 1;
      } else {
        currentSequence[letter] += 1;
      }
    });
  console.log(letterSequences);
  return letterSequences.reduce((a, b) => {
    return Object.values(a)[0] > Object.values(b)[0] ? a : b;
  });
};
