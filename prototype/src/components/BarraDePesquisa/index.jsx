import Lupa from './assets/lupa.svg'

export default function BarraDePesquisa() {
    return (
        <>
            <div className='flex items-center gap-7 border border-black w-[31.25rem] h-10 rounded-md'>
                <img src={Lupa} alt="" className='w-7 ml-[1.875rem]'/>
                <input type="text" placeholder={'Pesquisar...'} className='text-xl' />
            </div>
        </>
    )
}