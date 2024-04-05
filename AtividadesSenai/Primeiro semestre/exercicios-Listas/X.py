contador = 1

listaA = []
listaB = []
pares = []
impares = []

while contador <= 30:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for i, elemento in enumerate(lista_original):
    if i % 2 == 0:
        lista_destino1.append(elemento)
    else:
        lista_destino2.append(elemento)

for numeroIP, numeroP in zip(pares, impares):

print(f'Na lista A tem altodo {len(pares)} numeros pares e {len(impares)} de impares')