import math

# Receber o endereço IP
ipv4 = input('Coloque o seu IP: ')
# Dividir com base no caractere '.'
octetos = ipv4.split('.')
# Verificar se está em bits ou hosts
bits_hosts = input('Está em bit ou host? ')

if bits_hosts == 'bit':
    bits = int(input('Qual é o bit da rede? '))

    # Calcular o número de hosts
    hosts = 2 ** (32 - bits)

    # Calcular o endereço da rede
    rede = [int(octeto) for octeto in octetos]
    final_rede = rede[3] + hosts - 1

    while final_rede > 255:
        rede[3] = final_rede % 256
        #transporte de valor
        mudar_valor = final_rede // 256
        final_rede = rede[2] + mudar_valor
        rede[2] = final_rede % 256
        if final_rede > 255:
            mudar_valor = final_rede // 256
            final_rede = rede[1] + mudar_valor
            rede[1] = final_rede % 256
            if final_rede > 255:
                mudar_valor = final_rede // 256
                final_rede = rede[0] + mudar_valor
                rede[0] = final_rede
    
    proxima_rede = rede[3] + 1

    print (hosts)
    print (bits)
    print (f'Final da rede: {".".join(map(str, rede[0:]))}')#separando cada elemento por um separador especificado
    print (f'Proxima rede: {".".join(octetos[:3])}.{proxima_rede}')

elif bits_hosts == 'host':
    hosts = int(input('Qual é o número de hosts? '))

    # Calcular os bits da rede
    bits = 32 - math.ceil(math.log2(hosts))

   # Calcular o endereço da rede
    rede = [int(octeto) for octeto in octetos]
    final_rede = rede[3] + hosts - 1

    while final_rede > 255:
        rede[3] = final_rede % 256
        #transporte de valor
        mudar_valor = final_rede // 256
        final_rede = rede[2] + mudar_valor
        rede[2] = final_rede % 256
        if final_rede > 255:
            mudar_valor = final_rede // 256
            final_rede = rede[1] + mudar_valor
            rede[1] = final_rede % 256
            if final_rede > 255:
                mudar_valor = final_rede // 256
                final_rede = rede[0] + mudar_valor
                rede[0] = final_rede
    
    proxima_rede = rede[3] + 1

    print (hosts)
    print (bits)
    print (f'Final da rede: {".".join(map(str, rede[0:]))}')#separando cada elemento por um separador especificado
    print (f'Proxima rede: {".".join(octetos[:3])}.{proxima_rede}')


else:
    print ('É host ou bit')

