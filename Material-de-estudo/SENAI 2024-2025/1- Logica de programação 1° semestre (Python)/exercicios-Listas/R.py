contador = 1

A = []
B = []
C = []
D = []

while contador <= 6:
    numero1 = int(input('Colocar um numero para a lista A: '))
    numero2 = int(input('Colocar um numero para a lista B: '))
    A.append(numero1)
    B.append(numero2)
    contador += 1

for numeroA, numeroB in zip(A, B):
    if numeroA % 2 == 1:
        C.append(numeroA)
    else:
        D.append(numeroA)
        
    if numeroB % 2 == 1:
        C.append(numeroB)
    else:
        D.append(numeroB)


print(f'Todos os elementos ímpares (Lista C): {C}')
print(f'Todos os elementos pares (Lista D): {D}')