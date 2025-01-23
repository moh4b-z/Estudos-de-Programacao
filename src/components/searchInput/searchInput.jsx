import { useState, useRef, useEffect } from 'react'
import './searchInput.css'
import clickedInOrOut from '../../functions/clickedInOrOut'
import ChoicesDiv from './ChoicesDiv'
import SearchIcon from '../../assets/svg/searcj-outline'

function SearchInput(props) {
    const [name, setName] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const typingTimeout = useRef(null)
    const [visibility, setVisibility] = useState('none')

    const path = props.Path || ''
    const file = props.File || ''
    const folder = props.Folder || ''
    const exception = props.Exception || ''
    const background_color = props.Background_color
    const borderBottomColor = props.borderBottomColor


    async function ToBring(inputName) {
        if (!inputName.trim()) {
            setSuggestions([])
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

        typingTimeout.current = setTimeout(() => {
            ToBring(inputName) // Chama a API após o atraso
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
                color={borderBottomColor}
                fileOrfolder={
                    suggestion.tipe ? suggestion.tipe === 'file' : props.File
                }
            />
        ))
    }

    function visibilityNone(){
        setVisibility("none")
    }
    function visibilityFlex(){
        setVisibility("flex")
    }

    const ref = clickedInOrOut(visibilityFlex, visibilityNone)


    return (
        <div className="total" ref={ref} style={{borderBottomColor: `${borderBottomColor}`}}>
            <div className='icon' style={{color: `${borderBottomColor}`}}>
                <SearchIcon/>
            </div>
            <input
                className="cInput"
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder={"Digite o nome" + messagePropsInput()}
                
            />
            <div className="suggestions" 
                style={{display: `${visibility}`, 
                backgroundColor: `${background_color}`}}>
                {suggestionMaker()}
            </div>
        </div>
    )
}

export default SearchInput
