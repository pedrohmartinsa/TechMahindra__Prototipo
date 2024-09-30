import { Children } from "react"
import { Outlet } from "react-router-dom"
export default function Centralizador() {

    const menuCss =  'flex items-center gap-6'

    return(
        <>
            <div className='mt-6 mb-20'>
                <div className='flex justify-center gap-44'>

                    {Children}

                </div>
                <div className='mx-16'>
                    <Outlet/>
                </div>     
            </div>
        </>
    )
}