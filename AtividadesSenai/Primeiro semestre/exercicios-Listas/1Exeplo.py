numeros = [6,16,34,12]

novo_Valor = int(input('Coloque o valor: '))
numeros.append(novo_Valor)

ultimo_indice = len(numeros) - 1
contado = 0

while contado <= ultimo_indice:
    if numeros [contado] >= 15:
        valor = numeros[contado] - 1
    else:
        valor = numeros[contado]
    print (f'Valor: {numeros[contado]} - valor com desconto:{valor}')
    contado += 1