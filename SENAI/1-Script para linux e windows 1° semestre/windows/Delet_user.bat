@echo off
setlocal enabledelayedexpansion

REM Solicita o nome base para os usuários a serem deletados
set /p nome_base="Digite o nome base dos usuários a serem deletados: "

REM Lista os diretórios (possíveis usuários) no diretório /home e filtra pelo nome base
for /f %%i in ('dir /b /ad "C:\Users\*" ^| findstr /i /r "\%nome_base%"') do (
    set usuarios_encontrados=!usuarios_encontrados! %%i
)

REM Verifica se foram encontrados usuários com o nome base fornecido
if not "%usuarios_encontrados%"=="" (
    echo Usuários encontrados:
    echo %usuarios_encontrados%

    REM Solicita confirmação para deletar os usuários encontrados
    set /p confirmacao="Tem certeza de que deseja deletar estes usuários? (s/n): "
    if /i "%confirmacao%"=="s" (
        echo Deletando usuários...
        for %%u in (%usuarios_encontrados%) do (
            net user %%u /delete
        )
        echo Usuários deletados com sucesso.
    ) else (
        echo Operação cancelada pelo usuário.
    )
) else (
    echo Nenhum usuário com o nome base '%nome_base%' encontrado.
)

pause
