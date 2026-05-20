import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end>Home</NavLink >
            <NavLink to="/filmes">Filmes</NavLink >
            <NavLink to="/cadastrar">Cadastrar</NavLink >
        </nav>
    )
}