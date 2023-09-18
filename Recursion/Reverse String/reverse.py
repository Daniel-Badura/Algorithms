def reverse(str):
    if len(str) < 2 :
        return str
    return str[len(str)-1] + reverse(str[0:len(str)-1])


strin = 'ABACADABA'
print(f"reversed {reverse(strin)}")
