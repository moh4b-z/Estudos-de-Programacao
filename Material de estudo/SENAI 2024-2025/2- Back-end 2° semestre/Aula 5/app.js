var Numeros = require('./modulo/funcoes')
var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDeDados.question('digite o numero inicial: ', function(valor1){
    let numero1 = String(valor1).replace(',','.')
    entradaDeDados.question('digite o numero ultimo: ', function(valor2){
        let numero2 = String(valor2).replace(',','.')
        if(!Numeros.geraNovoNumeros(numero1, numero2)){
            console.log('Não foi possivel ealizar a requisição')
        }
    })
})