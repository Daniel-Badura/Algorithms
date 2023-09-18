const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  isSorted = false;
  while (!isSorted) {
    isSorted = true;

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[i - 1]) {
        [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
        isSorted = false;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
