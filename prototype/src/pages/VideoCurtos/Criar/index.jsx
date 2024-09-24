import Nuvem from '../assets/nuvem.svg'

export default function Criar() {
    return (
        <>
            <div>
                <div>
                    <img src={Nuvem} alt="" />
                    <div>
                        <h2>Selecione o vídeo a enviar.</h2>
                        <p>Ou arraste e solte aqui.</p>
                        <button>Selecionar Vídeo</button>
                    </div>
                </div>
            </div>
        </>
    )
}