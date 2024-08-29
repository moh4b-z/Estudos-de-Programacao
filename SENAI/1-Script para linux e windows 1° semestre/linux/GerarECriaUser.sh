#!/bin/bash

#deve esetar errado

# Arrays de nomes e sobrenomes
nomes=("Mohammad" "Saddy" "João" "Maria" "Fernando" "Shirley" "Madu" "Milena" "Sophia" "Luana")
sobrenomes=("Silva" "Salim" "Soares" "Assis" "Oliveira" "Gomes" "Guedes")

# Solicitar o número de usuários a serem criados
read -p "Digite o número de usuários a serem criados: " num_usuarios

# Definir senha padrão
senha_padrao="senai127"

# Função para gerar nome aleatório único
function gerar_nome_unico() {
    local indice_nome=$((RANDOM % ${#nomes[@]}))
    local indice_sobrenome=$((RANDOM % ${#sobrenomes[@]}))
    local nome="${nomes[$indice_nome]} ${sobrenomes[$indice_sobrenome]}"
    echo "$nome"
}

# Array para armazenar nomes únicos gerados
declare -a nomes_gerados

# Loop para criar usuários
for ((i = 1; i <= num_usuarios; i++)); do
    # Gerar nome único
    nome_completo=$(gerar_nome_unico)
    
    # Verificar se o nome já foi usado
    while [[ " ${nomes_gerados[@]} " =~ " ${nome_completo} " ]]; do
        nome_completo=$(gerar_nome_unico)
    done

    # Adicionar nome à lista de nomes gerados
    nomes_gerados+=("$nome_completo")

    # Criar usuário com nome único
    nome_usuario="${nome_completo// /_}"
    if ! id "$nome_usuario" &>/dev/null; then
        useradd -m -s /bin/bash "$nome_usuario"
        echo "$nome_usuario:$senha_padrao" | chpasswd
        echo "Usuário '$nome_usuario' criado com sucesso."
    else
        echo "O usuário '$nome_usuario' já existe."
    fi
done
