@echo off
setlocal enabledelayedexpansion

REM Função para criar as pastas
:criar_pastas
REM Solicita o número de pastas a serem criadas
set /p "num_pastas=Digite o numero de pastas a serem criadas: "

REM Solicita o nome base para todas as pastas
set /p "nome_base=Digite o nome base para todas as pastas: "

REM Loop para criar as pastas
for /l %%i in (1,1,%num_pastas%) do (
    set "nome_pasta=!nome_base!_%%i"
    if not exist "!nome_pasta!" (
        mkdir "!nome_pasta!"
        echo Pasta '!nome_pasta!' criada com sucesso.
    ) else (
        echo A pasta '!nome_pasta!' já existe.
    )
)

REM Pausa no final do script
pause
