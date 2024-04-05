contador = 1

listaA = []
pares = []

while contador <= 15:
    numero1 = int(input('Colocar um numero na lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    if numero % 2 == 0:
        pares.append(numero)
    

print(f'Numeros essa é quantidade de numeros pares na lista A: {len(pares)}')