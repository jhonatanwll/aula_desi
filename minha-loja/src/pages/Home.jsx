import { useUsuario } from "../context/UsuarioContext";

// Rota "/" — lê o mesmo usuário do contexto, sem receber props.
function Home() {
  const { usuario } = useUsuario();

  return (
    <main>
      <h1>Início</h1>
      {usuario ? (
        <p>Bem-vinda de volta, {usuario.nome}!</p>
      ) : (
        <p>Entre no cabeçalho para começar suas compras.</p>
      )}
    </main>
  );
}

export default Home;
