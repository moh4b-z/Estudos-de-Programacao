contador = 1
mult = 1
listaA = []


numero = int(input('Colocar um numero para saber a tabuada dele: '))

while contador <= 10:
    resultado = numero * mult
    listaA.append(resultado)
    mult += 1
    contador += 1

print(f'Numeros da lista A: {listaA}')