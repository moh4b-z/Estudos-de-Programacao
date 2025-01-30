import './listOfLanguages.css'
import {ImgC, ImgCpp, ImgCss, ImgHtml, ImgJava, ImgJavascript, ImgPython} from '../../assets/svg/languageIcons'
import {useGoToLanguagePage} from '../../utils/goToAnotherPage'


function ListOfLanguages(props){
    const goToLanguagePage = useGoToLanguagePage()

    return <ul className='listOfLanguages'>
        <li>
            <a onClick={() => goToLanguagePage({language: "C"})}>
                <ImgC/>
            </a>
        </li>
        <li>
            <a onClick={() => goToLanguagePage({language: "C++"})}>
                <ImgCpp/>
            </a>
        </li>
        <li>
            <a onClick={() => goToLanguagePage({language: "HTML&CSS"})}>
                <div className="ImgCss">
                    <ImgCss/>
                </div>
                <div  className="ImgHtml">
                    <ImgHtml/>
                </div>
            </a>
        </li>
        <li>
            <a onClick={() => goToLanguagePage({language: "Java"})}>
                <ImgJava/>
            </a>
        </li>
        <li>
            <a onClick={() => goToLanguagePage({language: "Javascript"})}>
                <ImgJavascript/>
            </a>
        </li>
        <li>
            <a onClick={() => goToLanguagePage({language: "Python"})}>
                <ImgPython/>
            </a>
        </li>
    </ul>
}

export default ListOfLanguages