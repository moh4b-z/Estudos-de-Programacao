#!/bin/bash

# Função para criar os usuários
criar_usuarios() {
    # Solicita o número de usuários a serem criados
    read -p "Digite o número de usuários a serem criados: " num_usuarios

    # Solicita o nome base para todos os usuários
    read -p "Digite o nome base para todos os usuários: " nome_base

    # Define a senha padrão
    senha_padrao="senai127"

    # Loop para criar os usuários
    for ((i = 1; i <= num_usuarios; i++)); do
        nome_usuario="${nome_base}_${i}"
        if ! id "$nome_usuario" &>/dev/null; then
            # Cria o usuário com a senha padrão e força a alteração na primeira vez que fizer login
            sudo useradd -m -s /bin/bash "$nome_usuario"
            echo "$nome_usuario:$senha_padrao" | sudo chpasswd
            sudo chage -d 0 "$nome_usuario"
            echo "Usuário '$nome_usuario' criado com sucesso."
        else
            echo "O usuário '$nome_usuario' já existe."
        fi
    done
}

# Chama a função para criar os usuários
criar_usuarios
