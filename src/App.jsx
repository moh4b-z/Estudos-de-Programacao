import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import SearchInput from './components/searchInput'

function App() {
  const navigate = useNavigate()
  function languagePageClick(task) {
    const query = new URLSearchParams()
    query.set('language', task.language)
    navigate(`/language?${query.toString()}`)
  }

  const task = { language: 'javascript' }

  return (
    <>
      <SearchInput File="True" Folder="True"/>
      <button onClick={() => languagePageClick(task)}>aperte</button>
    </>
  );
}

export default App;

