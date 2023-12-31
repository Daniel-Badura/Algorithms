def selection_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        min_index = i
        for j in range(i+1, n):
            if arr[min_index] > arr[j]:
                min_index = j
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]

# Example:
unsorted_list = [64, 25, 12, 22, 11]
selection_sort(unsorted_list)
print(unsorted_list) 
