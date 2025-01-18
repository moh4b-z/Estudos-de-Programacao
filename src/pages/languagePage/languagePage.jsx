import { useSearchParams, useNavigate } from 'react-router-dom'

function LanguagePage(){
    const [SearchParams] = useSearchParams()
    const language = SearchParams.get("language")
    return <div>teste
        <div>{language}</div>
    </div>
}
export default LanguagePage