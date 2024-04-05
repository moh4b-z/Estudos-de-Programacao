contador = 1
mult = 1
listaA = []
listaB = []


while contador <= 2:
    numero = int(input('Colocar um numero na lista A: '))
    listaA.append(numero)
    contador += 1

for numero in listaA:
    if numero % 2 == 0:
        numerov2 = numero / 2
        listaB.append(numerov2)
    else:
        numerov2 = numero * 1.5
        listaB.append(numerov2)

print(f'Numeros da lista B: {listaB}')