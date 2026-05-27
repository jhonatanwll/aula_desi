import { createContext, useContext, useState } from "react";

// 1. cria o canal (null = valor padrão quando não há Provider)
const UsuarioContext = createContext(null);

// 2. componente que PUBLICA o usuário para a árvore toda
export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null); // ninguém logado no início

  function login(nome) {
    setUsuario({ nome });
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
}

// 3. hook que LÊ o usuário em qualquer tela
export function useUsuario() {
  return useContext(UsuarioContext);
}
