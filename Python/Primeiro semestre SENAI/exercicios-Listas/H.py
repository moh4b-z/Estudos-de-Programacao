contador = 1

listaA = []
listaB = []

while contador <= 20:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in reversed(listaA):
    listaB.append(numero)

print (f'Numeros da lista A: {listaA}') 
print (f'Numeros da lista B: {listaB}')