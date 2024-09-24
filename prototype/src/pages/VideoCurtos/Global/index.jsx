import Perfil from '../assets/perfil.svg'
import AddPerfil from '../assets/addperfil.svg'
import Compartilhar from '../assets/compartilhar.svg'
import Curtir from '../assets/curtir.svg'
import Mensagem from '../assets/mensagem.svg'
import Salvar from '../assets/salvar.svg'

export default function Global() {
    return (
        <>
            <div>
                <div><p>video</p></div>
                <div>
                    <div>
                        <button><img src={Perfil} alt="" /></button>
                        <button><img src={AddPerfil} alt="" /></button>
                    </div>

                    <div>
                        <button><img src={Curtir} alt="" /></button>
                        <p>203</p>
                    </div>

                    <div>
                        <button><img src={Mensagem} alt="" /></button>
                        <p>30</p>
                    </div>

                    <div>
                        <button><img src={Salvar} alt="" /></button>
                        <p>11</p>
                    </div>

                    <div>
                        <button><img src={Compartilhar} alt="" /></button>
                        <p>7</p>
                    </div>
                </div>
            </div>
        </>
    )
}