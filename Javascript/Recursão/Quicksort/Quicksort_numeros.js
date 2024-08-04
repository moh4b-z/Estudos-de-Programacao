function ordenar(lista) {
    let numerosDeElementos = lista.length

    if (numerosDeElementos <= 1) {
        return (lista)
    }

    let pivo = lista[0]

    let maiorQuePivo = []
    let menorQuePivo = []

    let listaOrdenada = []

    for (let i = 1; i < numerosDeElementos; i++){
        let item = lista[i];
        if(item > pivo){
            maiorQuePivo.push(item)
        }else{
            menorQuePivo.push(item)
        }

    }

    maiorQuePivo = ordenar(maiorQuePivo)
    menorQuePivo = ordenar(menorQuePivo)

    listaOrdenada = [...menorQuePivo, pivo, ...maiorQuePivo];

    return listaOrdenada
}



let grupo = [4, 7, 6,5, 3, 2, 1, 99, 6, 17]

grupo = ordenar(grupo)


console.log(grupo)