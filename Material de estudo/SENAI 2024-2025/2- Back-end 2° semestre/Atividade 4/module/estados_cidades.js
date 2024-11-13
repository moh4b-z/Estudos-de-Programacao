const fs = require('fs')
const path = require('path')

let listaDeEstados

try {
    const data = fs.readFileSync(path.join(__dirname, 'estados_cidades.json'), 'utf-8');
    listaDeEstados = JSON.parse(data)
} catch (error) {
    console.error("Erro ao ler o arquivo estados_cidades.json:", error)
    listaDeEstados = { estados: [] } // Retorna um objeto vazio em caso de erro
}

module.exports = { listaDeEstados }
