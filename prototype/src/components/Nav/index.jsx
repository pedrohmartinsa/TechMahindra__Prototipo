import { NavLink } from 'react-router-dom'
import Home from './assets/home.svg'
import VideosCurtos from './assets/videos.svg'
import AoVivo from './assets/live.svg'
import Spray from './assets/customizar.svg'
import Coracao from './assets/coracao.svg'
import Perfil from './assets/perfil.svg'
import Engrenagem from './assets/engrenagem.svg'

export default function Nav() {
    return (
        <>
        <div>
            <h2>NomeDaPágina</h2>
            <div>
                <div>
                    <NavLink to='/'>
                    <img src={Home} alt="" />
                    Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/videosCurtos'>
                    <img src={VideosCurtos} alt="" />
                    Vídeos Curtos
                    </NavLink>
                </div>
                <div>
                    
                    <NavLink to='/aoVivo'>
                    <img src={AoVivo} alt="" />
                    Ao Vivo
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/customizar'>
                    <img src={Spray} alt="" />
                    Customizar
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/notificacoes'>
                    <img src={Coracao} alt="" />
                    Notificações
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/perfil'> 
                    <img src={Perfil} alt="" /> 
                    Perfil
                    </NavLink>
                </div>
            <NavLink to='/configuracoes'><img src={Engrenagem} alt="" /></NavLink>
            </div>
        </div>
        </>
    )
}