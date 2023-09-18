function selectSort(arr: number[]): number[] {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  
  // Example:
  const unsortArray: number[] = [64, 25, 12, 22, 11];
  const sortArray: number[] = selectSort(unsortedArray);
  console.log(sortedArray); 
  