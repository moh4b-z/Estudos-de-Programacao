contador = 1

listaA = []
listaB = []
pares = []
impares = []

while contador <= 30:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for i in range(0, len(lista1), 2):
    lista2.append(lista1[i])
    if i + 1 < len(lista1):
        lista1[i], lista1[i + 1] = lista1[i + 1], lista1[i]

for numeroIP, numeroP in zip(pares, impares):

print(f'Na lista A tem altodo {len(pares)} numeros pares e {len(impares)} de impares')