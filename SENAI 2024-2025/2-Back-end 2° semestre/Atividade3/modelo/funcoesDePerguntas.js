var missao3 = require('./funcoes')

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Essa função vai intercarlar com as funções das perguntas que possua vez vai para o outro arquivo
function escolha(pontape){
    comeca = pontape
    console.log(`1- IMC
        2- Gerencie as médias escolares
        3- Sistema para gerenciar o cálculo de uma tabuada
        4- Calcular o Fatorial
        5- Sistema que gerencie números pares e ímpares`)
        entradaDeDados.question('Escolha um dos números para continuar: ', function(valor){
            let escolha = 5

            if(escolha = 1){
                perguntasE1(escolha)
            }else if(escolha = 2){
                perguntasE2(escolha)
            }else if(escolha = 3){
                perguntasE3(escolha)
            }else if(escolha = 4){
                perguntasE4(escolha)
            }else if(escolha = 5){
                perguntasE5(escolha)
            }else{
                
            }
        })
}

// Pergunta 1
function perguntasE1(escolhaPergunta){
    let escolha = escolhaPergunta
    entradaDeDados.question('Digite a sua altura: ', function(valorAltura){
        let altura = valorAltura
        entradaDeDados.question('digite o seu peso: ', function(valorPeso){
            let peso = valorPeso
            missao3.IMC(altura, peso)
        })
    })
}

// Pergunta 2
/* 
sinto que compliquei muito mais do que o necessario
ovideo que assitir para fazer: https://www.youtube.com/watch?v=q28lfkBd9F4
new Promise(resolve => {qualque coisa}): cria uma nova promessa que encapsula a chamada assíncrona de entradaDeDados.question.

resolve: Função chamada quando a operação assíncrona é bem-sucedida.
reject: Função chamada quando a operação falha.
resolve => entradaDeDados.question(...): Essa parte é uma arrow function.
*/
async function perguntasE2() {
    let nomeAluno = await new Promise(resolve => entradaDeDados.question('Digite o nome do aluno: ', resolve))
    let nomeProf = await new Promise(resolve => entradaDeDados.question('Digite o nome do Professor: ', resolve))
    let sexoAluno = await new Promise(resolve => entradaDeDados.question('Digite o sexo do aluno (F/M): ', resolve))
    let sexoProf = await new Promise(resolve => entradaDeDados.question('Digite o sexo do Professor (F/M): ', resolve))
    let nomeCurso = await new Promise(resolve => entradaDeDados.question('Digite o nome do curso: ', resolve))
    let nomeDisciplina = await new Promise(resolve => entradaDeDados.question('Digite o nome da disciplina: ', resolve))
    let notaP = Number(await new Promise(resolve => entradaDeDados.question('Digite a nota 1: ', resolve)))
    let notaS = Number(await new Promise(resolve => entradaDeDados.question('Digite a nota 2: ', resolve)))
    let notaT = Number(await new Promise(resolve => entradaDeDados.question('Digite a nota 3: ', resolve)))
    let notaQ = Number(await new Promise(resolve => entradaDeDados.question('Digite a nota 4: ', resolve)))

    let media = missao3.calcularNota(notaP, notaS, notaT, notaQ)
    let exameR = 'Não foi necessário fazer exame'
    let exameFinal = 'Não foi necessário fazer'
    
    let generoAluno = missao3.verificarGenero(sexoAluno)
    let statusDoAluno = missao3.verificarNota(media, generoAluno)

    if (statusDoAluno == 'RECUPERAÇÃO') {
        exameR = Number(await new Promise(resolve => entradaDeDados.question('Qual foi a nota do exame: ', resolve)))
        if (!(exameR >= 0 && exameR <= 100)) {
            console.log('Erro: a nota do exame deve estar entre 0 e 100.')
        } else {
            exameFinal = (exameR + media) / 2
        }
    }
    if (typeof exameFinal === 'number'&& exameFinal >= 60){
        statusDoAluno === `APROVAD${generoAluno}`
    }else if(typeof exameFinal === 'number'&& exameFinal < 60){
        statusDoAluno = `REPROVAD${generoAluno}` 
    }

    let generoProf = missao3.verificarGenero(sexoProf)
    if (generoProf == 'A'){
        generoProf = 'Professora'
    }else if (generoProf == 'O'){
        generoProf = 'Professor'
    }
    
    missao3.boletim(nomeAluno, generoAluno, nomeProf, generoProf, nomeDisciplina, nomeCurso, notaP, notaS, notaT, notaQ, media, exameR, exameFinal, statusDoAluno);
}


