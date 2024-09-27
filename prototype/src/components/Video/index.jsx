import Perfil from './assets/perfil.svg'
import AddPerfil from './assets/addperfil.svg'
import Compartilhar from './assets/compartilhar.svg'
import Curtir from './assets/curtir.svg'
import Mensagem from './assets/mensagem.svg'
import Salvar from './assets/salvar.svg'

export default function Video() {

    const cssBotoes = 'flex flex-col items-center'

    return(
        <>
        <div className='flex items-center justify-center mt-20'>

            <div className='flex items-end gap-x-7'>

                <div className='w-[27.5rem] h-[40rem] drop-shadow-2xl bg-white rounded-md'>
                    <p className=''>video</p>
                </div>
                
                <div className='flex flex-col gap-y-3'>
                    <div className='relative mb-3'>
                        <button className=''><img className='w-14' src={Perfil} alt="" /></button>
                        <button className='absolute right-3 mt-10'><img src={AddPerfil} alt="" /></button>
                    </div>

                    <div className={cssBotoes}>
                        <button><img className='w-14' src={Curtir} alt="" /></button>
                        <p>203</p>
                    </div>

                    <div className={cssBotoes}>
                        <button><img className='w-14' src={Mensagem} alt="" /></button>
                        <p>30</p>
                    </div>

                    <div className={cssBotoes}>
                        <button><img className='w-14' src={Salvar} alt="" /></button>
                        <p>11</p>
                    </div>

                    <div className={cssBotoes}>
                        <button><img className='w-14' src={Compartilhar} alt="" /></button>
                        <p>7</p>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}