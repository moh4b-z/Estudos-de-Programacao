nome = input ('Qual seu nome? ')
curso = input ('Qual é o curso? ')
nota = float(input('Digite a nota: '))
faltas = int(input('Quantas faltas(dias): '))

vazio = ('###################################') # só para a leitura ficar melhor

# todo sistema de presença de pende do curso que está sendo feito, se não fizer isso, não vai fazar sentido a "tabela"
if curso == ('Lógica de progamação'):
    carga_horaria = 80
    horas_por_dia = 4
elif curso == ('PHP'):
    carga_horaria = 80
    horas_por_dia = 4
elif curso == ('HTML5'):
    carga_horaria = 60
    horas_por_dia = 3
elif curso == ('PYTHON'):
    carga_horaria = 80
    horas_por_dia = 8
elif curso == ('Java'):
    carga_horaria = 120
    horas_por_dia = 4
elif curso == ('C#'):
    carga_horaria = 120
    horas_por_dia = 8
else: # para caso algo que não é o curso ser colocado
    carga_horaria = 0
    horas_por_dia = 0

#o execicio não pede, mas é importante para fazer a presença
dias_do_curso = carga_horaria/horas_por_dia

if faltas == 0:
    presenca = (100)
else:
    presenca = (dias_do_curso-faltas)/dias_do_curso*100


if nota >= 70 and presenca >= 75:
    situacao = ('Aprovado')
elif nota >= 70 and presenca < 75:
    situacao = ('Recuperação')
elif nota < 70 and presenca >= 75:
    situacao = ('Recuperação')
elif nota < 70 and presenca < 75:
    situacao = ('Reprovado')

tabela = {' ': vazio,'Aluno': nome, 'Curso': curso, 'Quantidade de faltas': faltas, 'Porcentual de faltas': presenca, 'Nota': nota, 'Stituação do aluno': situacao, ' ': vazio}

for elemento, valor in tabela.items():
    print (f'{elemento}: {valor}')