import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'

// App é o layout: o que aparece em TODA rota.
function App() {
  return (
    <>
      <Cabecalho /> {/* fixo em toda tela */}
      <Outlet /> {/* aqui o router injeta Home ou Carrinho */}
    </>
  )
}

export default App
