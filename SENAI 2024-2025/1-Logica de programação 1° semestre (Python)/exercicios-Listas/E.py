contador = 1

listaA = []
listaB = []

def Usarfatorial(numero):
    fatorial = numero
    mult = 1

    while fatorial >= 1:
        mult = mult * fatorial
        fatorial -= 1

    return mult

while contador <= 2:
    numero1 = int(input('Colocar um numero para a lista A: '))
    listaA.append(numero1)
    contador += 1

for numero in listaA:
    numerofatorial = Usarfatorial(numero)
    listaB.append(numerofatorial)

print(f'Numeros da lista A: {listaA} -- Numeros da lista B {listaB} que são o fatorias da lista A')