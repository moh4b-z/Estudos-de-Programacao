def ordenar(lista):
    if len(lista) <= 1:
        # Se a lista tem 0 ou 1 elementos, ela já está ordenada
        return lista
    
    pivo = lista[0]
    maior_que_pivo = []
    menor_que_pivo = []

    lista_ordenada = []
    
    for item in lista[1:]:
        if item > pivo:
            maior_que_pivo.append(item)
        else:
            menor_que_pivo.append(item)


    maior_que_pivo = ordenar(maior_que_pivo)
    menor_que_pivo = ordenar(menor_que_pivo)

    for item in menor_que_pivo:
        lista_ordenada.append(item)

    lista_ordenada.append(pivo)

    for item in maior_que_pivo:
        lista_ordenada.append(item)
    
    return lista_ordenada

entrada = input("Digite os números separados por vírgula: ")

partes = entrada.split(',')

lista = [int(parte.strip()) for parte in partes]

lista_ordenada = ordenar(lista)

print(lista_ordenada)