#configurações iniciais/ importa biblioteca de jogo
import pygame 
import random

pygame.init()
pygame.display.set_caption('jogo snake')

altura = 20
largura = 25
tela_largura = 500
tela_altura = 400
tamanho_do_cadrado = tela_largura // largura

tela = pygame.display.set_mode((tela_largura, tela_altura))
relogio = pygame.time.Clock()

preto = (0, 0, 0)
branco = (255, 255, 255)
verde = (0, 255, 0)
vermelho = (255, 0, 0)

# Define os valores para os diferentes elementos no tabuleiro
VAZIO = 0
COBRA = 1
MACA = 2

def gera_maca():
    maca_x = random.randrange(0, largura)
    maca_y = random.randrange(0, altura)
    return maca_x, maca_y

def desenho_maca(maca_x, maca_y):
    pygame.draw.rect(tela, vermelho, [maca_x * tamanho_do_cadrado, maca_y * tamanho_do_cadrado, tamanho_do_cadrado, tamanho_do_cadrado])

def desenho_cobra(cobra):
    for segmento in cobra:
        pygame.draw.rect(tela, verde, [segmento[0] * tamanho_do_cadrado, segmento[1] * tamanho_do_cadrado, tamanho_do_cadrado, tamanho_do_cadrado])

def atualiza_tabuleiro(cobra, maca):
    tabuleiro = [[VAZIO for _ in range(largura)] for _ in range(altura)]

    for segmento in cobra:
        x, y = segmento
        tabuleiro[y][x] = COBRA

    x, y = maca
    tabuleiro[y][x] = MACA

    return tabuleiro

def roda_jogo():
    fim_do_jogo = False

    cobra = [[largura // 2, altura // 2]]
    velocidade_X = 0
    velocidade_Y = 0
    maca_x, maca_y = gera_maca()

    while not fim_do_jogo:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                fim_do_jogo = True
            elif evento.type == pygame.KEYDOWN:
                if evento.key == pygame.K_DOWN:
                    velocidade_X = 0
                    velocidade_Y = 1
                elif evento.key == pygame.K_UP:
                    velocidade_X = 0
                    velocidade_Y = -1
                elif evento.key == pygame.K_RIGHT:
                    velocidade_X = 1
                    velocidade_Y = 0
                elif evento.key == pygame.K_LEFT:
                    velocidade_X = -1
                    velocidade_Y = 0

        # Move a cobra
        x, y = cobra[0]
        novo_x = (x + velocidade_X) % largura
        novo_y = (y + velocidade_Y) % altura
        cobra.insert(0, [novo_x, novo_y])
        if [novo_x, novo_y] == [maca_x, maca_y]:
            maca_x, maca_y = gera_maca()
        else:
            cobra.pop()

        tela.fill(preto)
        desenho_cobra(cobra)
        desenho_maca(maca_x, maca_y)
        
        # Atualiza o tabuleiro (sem exibir na tela)
        tabuleiro = atualiza_tabuleiro(cobra, (maca_x, maca_y))
        # Exemplo de como acessar o estado do tabuleiro:
        # print(tabuleiro)
        
        pygame.display.update()
        relogio.tick(velocidade_que_o_jogo_roda)

# Criar um loop infinito
roda_jogo()
