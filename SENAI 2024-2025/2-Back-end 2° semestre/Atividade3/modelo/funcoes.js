/**********************************************************************************
 * Objetivo: 
 * 
 * Data: 06/09/2024
 * Data Final: 13/09/2024
 * Autor: Mohammad
 * Versão: 1.0 
 *********************************************************************************/

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//Exercício 01
function IMC(altura, peso){
    let alturaP = Number(String(altura).replace(',','.'))
    let pesoP = Number(String(peso).replace(',','.'))
    let imc = alturaP/ pesoP**2
    let status = false

    if(validarDados(alturaP, pesoP)){
        if(imc < 18.5){
            console.log('Abaixo do peso')
            status = true
        }else if(18.5 < imc < 24.9){
            console.log('Peso Normal')
            status = true
        }else if(25 < imc < 29.9){
            console.log('Acima do peso')
            status = true
        }else if(30 < imc < 34.9){
            console.log('Obesidade I')
            status = true
        }else if(35 < imc < 39.9){
            console.log('Obesidade II')
            status = true
        }else if(imc > 40){
            console.log('Obesidade III')
            status = true
        }
    }
    return status
}
//Exercício 02
function GerenciarNota
(nomeAluno, sexoAluno, nomeProf, sexoProf, nomeCurso, nomeDiciplina,notaP, notaS, notaT, notaQ){
    let nAluno = nomeAluno
    let sAluno = sexoAluno
    let nProf = nomeProf
    let sProf = sexoProf
    let nCurso = nomeCurso
    let nDiciplina = nomeDiciplina
    let nota1 = notaP
    let nota2 = notaS
    let nota3 = notaT
    let nota4 = notaQ

    let statusAluno
    let generoAluno
    let generoProf
    let exame
    let exameFinal

    let status = false

    if(!(validarTexto(nAluno, sAluno)) ||
        !(validarTexto(nProf, sProf)) ||
        !(validarTexto(nCurso, nDiciplina)) ||
        !(validarDados(nota1, nota2))||
        !(validarDados(nota3, nota4))
    ){
        console.log(`       **********ERROS NAS VALIDAÇÕES**********
        Validação nome do Aluno e Sexo: ${validarTexto(nAluno, sAluno)}
        Validação nome do Professor e Sexo: ${validarTexto(nProf, sProf)}
        Validação nome do Curso e da diciplina: ${validarTexto(nCurso, nDiciplina)}
        Validação nota 1 e 2: ${validarDados(nota1, nota2)}
        Validação nota 3 e 4: ${validarDados(nota3, nota4)}
        
        **********FIM DA MENSAGEM DE ERROS NAS VALIDAÇÕES**********`)
    }else{
        console.log('0 erros')
    }

    let media = (calcularNota(nota1, nota2, nota3, nota4))

    if(sAluno = 'F'){
        status = true
        generoAluno = 'A'
    }else if (sAluno = 'M'){
        status = true
        generoAluno = 'O'
    }else{
        console.log('Não foi colocado F e nem M no campo do aluno')
        status = false
    }

    if(sProf = 'F'){
        generoProf = 'Professora'
        status = true
    }else if (sProf = 'M'){
        generoProf = 'Professor'
        status = true
    }else{
        console.log('Não foi colocado F e nem M no campo mo campo do Professor')
        status = false
    }

    if(media >= 70){
        statusAluno = `APROVAD${generoAluno}`
        exame = 'Não foi nessecario fazer o exame'
        exameFinal = 'Não foi nessecario fazer o exame'
        status = true
    }else if(69 <= media >= 50){
        exame = exameRecupera(1)
        exameFinal = (exame + media) / 2
        validar1Dado(exameFinal)
        if (exameFinal >= 60){
            statusAluno = `APROVAD${generoAluno}`
        }else{
            statusAluno = `REPROVAD${generoAluno}`
        }
        status = true
    }else if(media <= 50){
        statusAluno = `REPROVAD${generoAluno}`
        exame = 'Não foi feito o exame, pela nota muito baixa'
        exameFinal = 'Não foi feito o exame, pela nota muito baixa'
        status = true
    }else{
        statusAluno = 'O correu um erro tente colocar as notas denovo'
        exameFinal = 'O correu um erro tente colocar as notas denovo'
        exame = 'O correu um erro tente colocar as notas denovo'
        status = false
    }

    console.log(`           
    ${generoAluno} alun${generoAluno.toLowerCase()} ${nAluno} foi ${statusAluno} na disciplina ${nDiciplina}.
    Curso: ${nCurso}
    ${generoProf}: ${nProf}
    Notas d${generoAluno.toLowerCase()} alun${generoAluno.toLowerCase()}: ${nota1}, ${nota2}, ${nota3}, ${nota4}, Nota do Exame: ${exame}
    Média Final: ${media}
    Média final do Exame: ${exameFinal}`
    )
}

