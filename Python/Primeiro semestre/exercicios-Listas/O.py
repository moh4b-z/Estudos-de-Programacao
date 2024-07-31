contador = 1
soma = 0
listaA = []
listaB = []

def celsius_para_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

while contador <= 4:
    temperatura = int(input('Coloque a temperatura: '))
    listaA.append(temperatura)
    contador += 1

for numero in listaA:
    fahrenheit = celsius_para_fahrenheit(numero)
    listaB.append(fahrenheit)


print(f'[°C]As temperaturas foram de {listaA}°C')
print(f'[°F]As temperaturas foram de {listaB}°F')