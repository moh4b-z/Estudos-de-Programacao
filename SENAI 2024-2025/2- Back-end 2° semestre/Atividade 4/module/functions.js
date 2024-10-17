


function getListaDeEstados(array){
    let listaDeEstados = array
    let objetoRetorno = {uf: [], quantidade: 0}
    let quantidade = 0

    listaDeEstados.forEach(function(item){
        objetoRetorno.uf.push(item.sigla)
        quantidade++
        objetoRetorno.quantidade = quantidade
    })
    return objetoRetorno
}

function getDadosEstado(array, siglaDoEstado){
    let listaDeEstados = array
    let sigla = siglaDoEstado
    let objetoRetorno = {uf: sigla, descricao: '', capital: '', regiao: ''}

    let objeto = listaDeEstados.find(objeto => objeto.sigla === sigla)

    objetoRetorno.descricao = objeto.nome
    objetoRetorno.capital = objeto.capital
    objetoRetorno.regiao = objeto.regiao

    return objetoRetorno
}
function getCapitalEstado(array, siglaDoEstado){
    let listaDeEstados = array
    let sigla = siglaDoEstado
}
function getEstadosRegiao(array, siglaDoEstado){
    let listaDeEstados = array
    let sigla = siglaDoEstado
    
}
function getCapitalPais(array){
    let listaDeEstados = arry
    
}
function getCidades(array, siglaDoEstado){
    let listaDeEstados = array
    let sigla = siglaDoEstado
    
}
