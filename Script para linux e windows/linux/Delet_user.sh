#!/bin/bash

# Solicita o nome base para os usuários a serem deletados
read -p "Digite o nome base dos usuários a serem deletados: " nome_base

# Verifica se existem pastas (possíveis usuários) com o nome base fornecido e deleta
usuarios_encontrados=$(ls /home | grep "${nome_base}")
if [ -n "$usuarios_encontrados" ]; then
    echo "Usuários encontrados:"
    echo "$usuarios_encontrados"
    read -p "Tem certeza de que deseja deletar estes usuários? (s/n): " confirmacao
    if [ "$confirmacao" = "s" ]; then
        echo "Deletando usuários..."
        for usuario in $usuarios_encontrados; do
            sudo deluser --remove-home $usuario
        done
        echo "Usuários deletados com sucesso."
    else
        echo "Operação cancelada pelo usuário."
    fi
else
    echo "Nenhum usuário com o nome base '$nome_base' encontrado."
fi
