#!/bin/bash

# Função para criar as pastas
criar_pastas() {
    # Solicita o número de pastas a serem criadas
    read -p "Digite o número de pastas a serem criadas: " num_pastas

    # Solicita o nome base para todas as pastas
    read -p "Digite o nome base para todas as pastas: " nome_base

    # Loop para criar as pastas
    for ((i = 1; i <= num_pastas; i++)); do
        nome_pasta="${nome_base}_${i}"
        if [ ! -d "$nome_pasta" ]; then
            mkdir "$nome_pasta"
            echo "Pasta '$nome_pasta' criada com sucesso."
        else
            echo "A pasta '$nome_pasta' já existe."
        fi
    done
}

# Chama a função para criar as pastas
criar_pastas
