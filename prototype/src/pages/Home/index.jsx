import { NavLink, Outlet } from 'react-router-dom'
import Jornal from './assets/jornal1.svg'
import Estrela from './assets/estrela.svg'

export default function Home() {
    return (
        <>
            <div>
                <div>
                    <NavLink to=''>
                        <img src={Jornal} alt="" />
                        Jornal da Corrida
                    </NavLink>

                    <NavLink to=''>
                        <img src={Estrela} alt="" />
                        HighLights
                    </NavLink>
                </div>
                <Outlet/>
            </div>
        </>
    )
}