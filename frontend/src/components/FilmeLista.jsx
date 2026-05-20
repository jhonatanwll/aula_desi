import { useState, useEffect } from "react";
import FilmeCard from "./FilmeCard.jsx";
import { buscarFilmes } from "../api/filmes.js";
import Loading from "./Loading.jsx";
import MensagemErro from "./MensagemErro.jsx";

export default function FilmeLista() {
    const [filmes, setFilmes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)


    async function carregar() {
        try {
            setCarregando(true)
            setErro(null)
            const dados = await buscarFilmes()
            setFilmes(dados)
        } catch (e) {
            setErro(e.message)
        } finally {
            setCarregando(false)
        }
    }
    useEffect(()=>{
        carregar()
    }, [])

    if(carregando) return <Loading mensagem="Buscando filmes..." />
    console.warn("ERRO: " + erro)
    if(erro) return <MensagemErro mensagem={erro} onTentarNovamente={carregar} />

    return (
        <section className="filme-lista">
            <h2>Catálogo ({filmes.length})</h2>
            <div className="grid">
                {filmes.map((filme) => (
                    <FilmeCard key={filme.id} filme={filme} />
                )
                )}
            </div>
        </section>
    )

}