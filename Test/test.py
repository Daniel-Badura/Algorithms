def solution(s):
    array = []
#     while string length > 1 array += [:2] 
    while len(s)> 0:
        print(len(s))
        if len(s) == 1:
            array.append(s+"_")
            return array
        else:
            array.append(s[:2])
            s = s[slice(2,len(s))]
    return array



print(solution("Abacadaba"))