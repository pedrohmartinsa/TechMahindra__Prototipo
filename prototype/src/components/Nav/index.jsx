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
        <div className='ml-[4.375rem] mr-[4.688rem] mt-20'>
            <h2 className='mb-[7.313rem]'>NomeDaPágina</h2>
            <div className='flex flex-col justify-between gap-10'>
                <div>
                    <NavLink to='/' className='flex gap-7 items-center'>
                    <img src={Home} alt="" className='w-7'/>
                    Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/videosCurtos' className='flex gap-7 items-center'>
                    <img src={VideosCurtos} alt="" className='w-7'/>
                    Vídeos Curtos
                    </NavLink>
                </div>
                <div>
                    
                    <NavLink to='/aoVivo' className='flex gap-7 items-center'>
                    <img src={AoVivo} alt=""className='w-7'/>
                    Ao Vivo
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/customizar' className='flex gap-7 items-center'>
                    <img src={Spray} alt="" className='w-7'/>
                    Customizar
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/notificacoes' className='flex gap-7 items-center'>
                    <img src={Coracao} alt="" className='w-7'/>
                    Notificações
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/perfil' className='flex gap-7 items-center'> 
                    <img src={Perfil} alt="" className='w-7'/> 
                    Perfil
                    </NavLink>
                </div>
            <NavLink to='/configuracoes'><img src={Engrenagem} alt="" className='mt-36'/></NavLink>
            </div>
        </div>
        </>
    )
}