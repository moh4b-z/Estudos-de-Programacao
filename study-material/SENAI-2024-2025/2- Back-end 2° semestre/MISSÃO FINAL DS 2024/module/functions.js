const arrAlunos = require('./simulando-banco-de-dados/alunos')
const listaAlunos = arrAlunos.alunos
const arrCursos = require('./simulando-banco-de-dados/cursos')
const listaCursos = arrCursos.cursos

// Recupera uma lista de todos os cursos oferecidos pela escola. 
function cursosLista(){
    let objetoRetorno = {"cursos": listaCursos}

    return Array.isArray(listaCursos)? objetoRetorno : false
}

// Recupera uma lista de todos os alunos matriculados na escola. 
function alunosLista(){
    let objetoRetorno = {"alunos": listaAlunos}

    return Array.isArray(listaAlunos)? objetoRetorno : false
}

// Recupera informações de um aluno específico com base no número de matrícula
function infoAluno(nubMatricula){
    let matricula = nubMatricula
    let objetoRetorno = false

    listaAlunos.forEach(function(aluno){
        if(aluno.matricula == matricula){
            objetoRetorno = aluno
        }
    })

    return objetoRetorno
}

// Recupera uma lista de todos os alunos matriculados no curso especificado. DS ou REDES 
function alunosCurso(nomeCurso){
    let nCurso = nomeCurso
    let objetoRetorno = {curso : nCurso, alunos : []}

    if(listaCursos.some(curso => curso.sigla === nCurso)){
        listaAlunos.forEach(function(aluno){
            aluno.curso.forEach(function(CursosDoAluno){
                if(CursosDoAluno.sigla == nCurso){
                    objetoRetorno.alunos.push(aluno)
                }
            })
        })
    }else{
        objetoRetorno = false
    }

    return objetoRetorno
}

// Recupera uma lista de todos os alunos com o status especificado. Finalizado ou Cursando
function statusCurso(statusAlunosCursoS){
    let statusAC = statusAlunosCursoS
    let objetoRetorno = { status : statusAC, alunos : []}
    if(listaAlunos.some(aluno => aluno.status === statusAC)){
        if(Array.isArray(listaAlunos)){
            listaAlunos.forEach(function(aluno){
                if(aluno.status == statusAC){
                    objetoRetorno.alunos.push(aluno)
                }
            })
        }else{
            objetoRetorno = false
        }
    }else{
        objetoRetorno = false
    }


    return objetoRetorno
}

// Recupera uma lista de alunos matriculados em um curso especificado e com base em um status da disciplina Aprovado, Reprovado ou EXAME
function alunosStatusCurso(nomeCurso, statusAluno){
    let nCurso = nomeCurso
    let statusA = statusAluno
    let objetoRetorno = { curso : nCurso, status : statusA, alunos : []}


    if(listaCursos.some(curso => curso.sigla === nCurso)){
        listaAlunos.forEach(function(aluno){
            let alunoRetorno = aluno
            let disciplinasStaus = []
            
            alunoRetorno.curso.forEach(function(CursosDoAluno){
                let cursoAluno = CursosDoAluno
                if(CursosDoAluno.sigla == nCurso){
                    CursosDoAluno.disciplinas.forEach(function(disciplinaCurso){
                        if(disciplinaCurso.status == statusA){
                            disciplinasStaus.push(disciplinaCurso)
                        }
                        cursoAluno.disciplinas = disciplinasStaus
                    })
                    alunoRetorno.curso = cursoAluno
                    objetoRetorno.alunos.push(alunoRetorno)
                }
            })
        })
    }else{
        objetoRetorno = false
    }    

    return objetoRetorno
}

// Recupera uma lista de alunos matriculados em um curso especificado e com base no ano de conclusão 
function alunosCursoDeAno(nomeCurso, anoDeComnclusao){
    let nCurso = nomeCurso
    let anoDC = anoDeComnclusao
    let objetoRetorno = { curso : nCurso, anoDeComnclusao : anoDC, alunos : []}

    

    if(listaCursos.some(curso => curso.sigla === nCurso)){
        listaAlunos.forEach(function(aluno){        
            aluno.curso.forEach(function(CursosDoAluno){
                if(CursosDoAluno.sigla == nCurso && CursosDoAluno.conclusao == anoDC){
                    objetoRetorno.alunos.push(aluno)                
                }
            })
        })
    }else{
        objetoRetorno = false
    }

    return objetoRetorno
}


function filtro(statusAlunosCursoS, nomeCurso, statusAluno, anoDeComnclusao) {
    let statusAC = statusAlunosCursoS
    let nCurso = nomeCurso
    let statusA = statusAluno
    let anoDC = anoDeComnclusao
    let objetoRetorno = false

    if (statusAC) {
        objetoRetorno = statusCurso(statusAC)
    } else if (nCurso && statusA && !anoDC) { 
        objetoRetorno = alunosStatusCurso(nCurso, statusA)
    } else if (nCurso && anoDC && !statusA) { 
        objetoRetorno = alunosCursoDeAno(nCurso, anoDC)
    }

    return objetoRetorno
}

// console.log(alunosCurso("DS"))
console.log(alunosStatusCurso("DS", "EXAME"))
// console.log(alunosCursoDeAno("DS", "2022"))
// console.log(filtro("", "DS","","2022"))

module.exports = {
    cursosLista,
    alunosLista,
    infoAluno,
    alunosCurso,
    statusCurso,
    alunosStatusCurso,
    alunosCursoDeAno,
    filtro
}
