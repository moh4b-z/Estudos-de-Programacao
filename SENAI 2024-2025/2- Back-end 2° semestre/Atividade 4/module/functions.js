var arr = require('./estados_cidades.js')
const listaDeEstados = arr.listaDeEstados.estados

function getListaDeEstados(){
    let objetoRetorno = {uf: [], quantidade: 0}
    let quantidade = 0
    
    listaDeEstados.forEach(function(item){
        objetoRetorno.uf.push(item.sigla)
        quantidade++
    })
    objetoRetorno.quantidade = quantidade

    return objetoRetorno.quantidade > 1 ? objetoRetorno : false
}
function getDadosEstado(siglaDoEstado){
    let sigla = siglaDoEstado
    let objetoRetorno = {uf: sigla, descricao: '', capital: '', regiao: ''}

    let objeto = listaDeEstados.find(objeto => objeto.sigla === sigla)
    if(objeto){
        objetoRetorno.descricao = objeto.nome
        objetoRetorno.capital = objeto.capital
        objetoRetorno.regiao = objeto.regiao
        return objetoRetorno
    }else{
        return false
    }

}
function getCapitalEstado(siglaDoEstado){
    let sigla = siglaDoEstado

    let objetoRetorno = {uf: sigla, descricao: '', capital: ''}

    let objeto = listaDeEstados.find(objeto => objeto.sigla === sigla)

    if(objeto){
        objetoRetorno.descricao = objeto.nome
        objetoRetorno.capital = objeto.capital
        return objetoRetorno
    }else{
        return false
    }
}
function getEstadosRegiao(regiaoDoEstado){
    let regiao = regiaoDoEstado
    let objetoRetorno = {uf: regiao, estados: []}
    
    listaDeEstados.forEach(function(item){
        if(item.regiao == regiao){
            let estado = {uf: item.sigla, descricao: item.nome}
            objetoRetorno.estados.push(estado)
        }
    })
    return objetoRetorno.estados.length > 0 ? objetoRetorno : false
}
function getCapitalPais(){
    let objetoRetorno = {capitais: []}
    

    listaDeEstados.forEach(function(item){
        if(item.capital_pais){
            let objeto = {  capital_atual: item.capital_pais.capital, 
                uf: item.sigla, 
                descricao: item.nome, 
                capital: item.capital, 
                regiao: item.regiao, 
                capital_pais_ano_inicio: item.capital_pais.ano_inicio, 
                capital_pais_ano_fim: item.capital_pais.ano_fim
            }
            objetoRetorno.capitais.push(objeto)
        }
    })
    return objetoRetorno.capitais.length > 0 ? objetoRetorno : false
}
function getCidades(siglaDoEstado){
    let sigla = siglaDoEstado
    let objetoRetorno = {uf: sigla, descricao: '', quantidade_cidades: 0, cidades: []}
    let quantidade = 0

    listaDeEstados.forEach(function(item){
        if(item.sigla == sigla){
            objetoRetorno.descricao = item.nome
            item.cidades.forEach(function(itemCidade){
                objetoRetorno.cidades.push(itemCidade.nome)
                quantidade++
            })
        }
    })

    objetoRetorno.quantidade_cidades = quantidade
    return objetoRetorno.cidades.length > 0 ? objetoRetorno : false
}

// console.log(getCapitalPais())
// console.log(getListaDeEstados(''))

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}