import { useSearchParams, useNavigate } from 'react-router-dom'

function LanguagePage(){
    const [SearchParams] = useSearchParams()
    const language = SearchParams.get("l")
    return <div>teste
        <div>{language}</div>
    </div>
}
export default LanguagePage