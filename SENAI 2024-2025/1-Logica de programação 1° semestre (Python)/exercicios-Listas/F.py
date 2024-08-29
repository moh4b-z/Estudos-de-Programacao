contador = 1

A = []
B = []
C = []

while contador <= 15:
    numero1 = int(input('Colocar um numero para a lista A: '))
    numero2 = int(input('Colocar um numero para a lista B: '))
    A.append(numero1)
    B.append(numero2)
    contador += 1

for numeroA, numeroB in zip(A, B):
    C.append(numeroA)
    C.append(numeroB)

for elemento in C:
    print(elemento)