/**********************************************************************************
 * Objetivo: Realizar calculos referente as quatro operações matemáticas
 * Data 30/08/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/

var calculos = require('./modulo/calculos')

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDeDados.question('digite o primeiro numero: ', function(valor1){
    let numero1 = String(valor1).replace(',','.')
    entradaDeDados.question('digite o segundo numero: ', function(valor2){
        let numero2 = String(valor2).replace(',','.')
        entradaDeDados.question('Escolha uma operação [SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR]: ', function(operacao){
            let tipoCalculo = operacao
            let resultado

            if(numero1 == '' || numero2 == '' || tipoCalculo == ''){
                console.log('ERROR: É OBRIGATÓRIO A ENTRADA DE TODOS OS DADOS')
            }else if(isNaN(numero1) || isNaN(numero2)){
                console.log('ERRO: TODOS OS DADOS DE VALORES PRECISAM SER NUMEROS')
            }else{
                calculos.calculadora(numero1, numero2, tipoCalculo)
            }
            if (resultado){
                console.log(resultado.toFixed(5))
            }
    
        })
    })
})