contador = 1

A = []
B = []
C = []

while contador <= 12:
    numero1 = int(input('Colocar um numero para a lista A divisivel por 2 e 3: '))

    if numero1 % 2 == 0 and numero1 % 3 == 0:
        A.append(numero1)
    else:
        while numero1 % 2 == 0 and numero1 % 3 == 0:
            print('Numeoro não compativel')
            numero1 = int(input('Colocar um numero para a lista A divisivel por 2 e 3: '))
        A.append(numero1)

    numero2 = int(input('Colocar um numero para a lista B NÂO pode ser multiplo de 5: '))

    if numero2 % 5 != 0:
        B.append(numero2)
    else:
        while numero2 % 5 == 0:
            print('Numeoro não compativel')
            numero2 = int(input('Colocar um numero para a lista B NÂO pode ser multiplo de 5: '))
        B.append(numero2)
    
    contador += 1

for numeroA, numeroB in zip(A, B):
    C.append(numeroA)
    C.append(numeroB)