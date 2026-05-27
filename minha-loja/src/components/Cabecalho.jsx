import { Link } from 'react-router-dom'
import { useUsuario } from '../context/UsuarioContext'

// Cabeçalho fixo — aparece em toda rota e lê o usuário do contexto.
function Cabecalho() {
  const { usuario, login, logout } = useUsuario()

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '12px 20px',
        background: '#2d2d44',
        borderRadius: 8,
        marginBottom: 24,
      }}
    >
      <nav style={{ display: 'flex', gap: 12, flex: 1 }}>
        <Link to="/">Início</Link>
        <Link to="/carrinho">Carrinho</Link>
      </nav>

      {usuario ? (
        <span>
          Olá, {usuario.nome} <button onClick={logout}>Sair</button>
        </span>
      ) : (
        <button onClick={() => login('Larissa')}>Entrar</button>
      )}
    </header>
  )
}

export default Cabecalho
