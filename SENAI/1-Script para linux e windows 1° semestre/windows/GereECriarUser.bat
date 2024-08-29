@echo off
setlocal EnableDelayedExpansion

rem Defina listas de nomes e sobrenomes
set "nomes= Mohammad Joao"
set "sobrenomes= Silva Salim"

REM Solicita o número de usuários a serem criados
set /p num_usuarios="Digite o número de usuários a serem criados: "

rem Use o comando `for` para percorrer os nomes
for %%n in (%nomes%) do (
    rem Use o comando `for` novamente para percorrer os sobrenomes
    for %%s in (%sobrenomes%) do (
        rem Combine o nome e o sobrenome para formar um nome aleatório
        set "nome=%%n %%s"
        echo "!nome!"

        REM vai pussar o nome
        set /p nome_base="!nome!"

        REM Define a senha padrão
        set senha_padrao=senai127

        REM Loop para criar os usuários
        for /l %%i in (1,1,%num_usuarios%) do (
            set nome_usuario=!nome_base!

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
    )
)

endlocal