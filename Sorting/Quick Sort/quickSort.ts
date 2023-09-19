function quickSorter(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left: number[] = [];
    const middle: number[] = [];
    const right: number[] = [];

    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element === pivot) {
            middle.push(element);
        } else {
            right.push(element);
        }
    }

    return [...quickSorter(left), ...middle, ...quickSort(right)];
}

// Example usage:
const unsortArray: number[] = [3, 6, 8, 10, 1, 2, 1];
const sortArray: number[] = quickSorter(unsortedArray);
console.log(sortedArray);