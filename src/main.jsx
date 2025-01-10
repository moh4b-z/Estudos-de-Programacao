// npm install react-router-dom

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LanguagePage from './pages/languagePage.jsx'

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
])

// Renderização
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
