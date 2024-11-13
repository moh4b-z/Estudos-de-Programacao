contador = 1

listaA = []
listaB = []
listaC = []


while contador <= 10:
    numero1 = int(input('Colocar um numero na lista A: '))
    numero2 = int(input('Colocar um numero na lista B: '))
    listaA.append(numero1)
    listaB.append(numero2)
    contador += 1

for numeroA, numeroB in zip(listaA,listaB):
    soma = numeroA + numeroB
    quadrado = soma** 2
    listaC.append(quadrado)
    

print(f'Numeros da lista C: {listaC}')