/* *********************************************************************
* Objetivo: Obter uma lista de estados
* Data: 29/08/2022  
* Autor: Marcel
* **********************************************************************/
//Simulando o resultado de uma API 


// meu professor fez a simulação do resultado da API pelo JS, mais predeiri transformar em .json para colocar melho no github



const fs = require('fs')
const path = require('path')

const jsonData = fs.readFileSync(path.join(__dirname, 'estados_cidades.json'), 'utf8')
const listaDeEstados = JSON.parse(jsonData)

module.exports = { listaDeEstados }
