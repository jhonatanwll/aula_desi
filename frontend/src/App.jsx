import './App.css'
import { Routes, Route } from 'react-router-dom'
import FilmeLista from "./components/FilmeLista.jsx"
import Filmes from './pages/Filmes.jsx'
import Home from './pages/Home.jsx'
import DetalheFilme from './pages/DetalheFilme.jsx'
import CadastrarFilme from './pages/CadastrarFilme.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className='app'>
      <header className="app-header">
        <h1>🎬 Catálogo de Filmes</h1>
        <p>Lista utilizando .map</p>
      </header>
      {/* NOVO - NAVBAR */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/filmes/:id" element={<DetalheFilme />} />
          <Route path="/cadastrar" element={<CadastrarFilme />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
