import { NavLink, Outlet } from 'react-router-dom'
import Global from './assets/global.svg'
import Pessoas from './assets/pessoas.svg'
import Video from './assets/video.svg'

export default function VideoCurtos() {

const menuCss = 'flex items-center gap-6'

    return (
        <div className='flex justify-center mt-6'>
            <div className='flex flex-col items-center'>
                <div className='flex gap-32'>
                    <NavLink to='global' className={menuCss}>
                        <img src={Global} alt="" />
                        <h3>Global</h3>
                    </NavLink>

                    <NavLink to='seguindo' className={menuCss}>
                        <img src={Pessoas} alt="" />
                        <h3>Seguindo</h3>
                    </NavLink>

                    <NavLink to='criar' className={menuCss}>
                        <img src={Video} alt="" />
                        <h3>Criar</h3>
                    </NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}