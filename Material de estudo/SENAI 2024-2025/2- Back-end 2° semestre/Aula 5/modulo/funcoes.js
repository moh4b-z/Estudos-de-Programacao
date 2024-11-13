/**********************************************************************************
 * Objetivo: Aquivos responsável pela criação de tipo de funções e estrutura de 
 * repetição
 * Data 06/09/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/

function geraNumeros(numeroInicial, numeroFinal){
    let numeroI = Number(String(numeroInicial).replace(',','.'))
    let numeroF = Number(String(numeroFinal).replace(',','.'))
    let contador
    let status = false
    if (validarDados(numeroI, numeroF)){
        contador = parseInt(numeroI)
        while(contador <= parseInt(numeroF)){
            status = true
            console.log(contador)
            contador++
        }
    }
    return status
}

//Arrow function
const geraNovoNumeros = (numeroInicial, numeroFinal) =>{
    let numeroI = Number(String(numeroInicial).replace(',','.'))
    let numeroF = Number(String(numeroFinal).replace(',','.'))
    let status = false
    if(validarDados(numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= numeroF; contador++){
            console.log(contador)
            status = true
        }
    }
}

//função anonima
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = Number(String(numeroInicial).replace(',','.'))
    let numeroF = Number(String(numeroFinal).replace(',','.'))
    let status = true

    if(numeroI == '' || numeroF == ''){
        console.log('É necessario todos os campos preencidos')
        status = false
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        console.log('É necessario todos os campos serem numeros')
        status = false
    }else if(numeroI > numeroF){
        console.log('Valor inicial é maior que o final')
        status = false
    }
    return status
}

module.exports = {
    geraNumeros,
    geraNovoNumeros
}