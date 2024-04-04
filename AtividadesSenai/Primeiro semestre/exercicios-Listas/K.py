contador = 1

listaA = []
listaB = []

while contador <= 10:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    numeroNegativo = numero - numero*2
    listaB.append(numeroNegativo)

print(f'Numeros da lista B: {listaB}')