import { NavLink, Outlet } from 'react-router-dom'
import Jornal from './assets/jornal1.svg'
import Estrela from './assets/estrela.svg'

export default function Home() {

    const menuCss =  'flex items-center gap-6'

    return (
        <>
            <div className='mt-6 mb-20'>
                <div className='flex justify-center gap-44'>

                    <NavLink to='jornal' className={menuCss}>
                        <img src={Jornal} alt="" className='w-7'/>
                        Jornal da Corrida
                    </NavLink>

                    <NavLink to='highlights' className={menuCss}>
                        <img src={Estrela} alt="" className='w-7'/>
                        HighLights
                    </NavLink>
                </div>
                <div className='mx-16'>
                    <Outlet/>
                </div>     
            </div>
        </>
    )
}