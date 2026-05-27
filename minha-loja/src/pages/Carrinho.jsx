import { useUsuario } from '../context/UsuarioContext'

// Rota "/carrinho" — mesmo dado do contexto, em outra tela.
function Carrinho() {
  const { usuario } = useUsuario()

  return (
    <main>
      <h1>Carrinho{usuario ? ` de ${usuario.nome}` : ''}</h1>
      <p>{usuario ? 'Seu carrinho está vazio.' : 'Entre para ver seu carrinho.'}</p>
    </main>
  )
}

export default Carrinho
