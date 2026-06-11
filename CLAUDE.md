# CLAUDE.md — aulas/desi

Projeto de AULAS (material didático da disciplina DESI, repo `aula_desi`) — **não confundir com o pipeline global `/desi`** (commands `desi:*` do `~/.claude`). App exemplo de CRUD de filmes em 2 camadas, usado pra ensinar frontend React consumindo API REST.

## Estrutura

- `backend/` — Express 5 + cors, tudo em `server.js`. Dados em memória (array `filmes` com seed de 4 filmes — reinicia a cada restart, sem banco). Porta **3000**.
  - Rotas: `GET /filmes` (com `setTimeout` de 800ms proposital — simula latência pra exercitar estado de Loading no front), `GET/PUT/DELETE /filmes/:id`, `POST /filmes` (validação: `titulo` e `diretor` obrigatórios → 400).
  - Rodar: `cd backend && npm start`.
- `frontend/` — React 19 + Vite 8 + react-router-dom 7 (JavaScript, sem TS).
  - `src/pages/` — `Home`, `Filmes`, `DetalheFilme`, `CadastrarFilme`. `src/components/` — `Navbar`, `FilmeLista`, `FilmeCard`, `Loading`, `MensagemErro`.
  - `src/api/filmes.js` — client fetch hardcoded em `http://localhost:3000` (backend precisa estar de pé).
  - Rodar: `cd frontend && npm run dev` (Vite, porta default 5173). Lint: `npm run lint`. Sem testes automatizados.

## Observações (estado real do código — material de aula)

- Inconsistência de schema EXISTENTE: o seed usa campo `nome`; `POST`/`PUT` usam `titulo`. É o estado atual do material — não "corrigir" sem o user pedir (pode ser ponto de aula).
- Restaurar deps: `npm ci` em cada pasta (nunca `npm install` solto — gate global de supply chain).
