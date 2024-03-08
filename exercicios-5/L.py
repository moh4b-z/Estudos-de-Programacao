passo = 1
soma_mult = 0
while passo <= 15:
    
    fatorial = int(input('Coloque o numero: '))
    mult = 1

    while fatorial >= 1:
        mult = mult * fatorial
        fatorial -= 1

    soma_mult += mult
    passo += 1

print (soma_mult)
