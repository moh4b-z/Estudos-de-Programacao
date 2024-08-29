opcao = 1

def mostra_menu():
    print ('Escolha uma opção:')
    print ('1 - Triángulo')
    print ('2 - Quadrilatero')
    print ('3 - Circulo')
    print ('0 - sair')


while opcao != 0:
    mostra_menu()
    opcao = int(input('-> '))
    if opcao == 0:
        print ('Saindo')
        break
    

    elif opcao == 1:
        lado1 = int(input('Lado 1? '))
        lado2 = int(input('Lado 2? '))
        lado3 = int(input('Lado 3? '))
        lados = [lado1, lado2, lado3]
        maior = max(lados)
        lados.remove(maior)

        if maior > min(lados)+max(lados):
            print ('Não é um triangulo')



        elif lado1 == lado2 == lado3:
            print ('Triângulo equilatero')

        elif lado1 == lado2 and lado3 != lado1:
            print ('Triângulo isósceles')
        elif lado1 == lado3 and lado2 != lado1:
            print ('Triângulo isósceles')
        elif lado2 == lado3 and lado2 != lado1:
            print ('Triângulo isósceles')

        else:
            print('Triângulo escaleno')

    elif opcao == 2:

        lado1 = int(input('Lado 1? '))
        lado2 = int(input('Lado 2? '))
        lado3 = int(input('Lado 3? '))
        lado4 = int(input('Lado 4? '))
        if lado1 == lado2 == lado3 == lado4:
            print (f'É um quadrado')

        elif lado1 == lado2 and lado3 == lado4:
             print ('É um rentagulo')
        elif lado1 == lado3 and lado2 == lado4:
             print ('É um rentagulo')
        elif lado3 == lado2 and lado1 == lado4:
             print ('É um rentagulo')

        else: 
            print ('Não é um quadrado e rentagulo')

    elif opcao == 3:
        raio = int(input('Qual é o raio do seu circulo? '))
        area = raio**2 * 3.14
        perimetro = (raio*2)*3.14
        print (f'A área é {area} e o perimetro {perimetro}')

