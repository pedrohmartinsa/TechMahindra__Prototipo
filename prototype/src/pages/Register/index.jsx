import FormsButton from "../../components/FormsButton";
import Seta from './assets/setinha.svg'

function Register() {
    return ( 
        <>
        <main className="bg-white border-[0.063rem] m-20 flex justify-center rounded drop-shadow-2xl">
            <div className="">
                <div className="flex items-end gap-5">
                    <img src={Seta} alt="setinha de voltar" />
                    <h2 className="text-3xl">NomeDaPlataforma</h2>
                    <p className="text-sm"> - cadastro</p>
                </div>
                
                <div className="flex ">
                    <div className="">
                        <div>
                            <label for="name">Nome:</label>
                            <input type="text" id="name" placeholder="Nome..."/>
                        </div>
                        <div>
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" placeholder="E-mail..."/>
                        </div>
                        <div>
                            <label for="cell">Celular:</label>
                            <input type="number" id="cell" placeholder="(11) 99999-9999"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="cpf">CPF:</label>
                            <input type="number" id="cpf" placeholder="CPF..."/>
                        </div>
                        <div>
                            <label for="year_old">Data de Nascimento:</label>
                            <input type="date" id="year_old"/>
                        </div>
                        <div>
                            <label for="name">Gênero:</label>
                            <select>
                                <option value="" selected disabled>Selecione</option>
                                <option value="masc">Masculino</option>
                                <option value="fem">Feminino</option>
                                <option value="none">Prefiro não informar</option>
                            </select>
                        </div>
                    </div>
                    
                    
                    <FormsButton buttonText = "Confirmar"/>
                </div>
            </div>
        </main>
        </>
     );
}

export default Register;