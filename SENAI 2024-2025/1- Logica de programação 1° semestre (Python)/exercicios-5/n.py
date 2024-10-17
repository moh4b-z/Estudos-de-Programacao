soma = 0
contador = 0

while True:
    numero = int(input('Coloque o número (insira um número negativo para parar): '))
    if numero < 0:
        break
    soma += numero 
    contador += 1


media = soma / contador
print(f'A soma total é {soma}, a média é {media} e o total de valores lidos é {contador}.')

