import { useState, useRef, useEffect } from 'react'
import './searchInput.css'
import clickedInOrOut from '../../utils/clickedInOrOut'
import ChoicesDiv from './ChoicesDiv'
import SearchIcon from '../../assets/svg/searcj-outline'
import {useGoToSearchPage} from '../../utils/goToAnotherPage'
import { fetchSuggestions } from '../../api/apiSearch'

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
        const resultado = await fetchSuggestions({ path, file, folder, exception, inputName: inputName })
        setSuggestions(resultado)
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
        if (typingTimeout.current) {
            clearTimeout(typingTimeout.current)
        }
   
        typingTimeout.current = setTimeout(() => {
            ToBring(inputName)
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
                link={suggestion.extname ==".html" ? suggestion.link : "#"}
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
    const goToSearchPage = useGoToSearchPage()


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
                onKeyDown={(e) => {if (e.key === 'Enter'){
                    goToSearchPage({search: e.target.value})
                }}}
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
