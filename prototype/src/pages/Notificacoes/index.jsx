import SetaDireita from './assets/setinhaDireita.svg'

export default function Games() {

    return (
        <>
            <div className='mt-20 mb-20'>
                <div className='flex flex-col justify-center items-center gap-y-14 drop-shadow-2xl bg-white p-10'>

                <div className='flex items-center w-72 gap-x-3 drop-shadow-2xl bg-white'>
                    <div>
                        <h3 className="font-bold">Solicitações</h3>
                        <p>juninhogameplay + 27 solicitações</p>
                    </div>
                    <a href=""><img src={SetaDireita} alt="" /></a>
                </div>

                <div className='flex items-center w-72 gap-x-3 drop-shadow-2xl bg-white'>
                    <div>
                        <h3 className="font-bold">Esta semana</h3>
                        <p>lucio_melo + 20 e outras pessoas curtiram seu vídeo.</p>
                    </div>
                    <a href=""><img className='h-7 w-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcclYMBogGaD6aC69m0G45y1AZqIR9-R-veqe3qF7GcSIbFpErMnym6kjpwD4Lp82kpY&usqp=CAU" alt="" /></a>
                </div> 

                <div className='flex items-center w-72 gap-x-3 drop-shadow-2xl bg-white'>
                    <div>
                        <h3 className="font-bold">Este mês</h3>
                        <p>lucio_melo + 20 e outras pessoas curtiram seu vídeo.</p>
                    </div>
                    <a href=""><img className='h-7 w-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcclYMBogGaD6aC69m0G45y1AZqIR9-R-veqe3qF7GcSIbFpErMnym6kjpwD4Lp82kpY&usqp=CAU" alt="" /></a>
                </div> 

                <div className='flex items-center w-72 gap-x-3 drop-shadow-2xl bg-white'>
                    <div>
                        <h3 className="font-bold">Anteriores</h3>
                        <p>lucio_melo + 20 e outras pessoas curtiram seu vídeo.</p>
                    </div>
                    <a href=""><img className='h-7 w-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcclYMBogGaD6aC69m0G45y1AZqIR9-R-veqe3qF7GcSIbFpErMnym6kjpwD4Lp82kpY&usqp=CAU" alt="" /></a>
                </div>      

                </div>
            </div>
        </>
    )
}