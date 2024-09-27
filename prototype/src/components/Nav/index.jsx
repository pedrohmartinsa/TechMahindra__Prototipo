import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import Home from './assets/home.svg'
import HomeSelect from './assets/homeSelect.svg'

import Videos from './assets/videos.svg'
import VideoSelect from './assets/videoSelect.svg'

import Live from './assets/live.svg'
import LiveSelect from './assets/liveSelect.svg'
import LiveRed from './assets/liveRed.svg'


import Customizar from './assets/customizar.svg'
import CustomizarSelect from './assets/customizarSelect.svg'

import Coracao from './assets/coracao.svg'
import CoracaoSelect from './assets/coracaoSelect.svg'

import Perfil from './assets/perfil.svg'
import PerfilSelect from './assets/perfilSelect.svg'

import Engrenagem from './assets/engrenagem.svg'
import EngrenagemSelect from './assets/engrenagemSelect.svg'



export default function Nav() {

    const cssTextoSelected = 'font-bold drop-shadow-xl'
    const cssTextoUnselected = ''

    const Unselect = [Home, Videos, Live, Customizar, Coracao, Perfil, Engrenagem]
    const Select = [HomeSelect, VideoSelect, LiveSelect, CustomizarSelect, CoracaoSelect, PerfilSelect, EngrenagemSelect]

    const [iconHome, setIconHome] = useState(Home)

    const [textoHome, setTextoHome] = useState(cssTextoUnselected)

    const handleClickHome = () => {
        setIconHome((prev1) => (
            prev1 == Home ? HomeSelect : Home
        ))

        setTextoHome((prev2) => (
            prev2 == cssTextoUnselected ? cssTextoSelected : cssTextoUnselected
        ))
    }

    const [iconVideos, setIconVideos] = useState(Videos)

    const [textoVideos, setTextoVideos] = useState(cssTextoUnselected)

    const handleClickVideo = () => {
        setIconVideos((prev1) => (
            prev1 == Videos ? VideoSelect : Videos
        ))

        setTextoVideos((prev2) => (
            prev2 == cssTextoUnselected ? cssTextoSelected : cssTextoUnselected
        ))
    }




    const navCss = 'flex gap-6 items-center'

    return (
        <>
        <div className='flex flex-col justify-between h-screen border-r-2 px-10'>
            <h2 className='mt-10'>NomeDaPágina</h2>
            <div className='flex flex-col justify-between gap-6 '>
                <div>
                    <NavLink onClick={handleClickHome} to='/' className={navCss}>
                    <img src={iconHome} alt="" className='w-7'/>
                    <p className={textoHome}>Home</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink onClick={handleClickVideo} to='/videosCurtos' className={navCss}>
                    <img src={iconVideos} alt="" className='w-7'/>
                    <p className={textoVideos}>Shorts</p>
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
                    <img src={Customizar} alt="" className='w-7'/>
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