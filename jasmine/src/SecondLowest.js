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

  var lastIndexOfSecondMin = Object.values(frequencies).lastIndexOf(secondMin);

  var arrayOfSecondMins = Object.keys(frequencies)
    .splice(indexOfSecondMin, lastIndexOfSecondMin + 1)
    .map((num) => {
      return parseInt(num);
    });

  var minKey = Math.min.apply(null, arrayOfSecondMins.filter(Boolean));

  var secondMinKey = Math.min.apply(
    null,
    arrayOfSecondMins.filter((n) => n != minKey)
  );

  var indexOfSecondMinKey = arrayOfSecondMins.indexOf(secondMinKey);

  var minWithNoRepeats = Math.min.apply(null, numbers.filter(Boolean));

  var secondMinWithNoRepeats = Math.min.apply(
    null,
    numbers.filter((n) => n != minWithNoRepeats)
  );

  var indexOfSecondMinWithNoRepeats = numbers.indexOf(secondMinWithNoRepeats);

  if (arrayOfSecondMins.length === 1) {
    return parseInt(Object.keys(frequencies)[indexOfSecondMin]);
  } else if (arrayOfSecondMins.length > 1) {
    return parseInt(Object.keys(frequencies)[indexOfSecondMinKey]);
  } else {
    return numbers[indexOfSecondMinWithNoRepeats];
  }
};
