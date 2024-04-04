contador = 1

listaA = []
listaB = []

while contador <= 8:
    numero1 = int(input('Colocar um numero: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    numeroX3 = numero*3
    listaB.append(numeroX3)
print(f'Valores da Lista B: {listaB}')