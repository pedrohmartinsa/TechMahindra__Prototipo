import Nuvem from '../assets/nuvem.svg'

export default function Criar() {
    return (
        <>
            <div className=' w-[55.5rem] h-[38.75rem] flex justify-center items-center mt-20 bg-white drop-shadow-2xl rounded-xl'>

                <div className= 'flex flex-col items-center gap-y-6'>
                    <img src={Nuvem} alt="" />
                    <div className='flex flex-col items-center gap-y-6'>
                        <h2 className='text-3xl'>Selecione o vídeo a enviar.</h2>
                        <p className='text-xl text-slate-500'>Ou arraste e solte aqui.</p>
                        <button className='text-white bg-red-700 px-6 py-1 rounded-md'>Selecionar Vídeo</button>
                    </div>
                </div>

            </div>
        </>
    )
}