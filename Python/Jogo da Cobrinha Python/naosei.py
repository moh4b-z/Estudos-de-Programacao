import pygame 
from pygame.locals import *
import random

#cores
preto = (0, 0, 0)
branca = (255, 255, 255)
verde = (0, 255, 0)
vermelho = (255, 0, 0)

tamanho_do_cadrado = 10

# Inicializa o Pygame
pygame.init()
# Define a largura e altura da tela
largura, altura = 500, 400
tela = pygame.display.set_mode((largura, altura))
pygame.display.set_caption("Captura de Teclado")


def colisao(pos1, pos2):
    return (pos1 == pos2)


def limites (posicao):
    if 0 <= posicao[0] < (largura, altura)[0] and 0 <= posicao[1] < (largura, altura)[1]:
        return False
    else:
        return True


def gera_maca():

    #vai gera valores aleatorios, diminuir o tamanho do cadrado serve para que não crie uma maçã fora da tela
    maca_x = (random.randrange(0, largura - tamanho_do_cadrado))
    maca_y = (random.randrange(0, altura - tamanho_do_cadrado))
    return maca_x // tamanho_do_cadrado*tamanho_do_cadrado, maca_y // tamanho_do_cadrado*tamanho_do_cadrado



Cobrinha = [(250,altura/2),(260,altura/2),(270,altura/2)]
Cobrinha_Surface = pygame.Surface((tamanho_do_cadrado,tamanho_do_cadrado))
Cobrinha_Surface.fill((verde))
Cobrinha_direcao = K_LEFT


maca_Surface = pygame.Surface((tamanho_do_cadrado,tamanho_do_cadrado))
maca_Surface.fill((vermelho))
maca_p = random_on_grid()


# Loop principal do jogo
while True:

    pygame.time.Clock().tick(15)
     #cor do fundo
    tela.fill(preto)

        # Verifica eventos de entrada
    for evento in pygame.event.get():
        # Se o evento for do tipo QUIT, sai do loop
        if evento.type == pygame.QUIT:
            pygame.quit()
            quit()

        if evento.type == KEYDOWN:
            if evento.key in [K_UP, K_DOWN, K_LEFT, K_RIGHT]:
                Cobrinha_direcao = evento.key

    tela.blit(maca_Surface, maca_p)

    for parte in Cobrinha:
        tela.blit(Cobrinha_Surface, parte)
    

    for i in range(len(Cobrinha) - 1, 0, -1):
        if colisao(Cobrinha[0], Cobrinha[i]):
            pygame.quit()
            quit
        Cobrinha[i] = Cobrinha[i-1]

    if limites(Cobrinha[0]):
        pygame.quit()
        quit

    if Cobrinha_direcao == K_UP:
        Cobrinha[0] = (Cobrinha[0][0], Cobrinha[0][1] - tamanho_do_cadrado)
    elif Cobrinha_direcao == K_DOWN:
        Cobrinha[0] = (Cobrinha[0][0], Cobrinha[0][1] + tamanho_do_cadrado)
    elif Cobrinha_direcao == K_LEFT:
        Cobrinha[0] = (Cobrinha[0][0] - tamanho_do_cadrado, Cobrinha[0][1])
    elif Cobrinha_direcao == K_RIGHT:
        Cobrinha[0] = (Cobrinha[0][0] + tamanho_do_cadrado, Cobrinha[0][1])

    # Atualiza a tela
    pygame.display.update()
