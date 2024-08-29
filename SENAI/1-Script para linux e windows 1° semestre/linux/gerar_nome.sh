#!/bin/bash

# Array de nomes
nomes=("Mohammad" "Saddy" "João" "Maria" "Fernando" "Shirley" "Madu" "Milena" "Sophia" "Luana")

# Array de sobrenomes
sobrenomes=("Silva" "Salim" "Soares" "Assis" "Oliveira" "Gomes" "Guedes")

# Gerar nomes aleatórios combinando nomes e sobrenomes
for nome in "${nomes[@]}"; do
    for sobrenome in "${sobrenomes[@]}"; do
        nome_completo="$nome $sobrenome"
        echo "$nome_completo"
    done
done
