contador = 1

listaA = []
impares = []

while contador <= 15:
    numero1 = int(input('Colocar um numero na lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    if numero % 2 == 0:
        impares.append(numero)
porcentagem = len(impares)/len(listaA)*100

print(f'Numeros essa é quantidade de numeros impares na lista A: {len(impares)}')
print(f'Que representa {porcentagem}% de todos os numeros da lista A')