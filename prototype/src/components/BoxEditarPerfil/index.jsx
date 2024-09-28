export default function BoxEditarPerfil() {
    return (
        <>
        <div>
            <div>
                <label htmlFor="nomeUsuario">Nome de Usuário:</label>
                <input type="text" id="nomeUsuario" placeholder="Nome de Usuário..."/>
            </div>
            <div>
                <label htmlFor="nome">Seu Nome:</label>
                <input type="text" id="nome" placeholder="Nome..."/>
            </div>
            <button>Salvar</button>
        </div>
        </>
    )
}