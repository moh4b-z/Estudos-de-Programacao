/*************************************************************************
Objetiv: API para manipular dados de uma escola de informática “Lion School”
Data: 22/11/2024
Autor: Mohammmad
Versão: 1.0
************************************************************************/

// http://localhost:8080

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

const LionSchool = require('./module/functions.js')

app.use((request, response, next) =>{

    // de onde vai vim a requesição
    response.header('Acces-Control-Allow-Origin', '*')
    // Permissão de aceso para liberar os verbos da requisição da API
    response.header('Acces-Control-Allow-Methods', 'GET')

    app.use(cors()) //ativando as configurações no cors

    next()
})

// boa pratica:   /v1/nome do projeto/...


app.get('/v1/lion-school/cursos', cors(), async function(request, response){

    let dados = LionSchool.cursosLista()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/lion-school/alunos', cors(), async function(request, response){

    let dados = LionSchool.alunosLista()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/lion-school/alunos/:matricula', cors(), async function(request, response){

    let uf = request.params.matricula

    let dados = LionSchool.infoAluno(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }

})

app.get('/v1/lion-school/alunos/cursos/:curso', cors(), async function(request, response){

    let uf = request.params.curso

    let dados = LionSchool.alunosCurso(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/lion-school/alunos/filtro', cors(), async function(request, response){
    //?status={
    let uf = request.query.status

    let dados = LionSchool.statusCurso(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})


//http://localhost:8080/v1/lion-school/alunos/filtro?curso=ds&status=Aprovado
app.get('/v1/lion-school/alunos/filtro', cors(), async function(request, response){
    let curso = request.query.curso
    let status = request.query.status
    let dados = LionSchool.alunosStatusCurso(curso, status)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})


//http://localhost:8080/v1/lion-school/alunos/filtro?curso=ds&ano-conclusao=2021
app.get('/v1/lion-school/alunos/filtro', cors(), async function(request, response){

    let curso = request.query.curso
    let aonC = request.query.ano_conclusao

    let dados = LionSchool.alunosCursoDeAno(curso, aonC)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})


app.listen('8080', function(){
    console.log('API aguardando requisição ...')
})