import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { buscarFilmesPorId } from "../api/filmes.js"
import Loading from "../components/Loading.jsx"
import MensagemErro from "../components/MensagemErro.jsx"

export default function DetalheFilme() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    async function carregar() {
        try {
            setCarregando(true)
            const dados = await buscarFilmesPorId(id)
            setFilme(dados)
        } catch (e) {
            setErro(e.message);
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => { carregar() }, [id])

    if (carregando) return <Loading mensagem="Carregando o seu filme..." />
    if (erro) return <MensagemErro mensagem={erro} onTentarNovamente={carregar} />

    const titulo = filme.titulo || filme.nome
    const genero = filme.genero || filme.categoria || "Sem gênero"

    return (
        <section className="filme-detalhe">
            <h2>{titulo}</h2>
            <p><strong>Diretor:</strong> {filme.diretor}</p>
            <p><strong>Ano:</strong> {filme.ano}</p>
            <p><strong>Nota:</strong> {filme.nota}</p>
            <p><strong>Gênero:</strong> {genero}</p>

            <div className="acoes">
                <button onClick={() => navigate(-1)}>Voltar</button>
                <Link to="/filmes">Ver Todos</Link>
            </div>
        </section>
    )
}