import { NavLink, Outlet } from "react-router-dom"
import Quiz from './assets/quiz.svg'
import Customizar from './assets/customizar.svg'


export default function Games() {

    const menuCss =  'flex items-center gap-6'

    return (
        <>
            <div className='mt-6 mb-20'>
                <div className='flex justify-center gap-44'>

                    <NavLink to='customizar' className={menuCss}>
                        <img src={Customizar} alt="" className='w-7'/>
                        Customizar
                    </NavLink>

                    <NavLink to='quiz' className={menuCss}>
                        <img src={Quiz} alt="" className='w-7'/>
                        Quiz
                    </NavLink>
                </div>
                <div className='mx-16'>
                    <Outlet/>
                </div>     
            </div>
        </>
    )
}