def merge_sort(palavras):
    # Caso base: uma lista com 0 ou 1 elementos já está ordenada
    if len(palavras) <= 1:
        return palavras

    # Dividir a lista ao meio
    meio = len(palavras) // 2
    esquerda = palavras[:meio]
    direita = palavras[meio:]

    # Ordenar as duas metades
    esquerda = merge_sort(esquerda)
    direita = merge_sort(direita)

    # Mesclar as duas metades ordenadas
    return merge(esquerda, direita)

def merge(esquerda, direita):
    resultado = []
    i = j = 0

    # Mesclar as duas listas enquanto houver elementos em ambas
    while i < len(esquerda) and j < len(direita):
        if esquerda[i] < direita[j]:
            resultado.append(esquerda[i])
            i += 1
        else:
            resultado.append(direita[j])
            j += 1

    # Adicionar os elementos restantes de esquerda, se houver
    while i < len(esquerda):
        resultado.append(esquerda[i])
        i += 1

    # Adicionar os elementos restantes de direita, se houver
    while j < len(direita):
        resultado.append(direita[j])
        j += 1

    return resultado

# Lista de palavras
palavras = input("Digite as palavras separados por vírgula: ")

partes = palavras.split(';')

lista = [(parte.strip()) for parte in partes]

# Ordenar a lista usando Merge Sort
palavras_ordenadas = merge_sort(lista)

print(palavras_ordenadas)
