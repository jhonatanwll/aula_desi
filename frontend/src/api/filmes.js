const API_URL = "http://localhost:3000"

export async function buscarFilmes() {
    const res = await fetch(`${API_URL}/filmes`)
    if (!res.ok) {
        throw new Error(`Erro ${res.status} ao buscar filmes`)
    }
    return res.json()
}

export async function buscarFilmesPorId(id) {
    const res = await fetch(`${API_URL}/filmes/${id}`)
    if (!res.ok) {
        throw new Error(`Filme com id ${id} não encontrado`)
    }
    return res.json()
}

export async function criarFilme(dados) {
    const res = await fetch(`${API_URL}/filmes`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(dados)
    })

    if (!res.ok) throw new Error(`Erro ${res.status} ao cadastrar filme`)
    return res.json();
}