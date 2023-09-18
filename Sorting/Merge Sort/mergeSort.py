numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0,223,332,223,332]

def merge_sort(array):
    if len(array) == 1:
        return array

    # Split the array into left and right halves
    mid = len(array) // 2
    left = array[:mid]
    right = array[mid:]

    left = merge_sort(left)
    right = merge_sort(right)

    return merge(left, right)

def merge(left, right):
    merged = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] <= right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1

    # Append any remaining elements from left and right
    merged.extend(left[left_index:])
    merged.extend(right[right_index:])

    return merged

answer = merge_sort(numbers)
print(answer)
