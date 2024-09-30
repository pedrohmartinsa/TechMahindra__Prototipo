import { NavLink } from 'react-router-dom'

import Home from './assets/home.svg'

import Videos from './assets/videos.svg'

import Live from './assets/live.svg'

import Games from './assets/games.svg'

import Coracao from './assets/coracao.svg'

import Perfil from './assets/perfil.svg'

import Engrenagem from './assets/engrenagem.svg'



export default function Nav() {

    const navCss = 'flex gap-6 items-center'

    return (
        <>
        <div className='flex flex-col justify-between h-screen min-w-60 border-r-2 px-10'>
            <NavLink to='/' className='pt-10'>NomeDaPágina</NavLink>
            <div className='flex flex-col justify-between gap-6 '>
                <div>
                    <NavLink to='home' className={navCss}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                    <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
                    </svg>
                    Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/videosCurtos' className={navCss}>
                    <img src={Videos} alt="" className='w-7'/>
                    Shorts
                    </NavLink>
                </div>
                <div>
                    
                    <NavLink to='/aoVivo' className={navCss}>
                    <img src={Live} alt=""className='w-7'/>
                    Ao Vivo
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/customizar' className={navCss}>
                    <img src={Games} alt="" className='w-7'/>
                    Games
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