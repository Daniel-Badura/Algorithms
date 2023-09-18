numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
def insertSort(array):
    # loop through array
    for i in range(len(array)):
        # check if element is smaller than first element of the array
        if array[i] < array[0]:
            array.insert(0, array.pop(i))
        else:
            for j in range(1, i):
                if (array[i]>array[j-1] and array[i]<array[j]):
                    array.insert(j, array.pop(i))

insertSort(numbers)
print(numbers)