import { NavLink } from 'react-router-dom'
import Home from './assets/home.svg'
import VideosCurtos from './assets/videos.svg'
import AoVivo from './assets/live.svg'
import Spray from './assets/customizar.svg'
import Coracao from './assets/coracao.svg'
import Perfil from './assets/perfil.svg'
import Engrenagem from './assets/engrenagem.svg'

export default function Nav() {

    const navCss = 'flex gap-6 items-center'

    return (
        <>
        <div className='flex flex-col justify-between h-screen border-r-2 px-10'>
            <h2 className='mt-10'>NomeDaPágina</h2>
            <div className='flex flex-col justify-between gap-6 '>
                <div>
                    <NavLink to='/' className={navCss}>
                    <img src={Home} alt="" className='w-7'/>
                    Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/videosCurtos' className={navCss}>
                    <img src={VideosCurtos} alt="" className='w-7'/>
                    Shorts
                    </NavLink>
                </div>
                <div>
                    
                    <NavLink to='/aoVivo' className={navCss}>
                    <img src={AoVivo} alt=""className='w-7'/>
                    Ao Vivo
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/customizar' className={navCss}>
                    <img src={Spray} alt="" className='w-7'/>
                    Customizar
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/notificacoes' className={navCss}>
                    <img src={Coracao} alt="" className='w-7'/>
                    Notificações
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/perfil' className={navCss}> 
                    <img src={Perfil} alt="" className='w-7'/> 
                    Perfil
                    </NavLink>
                </div>
            </div>
            <div>
                <NavLink to='/configuracoes'><img src={Engrenagem} alt="" className='mb-10'/></NavLink>
            </div>
        </div>
        </>
    )
}