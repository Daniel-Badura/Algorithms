function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((element) => element < pivot);
  const middle = arr.filter((element) => element === pivot);
  const right = arr.filter((element) => element > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
