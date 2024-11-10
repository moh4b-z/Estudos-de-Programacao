
#configurações inicias/ importa bibliotaca de jogo
import pygame 
import random


pygame.init ()
pygame.display.set_caption('jogo snake')
altura = 400
largura = 500
tela = pygame.display.set_mode((largura, altura))
relogio = pygame.time.Clock()

#cores
preto = (0, 0, 0)
branca = (255, 255, 255)
verde = (0, 255, 0)
vermelho = (255, 0, 0)


#cobra
tamanho_do_cadrado = 10
velocidade_que_o_jogo_roda = 15

# uma função para gera a maça a leotoria mente
def gera_maca():

    #vai gera valores aleatorios, diminuir o tamanho do cadrado serve para que não crie uma maçã fora da tela
    maca_x = (random.randrange(0, largura - tamanho_do_cadrado))
    maca_y = (random.randrange(0, altura - tamanho_do_cadrado))

    return maca_x, maca_y

def desenho_maca(tamanho, maca_x, maca_y):
    #vai desenhar um retagulo na tela
    pygame.draw.rect(tela, vermelho, [maca_x, maca_y, tamanho, tamanho])


def desenho_cobra(tamanho, pontos_que_almenta_tamanho):
    #vai desenhar varios retagulos na tela
    for pixel in pontos_que_almenta_tamanho:
        pygame.draw.rect(tela, verde, [pixel[0], pixel[1], tamanho, tamanho]) # pixel[0] e pixel[1] são o x e y que vai ter mais para frente, é onde a cabeça da cobra vai tá

def desenhar_os_pontos(pontuacao):
    #como vai ser um texto precisa de uma fonte
    fonte = pygame.font.SysFont('Avestruz', 30)
    # o True só serve para "a redondar" as letras mas tambem fuciona com false que não vai "a redondar" (é da biblioteca pygame)
    texto = fonte.render(f'Pontos {pontuacao}', True, branca)
    #para colocar texto na tela você coloca blit não draw que é para "desenhos"
    #[1,1] só para não ficar colado na magem
    tela.blit(texto, [1,1])


def mudar_velocidade_inicial(tecla):
    if tecla == pygame.K_DOWN:
        velocidade_X = 0
        velocidade_Y = tamanho_do_cadrado
    elif tecla == pygame.K_UP:
        velocidade_X = 0
        velocidade_Y = -tamanho_do_cadrado
    elif tecla == pygame.K_RIGHT:
        velocidade_X = tamanho_do_cadrado
        velocidade_Y = 0
    elif tecla == pygame.K_LEFT:
        velocidade_X = -tamanho_do_cadrado
        velocidade_Y = 0

    return velocidade_X, velocidade_Y

def roda_jogo():

    fim_do_jogo = False


    #onde a cobra vai começa
    x= largura / 2
    y = altura / 2

    #a velocidade que ela se move no inicio do jogo que é 0, porém quando a perta para se mover esses valores vão mudar
    velocidade_X = 0
    velocidade_Y = 0

    tamanho_cobra = 1
    pontos_que_almenta_tamanho = []

    #onde a maçã vai tá
    maca_x, maca_y = gera_maca()

    while not fim_do_jogo:

        #cor do fundo
        tela.fill(preto)

        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                fim_do_jogo = True
            # pygame.KEYDOWN para aperta um botão
            elif evento.type == pygame.KEYDOWN:
                velocidade_X, velocidade_Y = mudar_velocidade_inicial(evento.key)


        # o que vai ter na tela
        #
        # a maçã que vai a parecer
        desenho_maca(tamanho_do_cadrado, maca_x, maca_y)


        # matar na parede
        if x < 0 or x >= largura or y < 0 or y >= altura:
            fim_do_jogo = True


        #atualizar a localização da cobra
        x += velocidade_X
        y += velocidade_Y

        # o desnho da cobra na tela
        pontos_que_almenta_tamanho.append([x,y])#onde a cabeça tá

        if len(pontos_que_almenta_tamanho) > tamanho_cobra:
            del pontos_que_almenta_tamanho[0]

        # se a cobra bateu no corpo, tirando a cabeça, lembrando que quando vc coloca -1 quer dizer o ultimo termo sendo assim a cabeça da cobra
        # sem o [-1] ele ia acabar já o jogo porque ia falar que ela já ia tá tocando o corpo, e os : serve para "tira" o -1 (cabeça)
        for pixel in pontos_que_almenta_tamanho[:-1]:
            if pixel == [x, y]:
                fim_do_jogo = True

        
        desenho_cobra(tamanho_do_cadrado, pontos_que_almenta_tamanho)

        #ele cai pegar os pontos falar que é o tamanho
        desenhar_os_pontos(tamanho_cobra - 1)

        #atualização da tela
        pygame.display.update()

        # Nova comida
        if x <= maca_x + tamanho_do_cadrado and x + tamanho_do_cadrado >= maca_x and y <= maca_y + tamanho_do_cadrado and y + tamanho_do_cadrado >= maca_y:
            tamanho_cobra += 1  # Aumentar o tamanho da cobra
            maca_x, maca_y = gera_maca()



        relogio.tick(velocidade_que_o_jogo_roda)

#criar um loop infinito
roda_jogo()