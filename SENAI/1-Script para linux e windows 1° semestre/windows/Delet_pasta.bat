@echo off
setlocal enabledelayedexpansion

REM Solicita o nome base para as pastas a serem deletadas
set /p "nome_base=Digite o nome base das pastas a serem deletadas: "

REM Verifica se existem pastas com o nome base fornecido e deleta
set "pastas_encontradas="
for /d %%i in ("%nome_base%*") do (
    set "pastas_encontradas=!pastas_encontradas! %%i"
)

if not "%pastas_encontradas%"=="" (
    echo Pastas encontradas:
    echo %pastas_encontradas%
    set /p "confirmacao=Tem certeza de que deseja deletar estas pastas? (s/n): "
    if /i "!confirmacao!"=="s" (
        echo Deletando pastas...
        rd /s /q %pastas_encontradas%
        echo Pastas deletadas com sucesso.
    ) else (
        echo Operação cancelada pelo usuário.
    )
) else (
    echo Nenhuma pasta com o nome base '%nome_base%' encontrada.
)

REM Pausa no final do script
pause
