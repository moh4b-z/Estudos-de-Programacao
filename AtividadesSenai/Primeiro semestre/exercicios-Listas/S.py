contador = 1

A = []
B = []
C = []

while contador <= 6:
    numero1 = int(input('Colocar um numero para a lista A só pode ser par: '))

    if numero1 % 2 == 0:
        A.append(numero1)
    else:
        while numero1 % 2 != 0:
            print('Você colocou um numero impar')
            numero1 = int(input('Colocar um numero para a lista A só pode ser par: '))
        A.append(numero1)

    numero2 = int(input('Colocar um numero para a lista B só pode ser impar: '))

    if numero2 % 2 == 1:
        B.append(numero2)
    else:
        while numero2 % 2 != 1:
            print('Você colocou um numero par')
            numero2 = int(input('Colocar um numero para a lista B só pode ser impar: '))
        B.append(numero2)
    
    contador += 1

for numeroA, numeroB in zip(A, B):
    C.append(numeroA)
    C.append(numeroB)


print(f'Todos os elementos (Lista C): {C}')