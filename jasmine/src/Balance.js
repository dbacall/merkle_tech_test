var balance = (openingSum, interestRate, taxFreeLimit, taxRate, numMonths) => {
  var currentSum = openingSum;

  for (i = 1; i <= numMonths; i++) {
    if (currentSum - taxFreeLimit <= 0) {
      currentSum += currentSum * (interestRate / 100);
    } else {
      currentSum +=
        currentSum * (interestRate / 100) -
        (currentSum - taxFreeLimit) * (taxRate / 100);
    }
  }

  return currentSum;
};
