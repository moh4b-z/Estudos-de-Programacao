/**********************************************************************************
 * Objetivo: manipular dados usando arry e JSON
 * Data 27/09/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/


function comandosasicos(){
    let nomes = ["José","Maria","João", "Luiz"]
    console.log(nomes)
    console.table(nomes)
    console.log(nomes[1])
    console.log(typeof(nomes[1]))

    //

    let listaDeDiciplina = []
    
    listaDeDiciplina[0] = 'Banco de dados'
    listaDeDiciplina[1] = 'Front-End'
    listaDeDiciplina[2] = 'Lógica de progamção'
    listaDeDiciplina[3] = 'Back-End'
    listaDeDiciplina[4] = 'Projetos'
    console.table(listaDeDiciplina)

    //
    let listaDeProdutos = []
    listaDeProdutos.push('HD')
    listaDeProdutos.push('Mouse', 'Teclado')
    listaDeProdutos.push('placa de video', 'Caixa de som')
    console.table(listaDeProdutos)
    //adiciona no começo
    listaDeProdutos.unshift('Placa mãe')
    console.table(listaDeProdutos)
    //tira do começo
    listaDeProdutos.shift()
    console.table(listaDeProdutos)
    // tira do final
    listaDeProdutos.pop()
    console.table(listaDeProdutos)
    //primeiro é o incix que vai começa a deletar a quantidade de elementos apartide do primeiro indice

    
    listaDeProdutos.splice(3,2)
    console.table(listaDeProdutos)
}

comandosasicos()