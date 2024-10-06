/**********************************************************************************
 * Objetivo: manipular dados usando arry e JSON
 * Data:' 27/09/2024 e 04/10/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/


function comandosBasicos(){
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

function percoreArray(){
    let listaDeclientes = []
    listaDeclientes.push(
                            'José da Silva',
                            'Carlos André',
                            'Antonio',
                            'Ana Maria',
                            'Ricardo da Silva',
                            'Maria da Silva',
                            'João Carlos'
                        )
    let contador = 0
    while(contador < listaDeclientes.length){
        console.log(listaDeclientes[contador])
        contador++
    }
    console.log('**************FOR******************')
    for(let contador = 0; contador < listaDeclientes.length; contador++){console.log(listaDeclientes[contador])}

    //FOREACH
    console.log('**************FOREACH******************')
    listaDeclientes.forEach(function(item){
        console.log(item)
    })
    listaDeclientes.forEach(function(item, index){
        console.log(item)
        console.log(index)
    })
}

function filtraProdutos(nomeProduto){
    let produto = String(nomeProduto).toUpperCase()
    let status = false
    listaDeProdutos = []
    listaDeProdutos.push(
                            'HD', 
                            'Mouse', 
                            'Teclado', 
                            'placa de video', 
                            'Caixa de som', 
                            'Banco de dados',
                            'Front-End', 
                            'Lógica de progamção', 
                            'Back-End', 
                            'Projetos'
                        )
    // listaDeProdutos.forEach(function(item){
    //     if(produto == String(item).toUpperCase()){
    //         status = true
    //     }
    // })
    // listaDeProdutos.forEach(function(item){
    //     if(String(item).toUpperCase().includes(produto)){
    //         status = true
    //     }
    // })

    // listaDeProdutos.forEach(function(item){
    //     if((String(item).toUpperCase().indexOf(produto)) >= 0){
    //         status = true
    //     }
    // })
    return status
}
function filtraProdutosIndice(nomeProduto, indice){
    let produto = nomeProduto
    let indiceQ = indice
    let status = false
    listaDeProdutos = []
    listaDeProdutos.push(
                            'HD', 
                            'Mouse', 
                            'Teclado', 
                            'placa de video', 
                            'Caixa de som', 
                            'Banco de dados',
                            'Front-End', 
                            'Lógica de progamção', 
                            'Back-End', 
                            'Projetos'
                        )
    listaDeProdutos.forEach(function(item, indicePo){
        if(indicePo >= indiceQ){
            if(produto == item){
                return true
            }
        }
    })
    return status
}
// console.log(filtraProdutos('Front-End', 7))
function conceitoJSON(){
    let cliente = {nome:'José', telefone:'123456', email:'jose@gmail.com'}
    // console.log(cliente)
    let cliente2 = {}
    cliente2.nome = 'Maria'
    cliente2.telefone = '123466'
    cliente2.email = 'maria@gmail.com'

    let cliente3 = {nome:'João', telefone:'123456', email:'joao@gmail.com'}
    listaDeclientes = [cliente, cliente2, cliente3]
    listaDeclientes.forEach(function(item){
        console.log(item.nome)
    })
}
function cadastroProduto(){
    let listaMarca = [
                        {nome:'DELL Tecnologia SA', nomeFantasia: 'Dell', telefone: '123456', email:'dell@compras.com.br'},
                        {nome:'ReDragon Tecnologia SA', nomeFantasia: 'ReDragon', telefone: '1345536', email:'Redragon@compras.com.br'},
                        {nome:'Microsoft Tecnologia SA', nomeFantasia: 'Microsoft', telefone: '1455536', email:'microsoft@compras.com.br'},
                        {nome:'Apple Tecnologia SA', nomeFantasia: 'Apple', telefone: '234466', email:'apple@compras.com.br'}
                    ]
    let listaCor = [
                        {nome: 'Branca', hexadecimal:'#ffffff'},
                        {nome: 'Preto', hexadecimal:'#000000'},
                        {nome: 'Cinza', hexadecimal:'#97999c'},
                        {nome: 'Azul', hexadecimal:'#0344a6'},
                        {nome: 'Rosa', hexadecimal:'#e302d0'},
                    ]
    let listaCategoria = [
                            {nome: 'Periféricos'},
                            {nome: 'Hardwre'},
                            {nome: 'Games'},
                            {nome: 'Computadoes'},
                            {nome: 'Axessórios'}
                        ]

    let listaDeProdutos = [
                            {
                                id: 1, 
                                nome:'Mouse', 
                                preco:'dd', 
                                descricao:'Mouse com fio', 
                                marca: {
                                            nome: listaMarca[1].nome,
                                            nomeCompleto: listaMarca[1].nomeFantasia
                                        }, 
                                quantidade: 50, 
                                cor: listaCor, 
                                categoria: [listaCategoria[0].nome,
                                            listaCategoria[4].nome]
                            }
                        ]
    console.log(produto)
}
cadastroProduto()