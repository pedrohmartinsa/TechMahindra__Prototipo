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
                        <h3>Jornal da Corrida</h3>
                    </NavLink>

                    <NavLink to='highlights' className={menuCss}>
                        <img src={Estrela} alt="" className='w-7'/>
                        <h3>HighLights</h3>
                    </NavLink>
                </div>
                <div className='mx-16'>
                    <Outlet/>
                </div>     
            </div>
        </>
    )
}