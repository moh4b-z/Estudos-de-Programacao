contador = 1

A = []
B = []
C = []

while contador <= 6:
    numero1 = int(input('Colocar um numero para a lista A só pode ser par: '))
    if numero1 % 2 != 0:  # Verifica se o número é ímpar
        print('Você colocou um número ímpar. Tente novamente.')
        continue  # Reinicia o loop para pedir um novo número

    A.append(numero1)

    numero2 = int(input('Colocar um numero para a lista B só pode ser ímpar: '))
    if numero2 % 2 != 1:  # Verifica se o número é par
        print('Você colocou um número par. Tente novamente.')
        continue  # Reinicia o loop para pedir um novo número

    B.append(numero2)

    contador += 1

# Combinando elementos de A e B em C
for numeroA, numeroB in zip(A, B):
    C.append(numeroA)
    C.append(numeroB)

print(f'Todos os elementos (Lista C): {C}')
