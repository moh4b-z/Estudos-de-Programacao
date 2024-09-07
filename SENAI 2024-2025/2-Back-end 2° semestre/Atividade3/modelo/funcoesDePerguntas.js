var missao3 = require('./funcoes')

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function escolha(pontape){
    comeca = pontape
    console.log(`1- IMC
        2- Gerencie as médias escolares
        3- Sistema para gerenciar o cálculo de uma tabuada
        4- Calcular o Fatorial
        5- Sistema que gerencie números pares e ímpares`)
        entradaDeDados.question('Escolha um dos números para continuar: ', function(valor){
            let escolha = valor

            if(escolha = 1){
                perguntasE1(escolha)
            }else if(escolha = 2){
                perguntasE2(escolha)
            }else if(escolha = 3){
                perguntasE3(escolha)
            }else if(escolha = 4){
                perguntasE4(escolha)
            }else if(escolha = 5){
                perguntasE5(escolha)
            }else{
                
            }
        })
}



function perguntasE1(escolhaPergunta){
    let escolha = escolhaPergunta
    entradaDeDados.question('Digite a sua altura: ', function(valorAltura){
        let altura = valorAltura
        entradaDeDados.question('digite o seu peso: ', function(valorPeso){
            let peso = valorPeso
            missao3.IMC(altura, peso)
        })
    })
}

function perguntasE2(escolhaPergunta){
    let escolha = escolhaPergunta
}
function perguntasE3(escolhaPergunta){
    let escolha = escolhaPergunta
}
function perguntasE4(escolhaPergunta){
    let escolha = escolhaPergunta
    entradaDeDados.question('Digite o numero que você quer fazer fatorial: ', function(valorFatorial){
        let numero = valorFatorial
        missao3.fatorial(numero)
    })
}
function perguntasE5(escolhaPergunta){
    let escolha = escolhaPergunta
}


module.exports = {
    escolha
}