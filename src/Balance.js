var balance = (openingSum, interestRate, taxFreeLimit, taxRate, numMonths) => {
  var currentSum = openingSum;

  for (i = 1; i <= numMonths; i++) {
    if (currentSum - taxFreeLimit <= 0) {
      currentSum += interest(currentSum, interestRate);
    } else {
      currentSum +=
        interest(currentSum, interestRate) -
        tax(currentSum, taxFreeLimit, taxRate);
    }
  }

  return currentSum;
};

var interest = (currentSum, interestRate) => {
  return currentSum * (interestRate / 100);
};

var tax = (currentSum, taxFreeLimit, taxRate) => {
  return (currentSum - taxFreeLimit) * (taxRate / 100);
};
