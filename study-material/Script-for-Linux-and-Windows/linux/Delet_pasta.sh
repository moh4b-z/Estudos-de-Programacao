#!/bin/bash

# Solicita o nome base para as pastas a serem deletadas
read -p "Digite o nome base das pastas a serem deletadas: " nome_base

# Verifica se existem pastas com o nome base fornecido e deleta
pastas_encontradas=$(find . -maxdepth 1 -type d -name "${nome_base}*")
if [ -n "$pastas_encontradas" ]; then
    echo "Pastas encontradas:"
    echo "$pastas_encontradas"
    read -p "Tem certeza de que deseja deletar estas pastas? (s/n): " confirmacao
    if [ "$confirmacao" = "s" ]; then
        echo "Deletando pastas..."
        rm -r $pastas_encontradas
        echo "Pastas deletadas com sucesso."
    else
        echo "Operação cancelada pelo usuário."
    fi
else
    echo "Nenhuma pasta com o nome base '$nome_base' encontrada."
fi
