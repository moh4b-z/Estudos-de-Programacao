soma = 0


while True:
    nome = input('Nome do comodo: ')
    largura = int(input('Coloque a largura em metros: '))
    comprimento = int(input('Coloque a comprimento em metros: '))

    area_total = largura*comprimento
    soma += area_total 

    resposta = input(f'Área total do {nome} é {area_total}m². Deseja continua?(se não coloque NÃO) ')
    if resposta == 'NÃO':
        break

print(f'Área total da residência é {soma}m².')