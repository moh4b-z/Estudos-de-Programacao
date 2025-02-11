export const fetchSuggestions = async ({ path, file, folder, exception, inputName }) => {
    if (!inputName.trim()) {
        return []
    }

    try {
        const response = await fetch(
            `https://api-estudos.onrender.com/v1/search/all/with/?pa=${path}&fi=${file}&fo=${folder}&e=${exception}&name=${inputName}`,
            {
                method: 'GET',
            }
        )

        console.log("foi")

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const searchOutput = await response.json()
        return searchOutput.paths || [] // Retorna as sugestões ou uma lista vazia
    } catch (error) {
        console.error('Erro na requisição:', error.message)
        return [] // Retorna lista vazia em caso de erro
    }
}