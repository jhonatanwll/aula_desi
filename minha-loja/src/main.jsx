import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { UsuarioProvider } from './context/UsuarioContext'
import App from './App'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'

// rotas declaradas fora da árvore (forma recomendada hoje)
const router = createBrowserRouter([
  {
    element: <App />, // layout: cabeçalho + Outlet
    children: [
      { path: '/', element: <Home /> },
      { path: '/carrinho', element: <Carrinho /> },
    ],
  },
])

// Provider ACIMA do RouterProvider → todas as rotas enxergam
createRoot(document.getElementById('root')).render(
  <UsuarioProvider>
    <RouterProvider router={router} />
  </UsuarioProvider>,
)
