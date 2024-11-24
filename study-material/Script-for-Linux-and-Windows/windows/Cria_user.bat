@echo off
setlocal enabledelayedexpansion

REM Solicita o número de usuários a serem criados
set /p num_usuarios="Digite o número de usuários a serem criados: "

REM Solicita o nome base para todos os usuários
set /p nome_base="Digite o nome base para todos os usuários: "

REM Define a senha padrão
set senha_padrao=senai127

REM Loop para criar os usuários
for /l %%i in (1,1,%num_usuarios%) do (
    set nome_usuario=!nome_base!_%%i

    REM Verifica se o usuário já existe
    net user !nome_usuario! >nul 2>nul
    if !errorlevel! neq 0 (
        REM Cria o usuário
        net user !nome_usuario! !senha_padrao! /add /fullname:"Usuário criado automaticamente" /expires:never

        echo Usuário '!nome_usuario!' criado com sucesso.
    ) else (
        echo O usuário '!nome_usuario!' já existe.
    )
)

pause

