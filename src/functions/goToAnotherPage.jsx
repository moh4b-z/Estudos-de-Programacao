import { useNavigate } from 'react-router-dom'




function useGoToLanguagePage(task) {
    const navigate = useNavigate()
    return (task) => {
        const query = new URLSearchParams()
        query.set('l', task.language)
        navigate(`/language?${query.toString()}`)
    }
}

export {useGoToLanguagePage}