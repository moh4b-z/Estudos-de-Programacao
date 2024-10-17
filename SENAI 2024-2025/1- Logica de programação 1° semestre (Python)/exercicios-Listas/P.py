contador = 1
mult = 1
listaA = []
listaB = []


while contador <= 12:
    numero = int(input('Colocar um numero na lista A: '))
    listaA.append(numero)
    contador += 1

for numero in listaA:
    if numero % 2 == 1:
        numerov2 = numero * 2
        listaB.append(numerov2)
    else:
        listaB.append(numero)

print(f'Numeros da lista B: {listaB}')