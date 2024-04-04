contador = 1

listaA = []
listaB = []

while contador <= 10:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    numeroD2 = numero/2
    listaB.append(numeroD2)

print(f'Numeros da lista A: {listaA} -- Numeros da lista B {listaB} que são a metade da lista A')