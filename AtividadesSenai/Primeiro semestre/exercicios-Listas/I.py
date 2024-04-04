contador = 1

A = []
B = []
C = []
D = []

while contador <= 5:
    numero1 = int(input('Colocar um numero para a lista A: '))
    numero2 = int(input('Colocar um numero para a lista B: '))
    numero3 = int(input('Colocar um numero para a lista C: '))
    A.append(numero1)
    B.append(numero2)
    C.append(numero3)
    contador += 1

for numeroA, numeroB, numeroC in zip(A, B, C):
    D.append(numeroA)
    D.append(numeroB)
    D.append(numeroC)

for elemento in D:
    print(elemento)