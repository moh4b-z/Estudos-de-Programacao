contador = 1

A = []
B = []
C = []

while contador <= 20:
    numero1 = int(input('Colocar um numero para a lista A: '))
    numero2 = int(input('Colocar um numero para a lista B: '))
    A.append(numero1)
    B.append(numero2)
    contador += 1

for numeroA, numeroB in zip(A, B): #Ela permite agrupar elementos de diversas listas em tuplas, criando uma nova lista combinada. Essa função pode ser aplicada em diferentes situações, desde a manipulação de dados até a criação de algoritmos complexos.
    
    numeroC = numeroA - numeroB
    C.append(numeroC)

print(C)