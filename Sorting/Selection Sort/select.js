const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(numbers) {
  sortedArray = [];
  len = numbers.length;
  while (len - 1 != sortedArray.length) {
    let min = numbers[0];
    let index = 0;
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
        index = i;
      }
      if (i == numbers.length - 1) {
        let splice = numbers.splice(index, 1);
        sortedArray.push(splice[0]);
      }
    }
  }
  return sortedArray;
}

console.log(selectionSort(array));
