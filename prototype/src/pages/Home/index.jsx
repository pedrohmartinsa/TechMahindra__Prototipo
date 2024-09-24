import { NavLink, Outlet } from 'react-router-dom'
import Jornal from './assets/jornal1.svg'
import Estrela from './assets/estrela.svg'

export default function Home() {
    return (
        <>
            <div className='mt-6 mb-20'>
                <div className='flex gap-44'>
                    <NavLink to='' className='flex items-center gap-6'>
                        <img src={Jornal} alt="" className='w-7'/>
                        Jornal da Corrida
                    </NavLink>

                    <NavLink to='' className='flex items-center gap-6'>
                        <img src={Estrela} alt="" className='w-7'/>
                        HighLights
                    </NavLink>
                </div>
                <Outlet/>
            </div>
        </>
    )
}