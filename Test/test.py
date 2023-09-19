def reverse(str):
    if len(str) < 2:
        return str
    else:
        return str[len(str)-1] + reverse(str[0:len(str)-1])

strings = "Domino Ameno"
print(reverse(strings))