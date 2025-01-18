import { useNavigate } from 'react-router-dom'
import './listOfLanguages.css'
import {ImgC, ImgCpp, ImgCss, ImgHtml, ImgJava, ImgJavascript, ImgPython} from '../../../public/languageIcons'

function ListOfLanguages(props){

    return <ul className='listOfLanguages'>
        <li>
            <a href="">
                <ImgC/>
            </a>
        </li>
        <li>
            <a href="">
                <ImgCpp/>
            </a>
        </li>
        <li>
            <a href="">
                <ImgCss/>
                <ImgHtml/>
            </a>
        </li>
        <li>
            <a href="">
                <ImgJava/>
            </a>
        </li>
        <li>
            <a href="">
                <ImgJavascript/>
            </a>
        </li>
        <li>
            <a href="">
                <ImgPython/>
            </a>
        </li>
    </ul>
}

export default ListOfLanguages