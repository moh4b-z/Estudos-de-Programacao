atual = 1
anterior = 0

passo = 1
while passo <= 15:
    proximo = atual + anterior
    print (proximo)
    anterior = atual
    atual = proximo
    passo += 1