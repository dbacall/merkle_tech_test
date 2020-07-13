var secondLowest = (numbers) => {
  var frequencies = {};
  numbers.forEach((num) => {
    frequencies[num] ? (frequencies[num] += 1) : (frequencies[num] = 1);
  });
  var min = Math.min.apply(null, Object.values(frequencies).filter(Boolean));
  var secondMin = Math.min.apply(
    null,
    Object.values(frequencies).filter((n) => n != min)
  );
  var indexOfSecondMin = Object.values(frequencies).indexOf(secondMin);
  return parseInt(Object.keys(frequencies)[indexOfSecondMin]);
};
