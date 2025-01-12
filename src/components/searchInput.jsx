import { useState, useRef, useEffect } from 'react'
import './searchInput.css'

function ChoicesDiv(props) {
    let tipe = "Folder"
    if (props.fileOrfolder) {
        tipe = "File"
    }
    return (
        <div href={props.link} className="choices">
            <p className="name">{props.name}</p>
            <div>
                <span>{props.path}</span>
                <span>Tipo: {tipe}</span>
            </div>
        </div>
    )
}

function SearchInput(props) {
    const [name, setName] = useState('')
    const [suggestions, setSuggestions] = useState([]) // Estado para armazenar as sugestões
    const typingTimeout = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const inputRef = useRef(null)
    const suggestionsRef = useRef(null)

    const path = props.Path || ''
    const file = props.File || ''
    const folder = props.Folder || ''
    const exception = props.Exception || ''

    async function ToBring(inputName) {
        if (!inputName.trim()) {
            setSuggestions([]) // Limpa as sugestões se o input estiver vazio
            return false
        }

        try {
            const response = await fetch(
                `https://api-estudos.onrender.com/v1/search/?pa=${path}&fi=${file}&fo=${folder}&e=${exception}&name=${inputName}`,
                {
                    method: 'GET',
                }
            )

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const searchOutput = await response.json()
            setSuggestions(searchOutput.paths || []) // Atualiza o estado com as sugestões ou uma lista vazia
            console.log(searchOutput)
            return searchOutput
        } catch (error) {
            console.error('Erro na requisição:', error.message);
            setSuggestions([]) // Limpa as sugestões em caso de erro
            return false
        }
    }

    function messagePropsInput() {
        let message = " da pasta"
        if (props.File && props.Folder) {
            message = " da pasta ou do arquivo"
        } else if (props.File) {
            message = " do arquivo"
        }
        return message
    }

    function handleInputChange(e) {
        const inputName = e.target.value
        setName(inputName)

        // Limpa o timeout anterior, se existir
        if (typingTimeout.current) {
            clearTimeout(typingTimeout.current)
        }

        // Define um novo timeout
        typingTimeout.current = setTimeout(() => {
            ToBring(inputName); // Chama a API após o atraso
        }, 500)
    }

    function suggestionMaker() {
        if (!suggestions) {
            // Pode retornar um elemento ou vazio se não houver sugestões
            return <p>Nada encontrado.</p>
        }else if(suggestions.length === 0){
            return
        }

        return suggestions.map((suggestion, index) => (
            <ChoicesDiv
                key={index}
                name={suggestion.name}
                path={suggestion.path}
                fileOrfolder={
                    suggestion.tipe ? suggestion.tipe === 'file' : props.File
                }
            />
        ))
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                suggestionsRef.current &&
                !suggestionsRef.current.contains(event.target) &&
                inputRef.current &&
                !inputRef.current.contains(event.target)
            ) {
                setIsVisible(false) // Esconde as sugestões
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="total">
            <input
                className="cInput"
                type="text"
                value={name}
                onChange={handleInputChange}
                onFocus={() => setIsVisible(true)}
                placeholder={"Digite o nome" + messagePropsInput()}
            />
            <div className="suggestions">
                {suggestionMaker()}
            </div>
        </div>
    )
}

export default SearchInput
