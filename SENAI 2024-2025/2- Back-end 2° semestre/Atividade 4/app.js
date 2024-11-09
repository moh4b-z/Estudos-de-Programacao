/*************************************************************************
Objetiv: API para manipular dados de estados e cidades
Data: 01/11/2024
Autor: Mohammmad
Versão: 1.0
************************************************************************/


/**
 * para criar uma API devemos instalae:
            npm install express --save   - Criar a API

            npm install cors --save    - Configura as permissões da API

            npm install body-parser --save   - Serve para manipular os dados do body da API
 */


const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


//Inicializa o express através do objeto do app
const app = express()

const estadosCidades = require('./module/functions.js')


// request - dados que chhega na API
// response - dados que saem da API
app.use((request, response, next) =>{

    // de onde vai vim a requesição
    response.header('Acces-Control-Allow-Origin', '*')
    // Permissão de aceso para liberar os verbos da requisição da API
    response.header('Acces-Control-Allow-Methods', 'GET')

    app.use(cors()) //ativando as configurações no cors

    next()
})

// boa pratica:   /v1/nome do projeto/...


// EndPoint para retonnar as siglas dos estados
app.get('/v1/estados-cidades/lista-esados/siglas', cors(), async function(request, response){
    let estadosCidades= require('./module/functions.js')

    let dadosEstados = estadosCidades.getListaDeEstados()

    if(dadosEstados){
        response.status(200)
        response.json(dadosEstados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})


app.get('/v1/estados-cidades/estado/:sigla', cors(), async function(request, response){

    let uf = request.params.sigla

    let dadosEstados = estadosCidades.getDadosEstado(uf)

    if(dadosEstados){
        response.status(200)
        response.json(dadosEstados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }

})


app.get('/v1/estados-cidades/capital-estado', cors(), async function(request, response){

    let uf = request.query.sigla

    let dadosEstados = estadosCidades.getCapitalEstado(uf)

    if(dadosEstados){
        response.status(200)
        response.json(dadosEstados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/estados-cidades/regiao-estado', cors(), async function(request, response){

    let uf = request.query.regiao

    let dadosEstados = estadosCidades.getEstadosRegiao(uf)

    if(dadosEstados){
        response.status(200)
        response.json(dadosEstados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/estados-cidades/lista-capital/pais', cors(), async function(request, response){

    let dadosEstados = estadosCidades.getCapitalPais()

    if(dadosEstados){
        response.status(200)
        response.json(dadosEstados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/estados-cidades/cidades-estado', cors(), async function(request, response){

    let uf = request.query.sigla

    let dadosEstados = estadosCidades.getCidades(uf)

    if(dadosEstados){
        response.status(200)
        response.json(dadosEstados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})


app.listen('8080', function(){
    console.log('API aguardando requisição ...')
})