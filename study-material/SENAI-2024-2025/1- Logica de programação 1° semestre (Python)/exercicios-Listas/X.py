contador = 1
listaA = []
listaB = []

# Preencher a listaA com 6 números
while contador <= 6:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

# Iterar sobre os elementos da listaA
for indice, elemento in enumerate(listaA):
    if indice < len(listaA) - 1:  # Verifica se não estamos no último elemento
        if indice % 2 == 0:
            listaB.append(listaA[indice + 1])
        else:
            listaB.append(listaA[indice - 1])


listaB.append(listaA[0])

print(f'Lista A: {listaA}')
print(f'Lista B: {listaB}')
