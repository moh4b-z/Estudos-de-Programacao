contador = 1

A = []
B = []
C = []

while contador <= 20:
    nome1 = input('Colocar o nome: ')
    A.append(nome1)
    contador += 1

contador = 1

while contador <= 30:
    nome2 = input('Colocar o nome: ')
    B.append(nome2)
    contador += 1


for numeroA, numeroB in zip(A, B):
    C.append(numeroA)
    C.append(numeroB)

for elemento in C:
    print(elemento)