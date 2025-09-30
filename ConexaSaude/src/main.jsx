import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css";

// Configurando o router
import {
  createBrowserRouter,  // Corrigido aqui
  RouterProvider
} from 'react-router-dom'

import LoginUsuario from "./pages/LoginUsuario"
import Cadastro from "./pages/Cadastro"
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginUsuario />
  },
  {
    path: "/cadastro",  
    element: <Cadastro />
  },
  {
    path: "/home",  
    element: <Home />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
