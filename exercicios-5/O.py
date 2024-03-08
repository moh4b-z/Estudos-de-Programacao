numeros = [1,3,5,7,9]
for numero in numeros:
    mult = 1
    fatorial = numero

    while fatorial >= 1:
        mult *= fatorial
        fatorial -= 1

    print(mult)
