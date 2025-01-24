import { useSearchParams, useNavigate } from 'react-router-dom'

function SearchPage(){
    const [SearchParams] = useSearchParams()
    const search = SearchParams.get("s")
    return <div>teste
        <div>{search}</div>
    </div>
}
export default SearchPage