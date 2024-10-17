var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('digite o nome do aluno: ', function(nome){
    let aluno = nome
    entradaDeDados.question('digite o seu curso: ', function(curso){
        let nomeCurso = curso
        entradaDeDados.question('digite a nota1: ', function(nota1){
            let valor1 = nota1
            entradaDeDados.question('digite a nota2: ', function(nota2){
                let valor2 = nota2
                entradaDeDados.question('digite a nota3: ', function(nota3){
                    let valor3 = nota3
                    entradaDeDados.question('digite a nota4: ', function(nota4){
                        let valor4 = nota4
                        let media
                        let situacao

                        if(aluno == '' || nomeCurso == '' || valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
                            console.log('ERROR: É   OBRIGATOÓRIO A ENTRADA DE TODOS OS DADOS')
                        }else{
                            if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){
                                console.log('ERRO: TODOS AS NOTAS PRECISA SER NUMERIOS')
                            }else{
                                if( valor1 < 0|| valor1 >10 || valor2 < 0|| valor2 >10 || valor3 < 0|| valor3 >10 || valor4 < 0|| valor4 >10 ){
                                    console.log('ERRO: SÓ É PERMITIDO VALORES DE 0 A 10')
                                }else{
                                    media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) /4
                                    if (media >= 7){
                                        situacao = 'APROVADO'
                                    }else if(media < 7 && media > 5){
                                        situacao = 'RECUPERAÇÃO'
                                    }else{
                                        situacao = 'REPROVADO'
                                    }
                                }
                                console.log(`               ***BOLETIM***
                                            NOME: ${aluno}
                                            CURSO: ${nomeCurso}
                                            NOTAS: ${valor1}, ${valor2}, ${valor3} e ${valor4}
                                            MEDIA: ${media.toFixed(1)}
                                            SITUAÇÃO: ${situacao}`
                                )
                                entradaDeDados.close()
                            }
                        }
                    })
                })
            })
        })
    })
})