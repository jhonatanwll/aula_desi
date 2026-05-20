export default function Loading({mensagem="Carregando... "}){
    return (
            <div className="loading">
                <div className="spinner" />
                <p>{mensagem}</p>
            </div>
        )
}