contador = 1

listaA = []
listaB = []

def UsarGrandeSoma(numero):
    i = numero
    mult = 0

    while i >= 1:
        mult = mult + i
        i -= 1

    return mult

while contador <= 20:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    numerosSomados = UsarGrandeSoma(numero)
    listaB.append(numerosSomados)

print(f'Numero da lista B:  {listaB}')