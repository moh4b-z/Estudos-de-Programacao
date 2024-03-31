import math

opcao = 1

def mostra_menu():

    print ('Escolha uma opção:')
    print ('1 - Triangulo')
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

        lado1 = float(input('Lado 1? '))
        lado2 = float(input('Lado 2? '))
        lado3 = float(input('Lado 3? '))

        lados = [lado1, lado2, lado3]

        maior = max(lados)
        lados.remove(maior)

        perimetro = lado1 + lado2 + lado3

        if maior >= min(lados) + max(lados):
            print ('Não é um triangulo')


        elif lado1 == lado2 == lado3:
            altura = ((3**0.5)* lado1) / 2
            area = altura * lado1 / 2
            print ('Triângulo equilatero')
            print (f'A área aproximadamente é {area}² e o perimetro aproximadamente {perimetro}')

        elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
            altura = (((max(lados))**2)-((min(lados))**2)/4)**0.5
            area = altura * (min(lados)) / 2
            print('Triângulo isósceles')
            print (f'A área aproximadamente é {area}² e o perimetro aproximadamente {perimetro}')

        else:
            print('Triângulo escaleno')

    elif opcao == 2:

        lado1 = float(input('Lado 1? '))
        lado2 = float(input('Lado 2? '))
        lado3 = float(input('Lado 3? '))
        lado4 = float(input('Lado 4? '))

        perimetro = lado1 + lado2 + lado3 + lado4


        if lado1 == lado2 == lado3 == lado4:
            area = lado1 * lado2
            print (f'É um quadrado')
            print (f'A área é {area}² e o perimetro {perimetro}')

        elif lado1 == lado2 and lado3 == lado4:
            area = lado1 * lado3
            print ('É um rentagulo')
            print (f'A área é {area}² e o perimetro {perimetro}')

        elif lado1 == lado3 and lado2 == lado4:
            area = lado1 * lado2
            print ('É um rentagulo')
            print (f'A área é {area}² e o perimetro {perimetro}')

        elif lado3 == lado2 and lado1 == lado4:
            area = lado1 * lado2
            print ('É um rentagulo')
            print (f'A área é {area}² e o perimetro {perimetro}')

        else: 

            print ('Não é um quadrado nem um rentagulo')
            resposta = input('Quer saber se realmente é um quadrilatero?')

            if resposta == 'sim':

                print ('Ângulos opostos aos respectivos lados')
                angulo1 = float(input('Ângulo oposto ao lado 1? '))
                angulo2 = float(input('Ângulo oposto ao lado 2? '))
                angulo3 = float(input('Ângulo oposto ao lado 3? '))
                angulo4 = float(input('Ângulo oposto ao lado 4? '))

                somaAngulos = angulo1 + angulo2 + angulo3 + angulo4

                if somaAngulos == 360:

                    Sp = perimetro/2
                    abcd = angulo1 * angulo2 * angulo3 * angulo4

                    Bretschneider = math.sqrt((Sp - lado1) * (Sp - lado2) * (Sp - lado3) * (Sp - lado4) - abcd * ((angulo1 + angulo3) / 2))

                    print ('É um quadrilatero')
                    print (f'A área é {Bretschneider}² e o perimetro {perimetro}')

                else:
                    print ('Não é um quadrilatero')

            else:
                print ('voltando')

    elif opcao == 3:

        raio = float(input('Qual é o raio do seu circulo? '))
        area = (raio**2) * 3.14
        perimetro = (raio*2)*3.14
        print (f'A área aproximadamente é {area}² e o perimetro aproximadamente {perimetro}')

