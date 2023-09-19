def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]  
    left = [x for x in arr if x < pivot] 
    middle = [x for x in arr if x == pivot] 
    right = [x for x in arr if x > pivot] 

    left = quick_sort(left)
    right = quick_sort(right)
    
 
    return left + middle + right

if __name__ == "__main__":
    unsorted_list = [3, 6, 8, 10, 1, 2, 1]
    sorted_list = quick_sort(unsorted_list)
    print(sorted_list)