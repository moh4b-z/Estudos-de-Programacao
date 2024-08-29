@echo off
setlocal EnableDelayedExpansion

rem Defina listas de nomes e sobrenomes
set "nomes= Mohammad Joao"
set "sobrenomes= Silva Salim"

rem Use o comando `for` para percorrer os nomes
for %%n in (%nomes%) do (
    rem Use o comando `for` novamente para percorrer os sobrenomes
    for %%s in (%sobrenomes%) do (
        rem Combine o nome e o sobrenome para formar um nome aleatório
        set "nome=%%n %%s"
        mkdir "!nome!"
    )
)

endlocal