numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

def bubbleSort(array):
    isSorted = False
    while (not isSorted):
        isSorted = True
        for i in range(1,len(array)):
            if array[i]<array[i-1]:
                array[i], array[i-1] = array[i-1], array[i]
                isSorted = False

bubbleSort(numbers)
print(numbers)
            
        