function exameRecupera(pontaPe){
    entradaDeDados.question('Qual foi a nota do exame: ', function(notaExame){
        var exameR = notaExame
        validar1Dado(exameR)
        if(!(0<= exameR <= 100)){
            console.log('ERROR: a nota deve ir de 0 a 100')
        }
    })
    return exameR
}

function calcularNota(notaP, notaS, notaT, notaQ){
    let nota1 = notaP
    let nota2 = notaS
    let nota3 = notaT
    let nota4 = notaQ
    let media = false
    if(
        validarDados(nota1, nota2) ||
        validarDados(nota3, nota4)
    ){
        if(0 <= nota1 <= 100 && 0 <= nota2 <= 100 && 0 <= nota3 <= 100 && 0 <= nota4 <= 100){
            media = (nota1 + nota2 + nota3 + nota4)/4
        }else{
            console.log('ERROR: todas as notas devem ir de 0 a 100')
        } 
    }else{
        console.log('ERRO na validação da nota quando foi fazer a media')
        validarDados(nota1, nota2)
        validarDados(nota3, nota4)
    }
    
    return media
}

//Exercício 03
function CriarTabuadas(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){
    let tabuadaI = tabuadaInicial
    let tabuadaF = tabuadaFinal
    let contadorI = contadorInicial
    let contadorF = contadorFinal

    validarDados(tabuadaI, tabuadaF)
    validarDados(contadorI, contadorF)

    if(2 <= tabuadaI <= 200 && 2 <= tabuadaF <= 200 && 1 <= contadorI <= 50 && 1 <= contadorF <= 50){
        for (tabuadaI; tabuadaI <= tabuadaF; tabuadaI++) {
            tabuadaUnica(tabuadaI, contadorI, contadorF)
        }
    }else{
        console.log('Erro: os valores da tabuadas devem ser entre 2 e 200, e dos contadoes entre 1 e 50')
    }
}

function tabuadaUnica(tabuadaInicial, contadorInicial, contadorFinal){
    let tabuadaI = tabuadaInicial
    let contadorI = contadorInicial
    let contadorF = contadorFinal
    let resultado = 1
    let status = false
    console.log(`Tabuada do ${tabuadaI}`)
    for(contadorI; contadorI <= contadorF; contadorI++){
        resultado = tabuadaI * contadorI
        console.log(`${tabuadaI} X ${contadorI} = ${resultado}`)
        status = true
    }
    return status
}

//Exercício 04
function fatorial(numero){
    let numeroFatorial = parseInt(numero)
    let status = false
    let nunfatorial = 1

    if(validar1Dado(numeroFatorial)){
        if(numeroFatorial == 0){
            console.log('Não existe fatorial de 0')
        }else if(numeroFatorial == 1){
            console.log('Não é possível calcular o fatorial de 1 (por ser ele mesmo), precisa ser um número maior do que 1')
        }else{
            for(let contador = parseInt(numeroFatorial); contador >= 1; contador--){
            nunfatorial *= contador
            status = true
            }
            console.log(nunfatorial)
        }
    }
    
}

