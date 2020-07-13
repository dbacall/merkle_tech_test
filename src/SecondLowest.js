var secondLowest = (numbers) => {
  var frequencies = {};
  numbers.forEach((num) => {
    frequencies[num] ? (frequencies[num] += 1) : (frequencies[num] = 1);
  });

  var min = minOfArray(Object.values(frequencies));

  var secondMin = secondMinOfArray(Object.values(frequencies), min);

  var indexOfSecondMin = Object.values(frequencies).indexOf(secondMin);

  var lastIndexOfSecondMin = Object.values(frequencies).lastIndexOf(secondMin);

  var arrayOfSecondMins = Object.keys(frequencies)
    .splice(indexOfSecondMin, lastIndexOfSecondMin + 1)
    .map((num) => {
      return parseInt(num);
    });

  var minKey = minOfArray(arrayOfSecondMins);

  var secondMinKey = secondMinOfArray(arrayOfSecondMins, minKey);

  var indexOfSecondMinKey = arrayOfSecondMins.indexOf(secondMinKey);

  var minWithNoRepeats = minOfArray(numbers);

  var secondMinWithNoRepeats = secondMinOfArray(numbers, minWithNoRepeats);

  var indexOfSecondMinWithNoRepeats = numbers.indexOf(secondMinWithNoRepeats);

  if (arrayOfSecondMins.length === 1) {
    return parseInt(Object.keys(frequencies)[indexOfSecondMin]);
  } else if (arrayOfSecondMins.length > 1) {
    return parseInt(Object.keys(frequencies)[indexOfSecondMinKey]);
  } else {
    return numbers[indexOfSecondMinWithNoRepeats];
  }
};

var minOfArray = (arr) => {
  return Math.min.apply(null, arr.filter(Boolean));
};

var secondMinOfArray = (arr, min) => {
  return Math.min.apply(
    null,
    arr.filter((n) => n != min)
  );
};
