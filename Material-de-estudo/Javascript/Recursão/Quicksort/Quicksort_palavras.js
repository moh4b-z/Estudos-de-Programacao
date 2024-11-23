/*************************************************************************
 * Função ordenarPalavras:
 * Caso base: Se o array palavras tem 0 ou 1 elemento, ele já está ordenado 
   e é retornado como está.
 * Dividir a lista ao meio: A lista é dividida em duas sublistas, esquerda 
   e direita, usando o método slice.
 * Ordenar as duas metades: mergeSort é chamado recursivamente em ambas as 
   metades para ordená-las.
 * Mesclar as duas metades ordenadas: A função merge é chamada para 
   combinar as duas sublistas ordenadas em uma lista ordenada única.

 * Função mesclar:
 * Inicialização: Dois ponteiros, i e j, são inicializados para percorrer 
   as listas esquerda e direita, respectivamente.
 * Mesclar as duas listas: Enquanto houver elementos em ambas as listas, 
   o menor elemento de esquerda ou direita é adicionado ao resultado e o 
   ponteiro correspondente é incrementado.
 * Adicionar os elementos restantes: Após o loop principal, quaisquer 
   elementos restantes em esquerda ou direita são adicionados ao resultado.
 * Retornar o resultado: A lista mesclada e ordenada é retornada.
 *************************************************************************/




function ordenarPalavras(palavras) {
    // Caso base: uma lista com 0 ou 1 elementos já está ordenada
    if (palavras.length <= 1) {
        return palavras;
    }

    // Dividir a lista ao meio
    let meio = Math.floor(palavras.length / 2);
    let esquerda = palavras.slice(0, meio);
    let direita = palavras.slice(meio);

    // Ordenar as duas metades
    esquerda = ordenarPalavras(esquerda);
    direita = ordenarPalavras(direita);

    // Mesclar as duas metades ordenadas
    return mesclar(esquerda, direita);
}

function mesclar(esquerda, direita) {
    let resultado = [];
    let i = 0;
    let j = 0;

    // Mesclar as duas listas enquanto houver elementos em ambas
    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] < direita[j]) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }

    // Adicionar os elementos restantes de esquerda, se houver
    while (i < esquerda.length) {
        resultado.push(esquerda[i]);
        i++;
    }

    // Adicionar os elementos restantes de direita, se houver
    while (j < direita.length) {
        resultado.push(direita[j]);
        j++;
    }

    return resultado;
}

// Exemplo de uso
let palavras = ["banana", "abacaxi", "uva", "laranja", "maçã"];
let palavrasOrdenadas = ordenarPalavras(palavras);
console.log(palavrasOrdenadas); // ["abacaxi", "banana", "laranja", "maçã", "uva"]
