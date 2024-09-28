import { NavLink } from "react-router-dom";
import FormsButton from "../../components/FormsButton";
import Seta from './assets/setinha.svg'

export default function Login() {
    return (
        <>
        <main className="bg-white border-[0.063rem] w-[75rem] h-[56.25rem] m-20 flex justify-center rounded drop-shadow-2xl">
            
            <div className="flex flex-col justify-center items-end">

                <div className="flex items-end gap-5 self-start mb-40">
                    <img src={Seta} alt="setinha de voltar" />
                    <h2 className="text-3xl">NomeDaPlataforma</h2>
                    <p className="text-sm"> - login</p>
                </div>

                <div className="flex flex-col gap-y-4">

                    <div className="flex flex-col">
                        <label htmlFor="userName">Nome de Usuário:</label>
                        <input className='text-x w-96 border-2 rounded-md px-2' type="text" id="userName" placeholder="userName..."/>
                    </div>

                    <div>

                        <div className="flex flex-col">
                            <label htmlFor="senha">Senha:</label>
                            <input className='text-x w-96 border-2 rounded-md px-2' type="text" id="senha" placeholder="Senha..." />
                        </div>

                        <div className="flex justify-between">

                            <a className="text-xs" href="">Esqueci minha senha.</a>
                            <a className="text-xs" href="">Não tenho cadastro.</a>
                            
                        </div>

                    </div>
    
                </div>

                <div className="mt-20">
                    <FormsButton buttonText = "Entrar"/>
                </div>
            </div>
            
        </main>
        
        
        </>
    )
}