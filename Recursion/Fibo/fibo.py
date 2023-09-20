def fibo(number):
    cache = {}
    def fibonacci(number):
        if number < 2:
            return 1
        if number in cache:
            return cache[number]
        return fibo(number-1)+fibo(number-2)
    
    return  fibonacci(number)
   
    
example = fibo(15) # expected 89
print(example)

