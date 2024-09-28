import FormsButton from "../../components/FormsButton";
import Seta from './assets/setinha.svg'

function Register() {
    return ( 
        <>
        <main className="bg-white border-[0.063rem] w-[75rem] h-[56.25rem] m-20 flex justify-center rounded drop-shadow-2xl">

            <div className="flex flex-col justify-center items-end">

                <div className="flex items-end gap-5 self-start mb-40">
                    <img src={Seta} alt="setinha de voltar" />
                    <h2 className="text-3xl">NomeDaPlataforma</h2>
                    <p className="text-sm"> - cadastro</p>
                </div>
                
                <div className="flex gap-x-20">

                    <div className="flex flex-col gap-y-4">

                        <div className="flex flex-col">
                            <label for="name">Nome:</label>
                            <input className='text-x w-96 border-2 rounded-md px-2' type="text" id="name" placeholder="Nome..."/>
                        </div>

                        <div className="flex flex-col">
                            <label for="email">E-mail:</label>
                            <input className='text-x w-96 border-2 rounded-md px-2' type="email" id="email" placeholder="E-mail..."/>
                        </div>

                        <div className="flex flex-col">
                            <label for="cell">Celular:</label>
                            <input className='text-x w-44 border-2 rounded-md px-2' type="number" id="cell" placeholder="(11) 99999-9999"/>
                        </div>

                    </div>

                    <div className="flex flex-col gap-y-4">

                        <div className="flex flex-col">
                            <label for="cpf">CPF:</label>
                            <input className='text-x w-44 border-2 rounded-md px-2' type="number" id="cpf" placeholder="CPF..."/>
                        </div>

                        <div className="flex flex-col">
                            <label for="year_old">Data de Nascimento:</label>
                            <input className='text-x w-44 border-2 rounded-md px-2' type="date" id="year_old"/>
                        </div>

                        <div className="flex flex-col">

                            <label for="name">Gênero:</label>
                            <select className='text-x w-44 border-2 rounded-md px-2'>
                                <option value="" selected disabled>Selecione</option>
                                <option value="masc">Masculino</option>
                                <option value="fem">Feminino</option>
                                <option value="none">Prefiro não informar</option>
                            </select>

                        </div>

                    </div>
                    
                </div>

                <div className="mt-20">
                    <FormsButton buttonText = "Confirmar"/>
                </div>
                
            </div>
        </main>
        </>
     );
}

export default Register;