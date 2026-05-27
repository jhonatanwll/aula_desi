import { createContext, useContext, useState, useMemo, useCallback } from 'react'

// 1. cria o canal (null = valor padrão quando não há Provider)
const UsuarioContext = createContext(null)

// 2. componente que PUBLICA o usuário para a árvore toda
export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null) // ninguém logado no início

  const login = useCallback((nome) => setUsuario({ nome }), [])
  const logout = useCallback(() => setUsuario(null), [])

  // useMemo: objeto novo só quando algo muda (evita re-render à toa)
  const value = useMemo(
    () => ({ usuario, login, logout }),
    [usuario, login, logout],
  )

  return (
    <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>
  )
}

// 3. hook que LÊ o usuário em qualquer tela
export function useUsuario() {
  return useContext(UsuarioContext)
}
