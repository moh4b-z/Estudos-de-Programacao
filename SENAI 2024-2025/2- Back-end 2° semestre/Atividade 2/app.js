/**********************************************************************************
 * Objetivo: calculadora
 * Data 16/08/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('digite o primeiro numero: ', function(valor1){
    let Pnumero1 = valor1
    entradaDeDados.question('digite o segundo numero: ', function(valor2){
        let Pnumero2 = valor2
        if(Pnumero1 == '' || Pnumero2 == ''){
            console.log('ERROR: É   OBRIGATÓRIO A ENTRADA DE TODOS OS DADOS')
        }else{
            let Snumero1 = Pnumero1.replace(',', '.')
            let Snumero2 = Pnumero2.replace(',', '.')
            let numero1 = parseFloat(Snumero1)
            let numero2 = parseFloat(Snumero2)

            if(isNaN(numero1)|| isNaN(numero2)){
                console.log('ERRO: TODOS OS DADOS PRECISAM SER NUMEROS')
            }else{
                console.log(`Operações:
                1- soma
                2- subtração
                3- multiplicação
                4- divisão`)
                entradaDeDados.question('digite o numero da operação que você quer: ', function(valor){
                    let operacao = valor
                    let resposta

                    if (operacao == 1){
                        resposta = numero1 + numero2
                        console.log(resposta.toFixed(2))
                    }else if(operacao == 2){
                        resposta = numero1 - numero2
                        console.log(resposta.toFixed(2))
                    }else if(operacao == 3){
                        resposta = numero1 * numero2
                        console.log(resposta.toFixed(2))
                    }else if(operacao == 4){
                        if (numero2 === 0){
                            console.log('ERRO: NÃO É POSSIVEL FAZER DIVISÃO POR 0')
                        }else{
                            resposta = numero1 / numero2
                            if (resposta > resposta.toFixed(2) && resposta > 0 && resposta < 1){
                                console.log(resposta.toFixed(10))
                            }else{
                            console.log(resposta.toFixed(2))
                            }

                        }
                    }else{
                        console.log('ERRO: É OBRIGATORIO COLOCAR UMAS DAS ESCOLHAS 1, 2, 3 OU 4')
                    }
                })
            }
        }
    })
})