import { NavLink, Outlet } from 'react-router-dom'
import Global from './assets/global.svg'
import Pessoas from './assets/pessoas.svg'
import Video from './assets/video.svg'

export default function VideoCurtos() {
    return (
        <>
            <div>
                <div>
                    <NavLink to='global'>
                        <img src={Global} alt="" />
                        Global
                    </NavLink>

                    <NavLink to='seguindo'>
                        <img src={Pessoas} alt="" />
                        Seguindo
                    </NavLink>

                    <NavLink to='criar'>
                        <img src={Video} alt="" />
                        Criar
                    </NavLink>
                </div>
                <Outlet/>
            </div>
        </>
    )
}