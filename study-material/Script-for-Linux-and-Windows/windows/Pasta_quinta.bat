@echo off
rem não tá fucionando

setlocal EnableDelayedExpansion

rem Loop de 1 a 12 para representar cada mês do ano
for /L %%m in (1,1,12) do (
    rem Loop de 1 a 31 para representar cada dia do mês (máximo de 31 dias por mês)
    for /L %%d in (1,1,31) do (
        rem Constrói a data no formato YYYY-MM-DD
        set "ano=2025"
        set "mes=%%m"
        set "dia=%%d"

        rem Formata o dia e o mês para ter dois dígitos (por exemplo, 01, 02, ..., 09)
        if %%m LSS 10 set "mes=0%%m"
        if %%d LSS 10 set "dia=0%%d"

        set "data=!ano!-!mes!-!dia!"

        rem Usa o comando WMIC para obter o dia da semana para a data especificada
        for /F "skip=1 tokens=1-3" %%A in ('wmic path win32_localtime get dayofweek^,month^,day /format:table') do (
            if "%%B"=="!mes!" (
                if "%%C"=="!dia!" (
                    set "dia_semana=%%A"
                )
            )
        )

        rem Verifica se o dia da semana corresponde a uma quinta-feira (4)
        if "!dia_semana!" equ "4" (
            rem Cria o nome da pasta no formato Thu_YYYY_MM_DD
            set "nome_pasta=Thu_!ano!_!mes!_!dia!"

            rem Cria a pasta se ainda não existir
            if not exist "!nome_pasta!" (
                mkdir "!nome_pasta!"
                echo Pasta '!nome_pasta!' criada com sucesso.
            ) else (
                echo A pasta '!nome_pasta!' já existe.
            )
        )
    )
)