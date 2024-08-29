contador = 1
soma = 0
listaA = []

while contador <= 20:
    temperatura = int(input('Coloque a temperatura: '))
    listaA.append(temperatura)
    contador += 1

for numero in listaA:
    soma += numero

media = soma / 20


print(f'A temperatura maxima foi de {max(listaA)}°C temperatura minima {min(listaA)}°C e a media foi de {media}°C')