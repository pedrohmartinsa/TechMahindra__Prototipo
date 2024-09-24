import { NavLink } from 'react-router-dom'
import Editar from './assets/editar.svg'
import Videos from './assets/videos.svg'
import  Customizacoes from './assets/customizacoes.svg'
import Salvos from './assets/salvos.svg'

export default function Perfil() {
    return (
        <>
            <div>

                <div>
                    <img src={Editar} alt="" />

                    <div>
                        <h3>NomeDeUsuário</h3>
                        <p>Nome</p>
                        <button>
                            <img src="" alt="" />
                            Editar Perfil
                        </button>
                    </div>

                </div>

                <div>
                    <p>0 Seguidores</p>
                    <p>0 Seguindo</p>
                </div>

                <div>
                    <NavLink>
                        <img src={Videos} alt="" />
                        Vídeos
                    </NavLink>

                    <NavLink>
                        <img src={Customizacoes} alt="" />
                        Customizações
                    </NavLink>

                    <NavLink>
                        <img src={Salvos} alt="" />
                        Salvos
                    </NavLink>
                </div>
            </div>
        </>
    )
}