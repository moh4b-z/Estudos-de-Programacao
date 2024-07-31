contador = 1

listaA = []
listaB = []

while contador <= 15:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    numeroXX2 = numero**2
    listaB.append(numeroXX2)

print(f'Numeros da lista A: {listaA} -- Numeros da lista B {listaB} que são os quadrados da lista A')