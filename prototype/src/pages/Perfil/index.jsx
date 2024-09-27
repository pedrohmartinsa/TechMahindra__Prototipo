import { NavLink } from 'react-router-dom'
import Editar from './assets/editar.svg'
import Videos from './assets/videos.svg'
import  Customizacoes from './assets/customizacoes.svg'
import Salvos from './assets/salvos.svg'
import Foto from './assets/fotoUsuario.svg'

export default function Perfil() {

    const cssOpcoes = 'flex items-center'

    const cssOpcoesImg = 'mr-3'

    const cssOpcoesTexto = 'text-2xl text-slate-500'
    
    return (
        <>
            <div className='flex flex-col items-start ml-10 border-b-2 border-slate-500'>

                <div className='flex flex-col items-start'>

                    <div className='flex items-center gap-x-6 my-9'>
                        
                        <img src={Foto} alt="foto do usuário" className='w-32'/>

                        <div className='flex flex-col'>

                            <div className='mb-8'>
                                <h3 className='text-2xl font-bold'>NomeDeUsuário</h3>
                                <p className='text-xl'>Nome</p>
                            </div>
                            
                            <button className='flex gap-x-2 border-2 border-black px-3 py-1 rounded-md'>
                                <img src={Editar} alt="" />
                                Editar Perfil
                            </button>

                        </div>

                    </div>

                    <div className='flex gap-x-5 mb-10'>
                        <p className='text-slate-500'><span className='text-black'>0</span> Seguidores</p>
                        <p className='text-slate-500'><span className='text-black'>0</span> Seguindo</p>
                    </div>
                </div>

                <div className='flex gap-x-[6.25rem] '>
                    <NavLink className={cssOpcoes}>
                        <img className={cssOpcoesImg} src={Videos} alt="" />
                        <p className={cssOpcoesTexto} >Vídeos</p>
                    </NavLink>

                    <NavLink className={cssOpcoes}>
                        <img className={cssOpcoesImg} src={Customizacoes} alt="" />
                        <p className={cssOpcoesTexto}>Customizações</p>
                    </NavLink>

                    <NavLink className={cssOpcoes}>
                        <img className={cssOpcoesImg} src={Salvos} alt="" />
                        <p className={cssOpcoesTexto}>Salvos</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}