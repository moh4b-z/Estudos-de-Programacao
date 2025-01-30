import { useNavigate } from 'react-router-dom'

function useGoToLanguagePage(task) {
    const navigate = useNavigate()
    return (task) => {
        const query = new URLSearchParams()
        query.set('l', task.language)
        navigate(`/language?${query.toString()}`)
    }
}

function useGoToSearchPage(task) {
    const navigate = useNavigate()
    return (task) => {
        const query = new URLSearchParams()
        query.set('s', task.search)
        navigate(`/search?${query.toString()}`)
    }
}

export {useGoToLanguagePage, useGoToSearchPage}