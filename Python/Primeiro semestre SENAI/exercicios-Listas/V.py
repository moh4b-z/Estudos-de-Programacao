contador = 1

listaA = []
pares = []
impares = []

while contador <= 30:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    if numero % 2 == 0:
        pares.append(numero)
    else:
        impares.append(numero)

print(f'Na lista A tem altodo {len(pares)} numeros pares e {len(impares)} de impares')
