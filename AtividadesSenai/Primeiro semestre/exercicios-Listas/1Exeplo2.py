numeros = [6,16,34,12]

novo_Valor = int(input('Coloque o valor: '))
numeros.append(novo_Valor)


for numero in numeros:
    if numero >= 15:
        valor = numero - 1
    else:
        valor = numero
    print (f'Valor: {numero} - valor com desconto:{valor}')