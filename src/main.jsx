// npm install react-router-dom

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './pages/app/App.jsx'
import LanguagePage from './pages/languagePage/languagePage.jsx'
import SearchPage from './pages/searchPage/searchPage.jsx'


// Configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/language",
    element: <LanguagePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
])

// Renderização
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
