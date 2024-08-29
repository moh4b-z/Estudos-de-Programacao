@echo off
setlocal EnableDelayedExpansion

rem Defina listas de nomes e sobrenomes
set "nomes= Mohammad Saddy João Maria Fernando Shirley Madu Milena Sophia Luana"
set "sobrenomes= Silva Salim Soares Assis Oliveira Gomes Guedes"

rem Use o comando `for` para percorrer os nomes
for %%n in (%nomes%) do (
    rem Use o comando `for` novamente para percorrer os sobrenomes
    for %%s in (%sobrenomes%) do (
        rem Combine o nome e o sobrenome para formar um nome aleatório
        set "nome=%%n %%s"
        echo !nome!
    )
)

endlocal
