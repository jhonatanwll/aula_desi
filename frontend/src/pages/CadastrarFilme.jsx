import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { criarFilme } from "../api/filmes"

export default function CadastrarFilme() {
    const [form, setForm] = useState({
        titulo='', diretor='', ano='', genero=''
    })
    const [salvando, setSalvando] = useState(false)
    const [erro, setErro] = useState(null)
    const navigate = useNavigate()

    function atualizar(campo, valor) {
        setForm(prev => ({ ...prev, [campo]: valor }))
    }

    async function enviar(e) {
        e.preventDefault()
        setSalvando(true)
        setErro(null)

        try {
            const novo = await (criarFilme(form))
            navigate(`/filmes/${novo.id}`)
        } catch (e) {
            setErro(e.message)
        } finally {
            setSalvando(false)
        }
    }

    return (
        <section className="form-cadastro">
            <h2>Cadastrar filme</h2>
            <form onSubmit={enviar}>
                <label htmlFor="titulo">Título</label>
                <input value={form.titulo} onChange={e => atualizar('titulo', e.target.value)} required />
            </form>
        </section>
    )
}