// Pergunta 2.1
function perguntasE2_1(escolhaPergunta) {
    let escolha = escolhaPergunta
    entradaDeDados.question('Digite o nome do aluno: ', function(nAluno) {
        let nomeAluno = nAluno
        entradaDeDados.question('Digite o nome do Professor: ', function(nProf) {
            let nomeProf = nProf
            entradaDeDados.question('Digite o sexo do aluno: ', function(sAluno) {
                let sexoAluno = sAluno
                entradaDeDados.question('Digite o sexo do Professor: ', function(sProf) {
                    let sexoProf = sProf
                    entradaDeDados.question('Digite o nome do curso: ', function(nCurso) {
                        let nomeCurso = nCurso
                        entradaDeDados.question('Digite o nome da disciplina: ', function(nDiciplina) {
                            let nomeDisciplina = nDiciplina
                            entradaDeDados.question('Digite a nota 1: ', function(nota1) {
                                let notaP = nota1
                                entradaDeDados.question('Digite a nota 2: ', function(nota2) {
                                    let notaS = nota2
                                    entradaDeDados.question('Digite a nota 3: ', function(nota3) {
                                        let notaT = nota3
                                        entradaDeDados.question('Digite a nota 4: ', function(nota4) {
                                            let notaQ = nota4

                                            let media = missao3.calcularNota(notaP, notaS, notaT, notaQ)
                                            let exameR = 'Não foi necessário fazer exame'
                                            let exameFinal = 'Não foi necessário fazer'
                                            
                                            let generoAluno = missao3.verificarGenero(sexoAluno)
                                            let statusDoAluno = missao3.verificarNota(media, generoAluno)

                                            
                                            if (statusDoAluno == 'RECUPERAÇÃO') {
                                                entradaDeDados.question('Digite a nota do exame: ', function(valorDoExame) {
                                                    exameR = valorDoExame
                                                    if (!(exameR >= 0 && exameR <= 100)) {
                                                        console.log('Erro: a nota do exame deve estar entre 0 e 100.')
                                                    } else {
                                                        exameFinal = (exameR + media) / 2
                                                    }
                                                    if (exameFinal >= 60) {
                                                        statusDoAluno = `APROVAD${generoAluno}`
                                                    } else {
                                                        statusDoAluno = `REPROVAD${generoAluno}`
                                                    }

                                                    
                                                    let generoProf = missao3.verificarGenero(sexoProf)
                                                    generoProf = (generoProf == 'A') ? 'Professora' : 'Professor'

                                                    
                                                    missao3.boletim(nomeAluno, generoAluno, nomeProf, generoProf, nomeDisciplina, nomeCurso, notaP, notaS, notaT, notaQ, media, exameR, exameFinal, statusDoAluno)
                                                })
                                            } else {
                                                
                                                let generoProf = missao3.verificarGenero(sexoProf)
                                                generoProf = (generoProf == 'A') ? 'Professora' : 'Professor'

                                              
                                                missao3.boletim(nomeAluno, generoAluno, nomeProf, generoProf, nomeDisciplina, nomeCurso, notaP, notaS, notaT, notaQ, media, exameR, exameFinal, statusDoAluno)
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}



// Pergunta 2.2
function perguntasE2_2(escolhaPergunta) {
    let escolha = escolhaPergunta
    entradaDeDados.question('Digite o nome do aluno: ', function(nAluno) {
        let nomeAluno = nAluno
        entradaDeDados.question('Digite o nome do Professor: ', function(nProf) {
            let nomeProf = nProf
            entradaDeDados.question('Digite o sexo do aluno: ', function(sAluno) {
                let sexoAluno = sAluno
                entradaDeDados.question('Digite o sexo do Professor: ', function(sProf) {
                    let sexoProf = sProf
                    entradaDeDados.question('Digite o nome do curso: ', function(nCurso) {
                        let nomeCurso = nCurso
                        entradaDeDados.question('Digite o nome da disciplina: ', function(nDiciplina) {
                            let nomeDisciplina = nDiciplina
                            entradaDeDados.question('Digite a nota 1: ', function(nota1) {
                                let notaP = nota1
                                entradaDeDados.question('Digite a nota 2: ', function(nota2) {
                                    let notaS = nota2
                                    entradaDeDados.question('Digite a nota 3: ', function(nota3) {
                                        let notaT = nota3
                                        entradaDeDados.question('Digite a nota 4: ', function(nota4) {
                                            let notaQ = nota4

                                            let media = missao3.calcularNota(notaP, notaS, notaT, notaQ)
                                            if (media){}
                                            entradaDeDados.question('Digite a nota do exame: ', function(valorDoExame) {
                                                exameR = valorDoExame
                                                if (!(exameR >= 0 && exameR <= 100)) {
                                                    console.log('Erro: a nota do exame deve estar entre 0 e 100.')
                                                } else {
                                                    exameFinal = (exameR + media) / 2
                                                }
                                                if (exameFinal >= 60) {
                                                    statusDoAluno = `APROVAD${generoAluno}`
                                                } else {
                                                    statusDoAluno = `REPROVAD${generoAluno}`
                                                }

                                                
                                                let generoProf = missao3.verificarGenero(sexoProf)
                                                generoProf = (generoProf == 'A') ? 'Professora' : 'Professor'

                                                
                                                missao3.boletim(nomeAluno, generoAluno, nomeProf, generoProf, nomeDisciplina, nomeCurso, notaP, notaS, notaT, notaQ, media, exameR, exameFinal, statusDoAluno)
                                            })
                                           
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}




// Pergunta 3
function perguntasE3(escolhaPergunta){
    let escolha = escolhaPergunta
    entradaDeDados.question('Digite o numero Inicial da tabuada: ', function(tabuadaI){
        let tabuadaInicial = tabuadaI
        entradaDeDados.question('Digite o numero fianl da tabuada: ', function(tabuadaF){
            let tabuadaFinal = tabuadaF
            entradaDeDados.question('Digite o numero Inicial da tabuada: ', function(contadorI){
                let contadorInicial = contadorI
                entradaDeDados.question('Digite o numero fianl da tabuada: ', function(contadorF){
                    let contadorFinal = contadorF
                    missao3.CriarTabuadas(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)
                })
            })
        })
    })
}

// Pergunta 4
function perguntasE4(escolhaPergunta){
    let escolha = escolhaPergunta
    entradaDeDados.question('Digite o numero que você quer fazer fatorial: ', function(valorFatorial){
        let numero = valorFatorial
        missao3.fatorial(numero)
    })
}

// Pergunta 5
function perguntasE5(escolhaPergunta){
    let escolha = escolhaPergunta
    console.log(`1- Quero a lista dos pares e dos impares
    2- Quero a lista só dos pares
    3- Quero a lista só doia impares`)
    entradaDeDados.question('Escolha um dos numeros: ', function(escolhaPergunta){
        let escolha = escolhaPergunta
        entradaDeDados.question('Digite o numero inicial: ', function(numeroInicial){
            let numeroI = numeroInicial
            entradaDeDados.question('Digite o numero final: ', function(numeroFinal){
                let numeroF = numeroFinal
                if(escolha == 1){
                    missao3.geraNumeros(numeroI, numeroF, escolha)
                }else if(escolha == 2){
                    missao3.geraNumeros(numeroI, numeroF, escolha)
                }else if(escolha == 3){
                    missao3.geraNumeros(numeroI, numeroF, escolha)
                }else{

                }
            })
        })
    })
}


module.exports = {
    escolha,
    perguntasE1,
    perguntasE2,
    perguntasE3,
    perguntasE4,
    perguntasE5,
    perguntasE2_1

}