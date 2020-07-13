var longestSequence = (letters) => {
  var currentSequence = {};
  var letterSequences = [];
  letters
    .toLowerCase()
    .split('')
    .forEach((letter, i) => {
      if (i === 0) {
        currentSequence[letter] = 1;
      } else if (!currentSequence[letter] && i !== letters.length - 1) {
        letterSequences.push(currentSequence);
        currentSequence = {};
        currentSequence[letter] = 1;
      } else if (i !== letters.length - 1) {
        currentSequence[letter] += 1;
      } else if (i === letters.length - 1) {
        if (!currentSequence[letter]) {
          letterSequences.push(currentSequence);
          currentSequence = {};
          currentSequence[letter] = 1;
          letterSequences.push(currentSequence);
        } else {
          currentSequence[letter] += 1;
          letterSequences.push(currentSequence);
        }
      }
    });
  return letterSequences
    .sort((a, b) => {
      return Object.keys(a)[0] > Object.keys(b)[0]
        ? -1
        : Object.keys(a)[0] < Object.keys(b)[0]
        ? 1
        : 0;
    })
    .reduce((a, b) => {
      return Object.values(a)[0] > Object.values(b)[0] ? a : b;
    });
};
