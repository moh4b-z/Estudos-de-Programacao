#!/bin/bash

# Define o ano desejado
ano="2025"

# Loop de 1 a 12 para representar cada mês do ano
for mes in {01..12}; do
    # Loop para obter o dia da semana (0 a 6, onde 0 é domingo) para o primeiro dia de cada mês
    for dia in {01..07}; do
        # Obtém o dia da semana para o primeiro dia do mês
        dia_semana=$(date -d "$ano-$mes-$dia" +%u)

        # Verifica se o dia da semana é quinta-feira (dia 4)
        if [ "$dia_semana" -eq 4 ]; then
            # Formata o nome da pasta (exemplo: Thu_2025_01_02 para representar uma quinta-feira)
            nome_pasta="Thu_${ano}_${mes}_${dia}"

            # Cria a pasta se ainda não existir
            if [ ! -d "$nome_pasta" ]; then
                mkdir "$nome_pasta"
                echo "Pasta '$nome_pasta' criada com sucesso."
            else
                echo "A pasta '$nome_pasta' já existe."
            fi
        fi
    done
done
