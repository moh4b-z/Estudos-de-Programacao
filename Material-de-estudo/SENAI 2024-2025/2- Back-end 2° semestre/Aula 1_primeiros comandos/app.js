/**********************************************************************************
 * Objetivo: Conhecer os primeiros comandos do JS no node.js
 * Data 02/08/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/

console.log('oi')

var nome = 'Mohammad'
var valor1 = '10'
var valor2 = '20'
var resultado


console.log('Oi ' + nome)

/*******************************************************************************
 *  var   -> peritecriar um espaço em memmoria que poderá ser alterado duranteo
 *          projeto, devendo ser criado no escoó global da programação
 *  let   -> perite criar um espaço em memmoria que poderá ser alterado duranteo
 *          projeto, devendo ser criado no escopo local. Essa variál nasce e
 *          morre dentro daaquele bloco
 *  const -> perite criar um espaço em memmoria que não sofre alteração durante
 *          o projeto, pode ser usado no escopo global e local
*******************************************************************************/

console.log(typeof(nome))

resultado = parseInt(valor1) + parseInt(valor2)

console.log(resultado)

/********************************************************************************
 * parseInt  -> muda uma string para numero inteiro
 * parsefloa -> muda uma string para numero real
 * Namber()  -> muda uma string para numero real o inteiro, a propria aplicação 
 *             que decide
 ********************************************************************************/