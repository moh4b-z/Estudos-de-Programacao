opcao = 1

def mostra_menu():
    print ('Escolha uma opção:')
    print ('1 - adição')
    print ('2 - subtração')
    print ('3 - multiplicação')
    print ('4 - divisão')
    print ('0 - sair')

def pegar_valor():
    numero1 = int(input('Digite o primeiro numero'))
    numero2 = int(input('Digite o segunfo numero'))
    return numero1, numero2

while opcao != 0:
    mostra_menu()
    opcao = int(input('-> '))
    
    if opcao == 0:
        print ('Saindo')
        break
    numero1, numero2 = pegar_valor()

    if opcao == 1:
        resultado = numero1 + numero2
        print (f'O resultado é {resultado}')

    elif opcao == 2:
        resultado = numero1 - numero2
        print (f'O resultado é {resultado}')

    elif opcao == 3:
        resultado = numero1 * numero2
        print (f'O resultado é {resultado}')
        
    elif opcao == 4:
        resultado = numero1/numero2
        print (f'O resultado é {resultado}')