//Exercício 05
function geraNumeros(numeroInicial, numeroFinal, escolhaPergunta){
    let numeroI = Number(String(numeroInicial).replace(',','.'))
    let numeroF = Number(String(numeroFinal).replace(',','.'))
    let escolha = escolhaPergunta
    let status = false

    if(validarDadosPI(numeroI, numeroF)){
        if(0 <= numeroI <= 500 || 100 <= numeroI <= 1000){
            if(escolha == 1){
                if(numeroI % 2 == 0){
                    gerarListaNumeros(numeroI, numeroF)
                    numeroI++
                    numeroF--
                    gerarListaNumeros(numeroI, numeroF)
                }else{
                    gerarListaNumeros(numeroI, numeroF)
                    numeroI++
                    numeroF--
                    gerarListaNumeros(numeroI, numeroF)
                }                
            }else if(escolha == 2){
                if(numeroI % 2 == 0){
                    gerarListaNumeros(numeroI, numeroF)
                }else{
                    numeroI++
                    numeroF--
                    gerarListaNumeros(numeroI, numeroF)
                }
            }else if(escolha == 3){
                if(numeroI % 2 == 0){
                    numeroI++
                    numeroF--
                    gerarListaNumeros(numeroI, numeroF)
                }else{
                    gerarListaNumeros(numeroI, numeroF)
                }
            }else{
                
            }
        }
    }
}

function gerarListaNumeros(numeroInicial, numeroFinal){
    let contador = numeroInicial
    let numeroF = numeroFinal
    let status = false
    let contadorDeRepeticoes = 0
    while(contador <= parseInt(numeroF)){
        status = true
        console.log(contador)
        contador += 2
        contadorDeRepeticoes++
    }
    if(contador % 2 == 0){
        console.log('Quantidade de números encontrados pares: ', contadorDeRepeticoes)
    }else{
        console.log('Quantidade de números encontrados impares: ', contadorDeRepeticoes)
    }
    return status
}

//Validação de dados
function validarDados(numeroP, numeroS){
    let numero1 = Number(String(numeroP).replace(',','.'))
    let numero2 = Number(String(numeroS).replace(',','.'))
    let status = true

    if(numero1 == '' || numero2 == ''){
        console.log('É necessario todos os campos preencidos')
        status = false
    }else if(isNaN(numero1) || isNaN(numero2)){
        console.log(`   É necessario todos os campos serem numeros, 
        Os tipos são:
        Numero1: ${typeof numero1}
        Numero2: ${typeof numero2}
        Tão chegando como:
        Numero1: ${numero1}
        Numero2: ${numero2}
        `)
        status = false
    }
    return status
}
function validarTexto(textoP, textoS){
    let texto1 = String(textoP)
    let texto2 = String(textoS)
    let status = true

    if(texto1 == '' || texto2 == ''){
        console.log('É necessario todos os campos preencidos')
        status = false
    }else if(typeof texto1 === 'string' && isNaN(texto1) || 
    typeof texto2 === 'string' && isNaN(texto2)){
        console.log(`   É necessario que todos os campos não sejam numeros, 
        O tipos das entradas:
        texto1: ${typeof texto1}
        texto2: ${typeof texto2}
        As entradas:
        texto1: ${texto1}
        texto2: ${texto2}
        `)
        status = false
    }
    return status
}

function validarDadosPI(numeroP, numeroS){
    let numero1 = Number(String(numeroP).replace(',','.'))
    let numero2 = Number(String(numeroS).replace(',','.'))
    let status = true

    if(numero1 == '' || numero2 == ''){
        console.log('É necessario todos os campos preencidos')
        status = false
    }else if(isNaN(numero1) || isNaN(numero2)){
        console.log('É necessario todos os campos serem numeros')
        status = false
    }else if(numero1 > numero2){
        console.log('Valor inicial é maior que o final, não pode')
        status = false
    }
    return status
}
function validar1Dado(numeroP){
    let numero1 = Number(String(numeroP).replace(',','.'))
    let status = true

    if(numero1 == ''){
        console.log('É necessario o campo se preencido')
        status = false
    }else if(isNaN(numero1)){
        console.log(`   É necessario o campo ser um numero,
            ele está como: ${numero1}
            o tipo dele tá como: ${typeof numero1}`)
        status = false
    }
    return status
}



module.exports = {
    IMC,
    GerenciarNota,
    CriarTabuadas,
    fatorial,
    geraNumeros
}