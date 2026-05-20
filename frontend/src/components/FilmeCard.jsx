import { Link } from "react-router-dom"

export default function FilmeCard({ filme }) {
    const titulo = filme.titulo || filme.nome
    const genero = filme.genero || filme.categoria || 'Sem gênero'

    return (
        <Link to={`/filmes/${filme.id}`} className="card-link">
            <article className="filme-card">
                <h3>{filme.nome}</h3>
                <p className="diretor">Diretor: {filme.diretor}</p>
                <div className="meta">
                    <span className="ano">Ano: {filme.ano}</span>
                    <span className="nota"> Nota: {filme.nota}</span>
                    <span className="genero"> Gênero: {filme.genero}</span>
                </div>
            </article>
        </Link>

    )
}