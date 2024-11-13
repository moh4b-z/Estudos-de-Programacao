/**********************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calculos matemáticos
 * Data 30/08/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/
function calculadora(valor1, valor2, operacao){
    let numero1 = valor1
    let numero2 = valor2
    let tipoCalculo = operacao
    let resultado
                if(tipoCalculo.toUpperCase() == 'SOMAR'){
                    resultado = Number(numero1) + Number(numero2)
                }else if(tipoCalculo.toUpperCase() == 'SUBTRAIR'){
                    resultado = Number(numero1) - Number(numero2)
                }else if(tipoCalculo.toUpperCase() == 'MULTIPLICAR'){
                    resultado = Number(numero1) * Number(numero2)
                }else if(tipoCalculo.toUpperCase() == 'DIVIDIR'){
                    if (numero2 == 0){
                        console.log('ERRO: NÃO É POSSIVEL FAZER DIVISÃO POR 0')
                    }else{
                        resultado = Number(numero1) / Number(numero2)
                    }
                }else {
                    console.log('ERRO: A OPERAÇÃO ESCOLHIDA É INVALIDA')
                }
    if (typeof(resultado) == 'number'){
        return Number(resultado)
    }else{
        return false
    }
}
module.exports = {
    calculadora
}