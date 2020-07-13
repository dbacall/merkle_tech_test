var reverseString = (string) => {
  var stringWithLastLetterRemoved = string.slice(0, string.length - 1);
  var lastLetter = string.slice(string.length - 1, string.length);
  console.log(lastLetter);
  if (string.length > 0) {
    return lastLetter + reverseString(stringWithLastLetterRemoved);
  } else {
    return lastLetter;
  }
};
