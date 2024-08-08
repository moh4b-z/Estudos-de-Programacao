/**********************************************************************************
 * Objetivo: Manipular entrada e saísa de dados plelo terminal
 * Data 02/08/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/

// Import da biblioteca readline para interação de entradade de dados
// no terminal
var readline = require('readline')


//cria um objeto de entrada de dados pelo terminal (para o usuário)
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('digite o seu nome: ', function(nome){
    let nomeUsuario = nome

    entradaDeDados.question('digite o seu email: ', function(email){
        let emailUsuario = email

        entradaDeDados.question('digite o seu curso: ', function(curso){
            let cursoUsuario = curso
            
            console.log(`O nome é do usuario é: ${nomeUsuario}; O email é do usuario é: ${emailUsuario}; O curso é do usuario é: ${cursoUsuario}`)

            entradaDeDados.close()
        })
    })
})

