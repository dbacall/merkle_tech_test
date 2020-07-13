truncateString = (str, num) => {
  if (num < str.length) {
    return str.slice(0, num) + '...';
  } else return str;
};

palindromeChecker = (string) => {
  return string.split('').reverse().join('') === string;
  // console.log(string2, string);
  // return string !== string2;
};
