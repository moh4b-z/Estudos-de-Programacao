numero = 0
numeros = []
while numero >= 0:
    
    numero = int(input('Coloque pelo menos um numero positivo(quando colocar um negativo o codigo para): '))
    if numero >= 0:
        numeros.append(numero)

print (f'Maior numerto que foi colocado {(max(numeros))} e menor {(min(numeros))}')
    