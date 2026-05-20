export default function MensagemErro({ mensagem, onTentarNovamente }) {
    return (
        <div className="erro">
            <p>⚠️{mensagem}</p>
            {onTentarNovamente && (
                <button type="button" onClick={onTentarNovamente}>
                    Tentar Novamente
                </button>
            )}
        </div>
    )
}