contador = 1

nomes = []

while contador <= 10:
    nome1 = input('Colocar o nome: ')
    nomes.append(nome1)
    contador += 1

for nome in nomes:
    print(f'Nome: {nome}')