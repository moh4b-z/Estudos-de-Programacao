import './header.css'
import { useNavigate } from 'react-router-dom'
import SearchInput from '../searchInput/searchInput'
import ListOfLanguages from '../listOfLanguages/listOfLanguages'

function HeaderAll(){
    return <header>
        <div className='logo'>
            <h1>Mohammad Salim Soares Silva</h1>
        </div>
        <div className='Input'>
            <SearchInput File="True" Folder="True" Background_color="Red" borderBottomColor="black"/> 
        </div>
        <nav>
            <ListOfLanguages/>
        </nav>
        
    </header>
}

export default HeaderAll