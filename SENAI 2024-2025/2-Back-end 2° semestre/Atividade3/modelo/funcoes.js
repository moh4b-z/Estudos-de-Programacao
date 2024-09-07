/**********************************************************************************
 * Objetivo: 
 * 
 * Data: 06/09/2024
 * Data Final: 13/09/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/


//Exercício 01
function IMC(altura, peso){
    let alturaP = Number(String(altura).replace(',','.'))
    let pesoP = Number(String(peso).replace(',','.'))
    let imc = alturaP/ pesoP**2
    let status = false

    if(validarDados(alturaP, pesoP)){
        if(imc < 18.5){
            console.log('Abaixo do peso')
            status = true
        }else if(18.5 < imc < 24.9){
            console.log('Peso Normal')
            status = true
        }else if(25 < imc < 29.9){
            console.log('Acima do peso')
            status = true
        }else if(30 < imc < 34.9){
            console.log('Obesidade I')
            status = true
        }else if(35 < imc < 39.9){
            console.log('Obesidade II')
            status = true
        }else if(imc > 40){
            console.log('Obesidade III')
            status = true
        }
    }
    return status
}
//Exercício 02

//Exercício 03

//Exercício 04

function fatorial(numero){
    let numeroFatorial = parseInt(numero)
    let status = false
    let nunfatorial = 1

    if(validar1Dado(numeroFatorial)){
        if(numeroFatorial == 0){
            console.log('Não existe fatorial de 0')
        }else if(numeroFatorial == 1){
            console.log('Não é possível calcular o fatorial de 1 (por ser ele mesmo), precisa ser um número maior do que 1')
        }else{
            for(let contador = parseInt(numeroFatorial); contador >= 1; contador--){
            nunfatorial *= contador
            status = true
            }
            console.log(nunfatorial)
        }
    }
    
}

//Exercício 05
function geraNumeros(numeroInicial, numeroFinal){
    let numeroI = Number(String(numeroInicial).replace(',','.'))
    let numeroF = Number(String(numeroFinal).replace(',','.'))
    let contadorPar
    let contadorImpar
    let status = false

    if(validarDadosPI(numeroI, numeroF)){
        if(0 <= numeroI <= 500 || 100 <= numeroI <= 1000){
            if(parseInt(numeroI) % 2 == 0){
                contadorPar = parseInt(numeroI)
                console.log(gerarListaNumeros(contadorPar, numeroF))

                contadorImpar = contadorPar + 1
                numeroF -= 1
                console.log(gerarListaNumeros(contadorImpar, numeroF))

                status = true
            }else{
                contadorImpar = parseInt(numeroI)
                gerarListaNumeros(contadorImpar, numeroF)
            }}
        }
    }

function gerarListaNumeros(numeroInicial, numeroFinal){
    let contador = numeroInicial
    let numeroF = numeroFinal
    let status = false
    let contadorDeRepeticoes = 1
    while(contador <= parseInt(numeroF)){
        status = true
        console.log(contador)
        contador += 2
        contadorDeRepeticoes++
    }
    console.log('Quantidade de números encontrados:', contadorDeRepeticoes)
    return status
}


//Validação de dados
function validarDados(numeroP, numeroS){
    let numero1 = Number(String(numeroP).replace(',','.'))
    let numero2 = Number(String(numeroS).replace(',','.'))
    let status = true

    if(numero1 == '' || numero2 == ''){
        console.log('É necessario todos os campos preencidos')
        status = false
    }else if(isNaN(numero1) || isNaN(numero2)){
        console.log('É necessario todos os campos serem numeros')
        status = false
    }
    return status
}

function validarDadosPI(numeroP, numeroS){
    let numero1 = Number(String(numeroP).replace(',','.'))
    let numero2 = Number(String(numeroS).replace(',','.'))
    let status = true

    if(numero1 == '' || numero2 == ''){
        console.log('É necessario todos os campos preencidos')
        status = false
    }else if(isNaN(numero1) || isNaN(numero2)){
        console.log('É necessario todos os campos serem numeros')
        status = false
    }else if(numero1 > numero2){
        console.log('Valor inicial é maior que o final, não pode')
        status = false
    }
    return status
}
function validar1Dado(numeroP){
    let numero1 = Number(String(numeroP).replace(',','.'))
    let status = true

    if(numero1 == ''){
        console.log('É necessario todos os campos preencidos')
        status = false
    }else if(isNaN(numero1)){
        console.log('É necessario todos os campos serem numeros')
        status = false
    }
    return status
}



module.exports = {
    IMC,
    fatorial,
    geraNumeros
}